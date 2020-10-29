import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function CartItem(props) {
  const {cartData, setCartData, totalPrice, setTotalPrice} = useContext(CartContext)
  let index = props.data[0]
  
  function removeFromCart () {
    let array = [...cartData]
    if(index !== -1) {
      array.splice(index, 1)
      setCartData(array)
    }
    setTotalPrice(totalPrice - props.data[1].price)
  }
  return (
    <div className="text-white">
    <p>{props.data[1].name}
      <button className="ml-3 btn-danger" onClick={removeFromCart}>
        X
      </button>
    </p>
  </div>
  )
}
