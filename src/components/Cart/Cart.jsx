import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import PlaceOrder from '../Order/PlaceOrder';
import CartImage from './CartImage';
import CartItem from './CartItem';
import TotalPrice from './TotalPrice';

export default function Cart() {

  const {cartData} = useContext(CartContext)

  function handleCart() {
    console.log("Clicked on cart");
  }
  
  return (
    <div className="text-white float-right m-3 p-3 bg-secondary">
      <button className="btn btn-secondary" onClick={handleCart}>
        <CartImage />
      </button>
      {cartData && (
        cartData.map((cartItemData, index) => {
          return(
            <CartItem 
              key={index} 
              data={cartItemData}
            />
          )
        })
      )}
      <TotalPrice/>
      <PlaceOrder />
    </div>
  )
}
