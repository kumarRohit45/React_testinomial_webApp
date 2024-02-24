import React from 'react'
import reviews from './components/data'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='App'>
       <div className='Heading'>
            Our Testimonials
        </div>
        <div className='underline'>

        </div>
      <Testimonials reviews = {reviews}/>
    </div>
  )
}

export default App