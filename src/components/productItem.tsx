import React from 'react'
import { ProductType } from '../types/product.type'

export default function ProductItem(props: ProductType) {
  return (
    <div className='product'>
      <img className='product-image' src={props.images[0]} alt='ảnh sản phẩm' />
      <div className='product-info'>
        <div className='product-info-name'>{props.title}</div>
        <p className='product-info-price'>
          Giá: <b>{props.price}</b>
        </p>
      </div>
    </div>
  )
}
