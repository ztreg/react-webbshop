import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function TotalPrice(props) {
  const {totalPrice} = useContext(CartContext)
  return (
    <div>
        Total Price : {totalPrice}
    </div>
  )
}
