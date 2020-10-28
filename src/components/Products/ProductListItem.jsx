import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductListItem(props) {

  const specificProductURL = `products/${props.productID}`

  return (
    <div className="col-md-4">
        <div className="card bg-dark"> 
          
          <h5>{props.name}</h5>
          <p className="text-right">{props.images[0].alt}</p>
          <Link to={specificProductURL}><img src={props.images[0].src.small} alt="img-fluid" className="img-fluid"/></Link>
          <Link to={specificProductURL} className="nav-link">View product</Link>
        </div>
      </div>

   
  )
}
