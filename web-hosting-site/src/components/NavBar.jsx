import './NavBar.css'
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from "react-icons/fa";

export default function Navbar(){

    const [showLinks,setShowLinks] = useState(false);

    function Toggle(){
        setShowLinks((prev)=> !prev)
    }


    return(
        <>
        <div className="nav-container">
            
            <div className="logo">
                <img src={logo} alt="" />
                <h1>Power-hosting</h1>
            </div>
        {
            (showLinks || window.innerWidth > 425) && (
                <>
                <div className={`links-container ${showLinks ? 'show' : ''}`} onClick={Toggle} >
        <div className="links">
            <ul>
                <li>
                    <NavLink to='/home' className={({isActive}) => (isActive ? 'active-link' : '')}>Home</NavLink>
                </li>
                <li><NavLink to="/packages" className={({isActive}) => (isActive ? 'active-link' : '')}> Packages</NavLink></li>
                <li><NavLink to='/help' className={({isActive}) => (isActive ? 'active-link' : '')}>Help</NavLink></li>
                <li><NavLink to='/blog' className={({isActive}) => (isActive ? 'active-link' : '')}>Blog</NavLink></li>
                <li><NavLink to='/contact' className={({isActive}) => (isActive ? 'active-link' : '')}>Contact</NavLink></li>
                
            </ul>
            
        </div>
         <div className="sign">
            <ul>
            <li><NavLink to='/signup' className={({isActive}) => (isActive ? 'active-link' : '')}><button className='btn'>Sign Up</button></NavLink></li>
            <li><NavLink to='/signin' className={({isActive}) => (isActive ? 'active-link' : '')}>Sign In</NavLink></li>
            </ul>
         
         </div>
        </div>
            </>
            )
           
            
        }
            <div className="hamburger-menu" onClick={Toggle}>
                <FaBars className='bars'/>
             </div>
          
        </div>
        
</>
    )
}