import { useState, useEffect } from "react"
import LoadingCard from "./LoadingCard"
import "../styles/ProductList.css"

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setLoading(true)
      try {
        // Replace with your actual API call
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Sample data - replace with your actual data
        setProducts([
          { id: 1, nombre: "Cerveza Peroni", precio: "3000", precioxlitro: "6000", supermercado: "Coto", descuento: "30%"},
          { id: 2, nombre: "Cerveza Peroni", precio: "3000", precioxlitro: "6000", supermercado: "Coto", descuento: "30%"},
          { id: 3, nombre: "Cerveza Peroni", precio: "3000", precioxlitro: "6000", supermercado: "Coto", descuento: "30%"},
        ])
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="product-list">
      {loading ? (
        // Display loading cards while data is being fetched
        <>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </>
      ) : (
        // Display actual products once loaded
        products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src="https://cdn.v2.tiendanegocio.com/gallery/17745/img_17745_1c38lee6scm9vsc9ij.png?class=sm" alt="" />
            </div>
            <div className="product-content">
              <p className="supermercado">{product.supermercado}</p>
              <h3 className="nombre">{product.nombre}</h3>
              <p className="precio">${product.precio}</p>
              <span className="descuento">
                {product.descuento}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default ProductList
