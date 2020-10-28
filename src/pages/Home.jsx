import React from 'react'
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <div className="text-white p-3">
      <h1>Homepage</h1>
      <h2>wow super prices</h2>
      <h3>Wow super home page</h3>
      <h3>check <Link to="/products">products </Link> for products</h3>
      
    </div>
  )
}
