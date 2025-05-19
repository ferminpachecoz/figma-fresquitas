import { useState, useEffect } from "react"
import LoadingCard from "./LoadingCard"
import "../styles/ProductList.css"
import { motion } from "framer-motion"

const ProductList = ({products, loading}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="product-list">
      {loading ? (
        // Display loading cards while data is being fetched
        <>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </>
      ) : (
        // Display actual products once loaded
        products.map((product, index) => (
          <motion.div variants={container} key={index} className="product-card">
            <div className="product-image">
              <img src={product.imagen_url} alt="" />
            </div>
            <div className="product-content">
              <p className="supermercado">{product.supermercado}</p>
              <h3 className="nombre">{product.producto}</h3>
              <p className="precio">${product.precio}</p>
              {product.descuento?
              <span className="descuento">
                {product.descuento}
              </span>
              :<></>
              }
            </div>
          </motion.div>
        ))
      )}
    </div>
  )
}

export default ProductList
