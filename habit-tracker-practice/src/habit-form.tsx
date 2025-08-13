import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addHabit,} from './HabitSlice';
import {store} from './store'
import { auth, db } from './components/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import hello from './assets/hello.png';
import { FaBars } from "react-icons/fa";
 
 type User = {
  firstName:string,
}
export const HabitForm = () => {
  
  
    
    const [showProfile,setProfile] = useState<User | null>(null)
    const [habit,setHabit] = useState('');
    const [frequency,setFrequency] = useState('daily')
    const [openMenu,setOpenMenu] = useState<boolean>(false)

    const fetchUserData = async()=>{
      auth.onAuthStateChanged(async(user)=>{
        console.log(user)
        if(!user) return;
        const docRef = doc(db,"Users",user.uid);
        const docSnap=await getDoc(docRef)
        if(docSnap.exists()){
          setProfile(docSnap.data() as User)
        }
      })
    }

    const handleLogout = async()=>{
      try{
        await auth.signOut()
        window.location.href = '/login'
      }catch(e:any){
        toast.error(e.message)
      }
    }

    useEffect(()=>{
      fetchUserData()
    },[])
    const dispatch = useDispatch()
    const handleSubmit = (e:{preventDefault: ()=> void}) =>{
        e.preventDefault()
        if(habit) {
            dispatch(addHabit({name:habit,frequency}))
        }
    }

   
  return (
    <>
    <div className="upper-screen">
    
      {
        showProfile ? <div className='display-user'>
          <img id='hello' src={hello} alt="" />
          <h1> Welcome {showProfile.firstName}</h1>
        </div>:<h1>Loading</h1> 
      }
       <div className='menu-right'>
        <span id='menu' onClick={()=>setOpenMenu((prev)=>!prev)}><FaBars/></span>
        <div className='inside-menu' style={{display:openMenu ? 'flex':'none'}}>
        <button onClick={handleLogout} id='inside-btn' >Logout</button>
        </div>
      <button onClick={handleLogout} id='logout-btn' >Logout</button>
    </div>
    
    </div>
   
   
    <form onSubmit={handleSubmit}>
    <fieldset>
    <legend>Habit</legend>
    <input type="text" id='habit-input' value={habit} placeholder='enter your habbit' onChange={(e)=>setHabit(e.target.value)} />
    <select id='frequency-select' value={frequency} onChange={(e)=> setFrequency(e.target.value)}>
      <option value='daily'>Daily</option>
      <option value='weekly'>Weekly</option>
    </select>
    <button >Submit</button>
  </fieldset>
  </form>
  </>
  )
}
export default HabitForm

 