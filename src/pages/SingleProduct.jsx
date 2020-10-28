import React, {useEffect, useState} from 'react'
import ReviewsList from '../components/Review/ReviewsList'
import SingleProductComp from '../components/SingleProduct/SingleProductComp'
import firebase from './../firebaseConfig'

export default function SingleProduct(props) {
  const productID = props.match.params.product_id

  const [singleProductData, setProductsData] = useState(null)
  const [reviewData, setReviewData] = useState(null)

  const database = firebase.database()
  
  const productURL = `products/${productID}`
  const productsREF = database.ref(productURL)

  const reviewURL = `reviews/${productID}`
  const reviewRef = database.ref(reviewURL)

  useEffect(() => {
    productsREF.on('value', snapshot => {
      setProductsData(snapshot.val())
    })
    reviewRef.on('value', snapshot => {
      setReviewData(snapshot.val())
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    
    <div className="text-white container">
      {singleProductData && (
        <SingleProductComp 
          productID={productID} 
          data={singleProductData}
        />
      )}
      {reviewData ? <ReviewsList reviews={reviewData} /> : 'No reviews on this product'}

    </div>
  )
}
