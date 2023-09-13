import React from 'react'
import ProductItem from './productItem'
import useMyContext from '../hooks/useMyContext'

export default function ProductList() {
  const { products } = useMyContext()

  return (
    <div className='wrap-product'>
      <div className='grid-container'>
        {products.map((product, index) => (
          <ProductItem
            key={index.toString() + product.id.toString()} //do id bị trùng nhau
            id={product.id}
            images={product.images}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </div>
  )
}
