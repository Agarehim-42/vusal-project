import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container my-[50px] mx-auto gap-5'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default Products