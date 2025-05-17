import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "../components/Header"
import Filtros from '../components/Filtros'
import ProductList from '../components/ProductList'
import Pagination from '../components/Pagination'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSupermarket, setSelectedSupermarket] = useState("")
  const [totalPages, setTotalPages] = useState(1)
  const [isSearchActive, setIsSearchActive] = useState(false)

  // Products per page
  const limit = 12

  useEffect(() => {
    if (!isSearchActive) {
      fetchProducts(currentPage, selectedSupermarket)
    }
  }, [currentPage, selectedSupermarket, isSearchActive])

  // Fetch products for regular pagination with optional supermarket filter
  const fetchProducts = async (page, supermarket = "") => {
    setLoading(true)
    try {
      let url = `https://fresquitas-api.fly.dev/cervezas/baratas?page=${page}&limit=${limit}`
      if (supermarket) {
        url += `&supermercado=${encodeURIComponent(supermarket)}`
      }

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("Failed to fetch products")
      }

      const data = await response.json()
      console.log(data)

      setProducts(data.resultados)
      setTotalPages(data.pages)
      setCurrentPage(data.page)
      setLoading(false)
    } catch (error) {
      console.error("Fetch error:", error)
      setError(error.message)
      setLoading(false)
    }
  }

  // Search products using the search endpoint
  const searchProducts = async (query, page = 1) => {
    if (!query.trim()) {
      setIsSearchActive(false)
      setSearchTerm("")
      fetchProducts(1, selectedSupermarket)
      setCurrentPage(1)
      return
    }

    setLoading(true)
    setIsSearchActive(true)
    setSearchTerm(query)

    try {
      const response = await fetch(`https://fresquitas-api.fly.dev/cervezas/buscar?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`)
      if (!response.ok) {
        throw new Error("Failed to search products")
      }

      const data = await response.json()
      console.log(data)
      console.log(query)

      setProducts(data.resultados)
      setTotalPages(data.pages)
      setCurrentPage(data.page)
      setLoading(false)
    } catch (error) {
      console.error("Search error:", error)
      setError(error.message)
      setLoading(false)
    }
  }

  const handleSearch = (term) => {
    searchProducts(term)
  }

  const handleFilter = (supermarket) => {
    setSelectedSupermarket(supermarket)
    // Reset to page 1 when changing filters
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleClearSearch = () => {
    setIsSearchActive(false)
    setSearchTerm("")
    fetchProducts(1, selectedSupermarket)
    setCurrentPage(1)
  }


  return (
    <>
      <Header onSearch={handleSearch} initialValue={searchTerm} />
      <div className='row'>
        <div className='col-3'>
          <Filtros onFilter={handleFilter} />
        </div>
        <div className='col-9'>
          <AnimatePresence mode="wait">
            {error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="error"
              >
                Error: {error}
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProductList products={products} loading={loading} />
                {totalPages > 1 && (
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
