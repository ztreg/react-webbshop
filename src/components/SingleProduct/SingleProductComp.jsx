import React, { useContext } from 'react'
import CardText from '../Card/CardText'
import { CartContext } from '../../Context/CartContext'
import CartImage2 from '../Cart/CartImage2'

export default function SingleProductComp(props) {
  const {setCartData, totalPrice, setTotalPrice} = useContext(CartContext)

  function handleAddCart() {
    setCartData(oldCartData => [...oldCartData, props.data.name])
    setTotalPrice(totalPrice + props.data.price)
  }

  return (
    <div className="card bg-dark text-white"> 
      <h3>{props.data.name}</h3>    
      <CardText>{props.data.description}</CardText>
      <img src={props.data.images[0].src.small} alt={props.data.images[0].alt} className="snimg"/>
      <CardText>In Stock {props.data.stock}</CardText>
      <CardText>User Ratings {props.data.rating}</CardText>
      <CardText>Price: {props.data.price}</CardText>
      <button className="btn btn-danger" onClick={handleAddCart}>
        <h4>Add to cart 
          <CartImage2 />
        </h4>
      </button>
    </div>
  )
}
