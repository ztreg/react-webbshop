import React, {useContext} from 'react'
import { CartContext } from "../../Context/CartContext";
export default function OrderSuccess(props) {
  const { setTotalPrice, setCartData } = useContext(CartContext);

  function resetCartData () {
    setTotalPrice(0)
    setCartData([])
    props.setOrderPlaced(false)
  }

  return (
    <div>
      <div className="col">Order made!</div> 
      <button className="btn btn-danger" onClick={resetCartData}>Make a new order</button>
    </div>
  )
}
