import React from 'react'
import ProductListItem from './ProductListItem'


export default function ProductList(props) {

  const productListData = props.products

  return (
    <div className="row">
    {productListData && (
    Object.entries(productListData).map((productListItem, index) => {
        return (
          <ProductListItem
            key={index}
            productID={productListItem[0]}
            desc={productListItem[1].description}
            images={productListItem[1].images}
            name={productListItem[1].name}
          />
        )
      }))}
    </div>
  )
}
