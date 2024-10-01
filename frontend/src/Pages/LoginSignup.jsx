import React, { useState, useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/LoginSignup.css'



const LoginSignup = () => {

  const { url } = useContext(ShopContext)

  const [state, setState] = useState("Login");
  const [formdata, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("Login function called", formdata);
    let responseData;
    await fetch(url + '/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata)
    }).then((response) => response.json()).then((data) => responseData = data);
    if (responseData.success) {
      localStorage.setItem('auth_token', responseData.token);
      window.location.replace('/');
    }
    else {
      alert(responseData.errors);
    }
  }

  const signup = async () => {
    console.log("signup function called", formdata);
    let responseData;
    await fetch(url + '/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formdata)
    }).then((response) => response.json()).then((data) => responseData = data);
    if (responseData.success) {
      localStorage.setItem('auth_token', responseData.token);
      window.location.replace('/');
    }
    else {
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1 >{state}</h1>
        <div className='loginsignup-fields'>
          {state === "Sign Up" ? <input name='username' value={formdata.username} onChange={changeHandler} type="text" placeholder='Full Name' /> : <></>}
          <input name='email' value={formdata.email} onChange={changeHandler} type="text" placeholder='Email' />
          <input name='password' value={formdata.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up"
          ? <p className='loginsignup-login'>Already have an account?<span onClick={() => { setState("Login") }}>Login here</span></p>
          : <p className='loginsignup-login'>Create an account?<span onClick={() => { setState("Sign Up") }}>Sign Up Here</span></p>
        }
        <div className='loginsignup-agree'>
          <input type="checkbox" id="" name="" />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
