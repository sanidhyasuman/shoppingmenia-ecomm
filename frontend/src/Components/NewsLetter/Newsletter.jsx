import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On your Email</h1>
      <p>Subscribe to our newsletter and Stay Updated</p>
      <div>
        <input type='email' placeholder='Enter Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
