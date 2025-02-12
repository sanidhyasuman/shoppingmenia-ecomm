import React, { useState, useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const { url } = useContext(ShopContext)
  const [state, setState] = useState("Login")

  // ✅ Validation Schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    username: state === "Sign Up" ? Yup.string().required("Username is required") : Yup.string().notRequired(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  //  Submit Handler
  const onSubmit = async (data) => {
    console.log(state, "function called", data)

    let endpoint = state === "Login" ? '/login' : '/signup'
    let response = await fetch(url + endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    let responseData = await response.json()
    
    if (responseData.success) {
      localStorage.setItem('auth_token', responseData.token)
      window.location.replace('/')
    } else {
      alert(responseData.errors)
    }
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='loginsignup-fields'>
          {state === "Sign Up" && (
            <>
              <input {...register('username')} type="text" placeholder='Full Name' />
              <p className="error">{errors.username?.message}</p>
            </>
          )}
          <input {...register('email')} type="text" placeholder='Email' />
          <p className="error">{errors.email?.message}</p>

          <input {...register('password')} type="password" placeholder='Password' />
          <p className="error">{errors.password?.message}</p>

          <button type="submit">Continue</button>
        </form>

        {state === "Sign Up"
          ? <p className='loginsignup-login'>Already have an account? <span onClick={() => setState("Login")}>Login here</span></p>
          : <p className='loginsignup-login'>Create an account? <span onClick={() => setState("Sign Up")}>Sign Up Here</span></p>
        }

        <div className='loginsignup-agree'>
          <input type="checkbox" />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
