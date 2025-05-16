import React from 'react'
import Header from "../components/Header"
import Filtros from '../components/Filtros'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <>
      <Header />
      <div className='row'>
        <div className='col-3'>
          <Filtros />
        </div>
        <div className='col-9'>
          <ProductList />
        </div>
      </div>
    </>
  )
}
