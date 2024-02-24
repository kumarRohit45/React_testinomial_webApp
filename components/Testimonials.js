import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const Testimonials = ({reviews}) => {
  const [index,setIndex] = useState(0);

  function leftShiftHandler(){
    if(index-1<0){
      setIndex(reviews.length-1);
    }
    else{
      setIndex(index-1);
    }
  }

  function rightShiftHandler(){
    if(index+1 >=reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  }

  function surpriseHandler(){
  let randomIndex =  Math.floor( Math.random() * reviews.length);
  setIndex(randomIndex);
  }

   
  return (
    <div className='full-card'>
       

      
        <Card review = {reviews[index]} ></Card>
        <div>
            <button className='side-btn side-btn1'  onClick={leftShiftHandler}>
                <FiChevronLeft/>
            </button>
            <button className='side-btn side-btn2' onClick={rightShiftHandler}>
            <FiChevronRight/>
            </button>

        </div>
        <div>
            <button className='surprise-btn' onClick={surpriseHandler}>
                Suprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonials