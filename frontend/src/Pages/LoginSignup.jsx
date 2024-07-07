import React from 'react'
import './CSS/LoginSignup.css'


const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1 >Sign UP</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" id="" name="" />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
