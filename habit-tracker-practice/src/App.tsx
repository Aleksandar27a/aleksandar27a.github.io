 import HabitForm from './habit-form'
import './App.css'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import  HabitList  from './habit-list'
import React, { useEffect, useState } from 'react'
import Login from './components/login'
import Register from './components/register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './components/firebase'
import { User } from 'firebase/auth'
function App() {
 const [user,setUser] = useState<User | null>(null)

    useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged(user =>{
            if(!user) return;
            setUser(user)
        })
        return ()=> unsubscribe()
    })

 return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={user?<Navigate to='/dashboard'/> : <Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<><HabitForm/><HabitList/> </>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>

 
 

 </>

 )

}
export default App
