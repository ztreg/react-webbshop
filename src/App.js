import './App.css';
import {Switch, Route, Link} from "react-router-dom"
import React, {useState} from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct';
import Cart from './components/Cart/Cart';
import { CartContext } from './Context/CartContext';
import User from './components/User/User';

function App() {
  const [cartData, setCartData] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [currentUser, setCurrentUser] = useState("Visitor")

  return (
    <div className="container-fluid bg-dark">
      
      <ul className="nav navbar-nav">
        <li className=""><Link to="/">Home</Link></li>
        <li className=""><Link to="/products">Products</Link></li>
      </ul>

      <CartContext.Provider value={
        {cartData, setCartData, totalPrice, setTotalPrice, currentUser, setCurrentUser}
        }>
        <User />
        <Cart></Cart>
      
        <Switch>
          <Route path="/products/:product_id" component={SingleProduct}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </CartContext.Provider>
    </div>
  );
}

export default App;
