import React from 'react'
import CardText from '../Card/CardText'

export default function ReviewItem(props) {
  return (
    <div className="text-left">
      <div className="text-white card bg-dark p-3">
          <h5>Title: {props.title}</h5>
          <CardText className="text-right"> Written by: {props.author}</CardText>
          <CardText>User Rating: {props.rating} </CardText>
          <CardText>Comment: {props.desc}</CardText>
          <CardText>Written: {props.date}</CardText>

          {/* reviewID={reviewListItem[0]}
                desc={reviewListItem[1].description}
                author={reviewListItem[1].name}
                title={reviewListItem[1].title}
                rating={reviewListItem[1].rating}
                productID={reviewListItem[1].product} */}
      </div>
    </div>
  )
}
