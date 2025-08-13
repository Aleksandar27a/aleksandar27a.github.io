import React, { useState } from 'react'
 import { Link } from 'react-router-dom'
import './login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
export const Login = () => {
  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth,email,password)
      window.location.href='/dashboard'
      console.log('User login successful!')
    }catch(error:any){
      console.log(error.message)
    }
  }


  return (
    <form onSubmit={handleSubmit} className='login-form'>
        <fieldset>
            <legend className='text'>Login</legend>
            <label>Username</label>
            <input id='login-email' type="email" name='email'  onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password</label>
            <input id='login-password'  type="password" name='password' onChange={(e)=> setPassword(e.target.value)} />
            <Link to="/register" id='register-now' >You didn't register? Register Now!</Link>
            <button type='submit'>Submit</button>
        </fieldset>
        </form>
  )
}

export default Login