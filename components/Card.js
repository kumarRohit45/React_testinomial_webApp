import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;
  return (
    <div className='card'>
        <div>
            <img src={review.image}/>
            <div className='bg'></div>
        </div>
        <div className='name'>
           
            {review.name}
        </div>
        <div className='title'>
            
            {review.title}
        </div>
        <div className='quotes'>
         <FaQuoteLeft/>
        </div>
        <div className='review'>
            {review.text}
            {/* I have had the pleasure of working with this team on several projects, and I am consistently working with this team
            I have had the pleasure of working with this team on several projects, and I am  */}
        </div>
        <div className='quotes'>
           <FaQuoteRight/>
        </div>

      

    </div>
  )
}

export default Card