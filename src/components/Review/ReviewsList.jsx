import React from 'react'
import ReviewItem from './ReviewItem'

export default function ReviewsList(props) {

  return (
    <div className="col-md-8">
      <h3 className="text-center">Product Reviews</h3>
      {Object.entries(props.reviews).map((reviewListItem, index) => {
        return (
          <ReviewItem
            key={index}
            reviewID={reviewListItem[0]}
            desc={reviewListItem[1].description}
            author={reviewListItem[1].author.name}
            title={reviewListItem[1].title}
            rating={reviewListItem[1].rating}
            productID={reviewListItem[1].product}
            date={reviewListItem[1].date}
          />
        )
      })}
    </div>  
  )
}
