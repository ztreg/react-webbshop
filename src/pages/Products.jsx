import React, {useState, useEffect} from 'react'
import ProductList from '../components/Products/ProductList'
import firebase from './../firebaseConfig'

export default function Products() {

  const [productsData, setProductsData] = useState([])

  const database = firebase.database()
  const productsURL = `products`
  const productsREF = database.ref(productsURL)

  useEffect(() => {
    productsREF.on('value', snapshot => {
      setProductsData(snapshot.val())
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container bg-dark text-white">
      {productsData && (
          <ProductList products={productsData}/>        
      )}
    </div>
  )
}
