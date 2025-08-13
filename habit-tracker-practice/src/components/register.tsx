import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth,db } from './firebase'
import { setDoc,doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
export const Register = () => {
    const [firstname,setFirstName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const handleRegister = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            const user = auth.currentUser
            if(user){
                await setDoc(doc(db,"Users",user.uid),{email:user.email,firstName:firstname,})
            }
            console.log(user)
            toast.success("User is registered successfully",{position:'top-center'})
        }catch(error:any){
            console.log(error)
            toast.error(error.message,{position:'bottom-center'})
        }
    }
  return (
    <>
 
    <form onSubmit={handleRegister} className='register-form'>
   
        <fieldset>
        <legend className='register'>Register</legend>
        <label>First Name</label>
        <input id='register-firstname' type="text" value={firstname} onChange={(e)=> setFirstName(e.target.value)} required placeholder='enter your first name'/>
        <label>Email</label>
        <input id='register-email' type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder='enter your username'/>
        <label>Password</label>
        <input id='register-password' type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required placeholder='enter your password'/>
        </fieldset>
        <Link className='login-link' to='/login'>You already have account? Login in</Link>
        <button>Register</button>
        
   
    </form>
 
    </>
  )
}

export default Register