import footerlogo from '../assets/footerlogo.jpg'
import { NavLink } from 'react-router-dom'
import {FiInstagram,FiFacebook, FiTwitter} from 'react-icons/fi'
import { FaCopyright } from "react-icons/fa";
import './Footer.css'
export default function Footer(){


    return (
        <footer className='footer'>
            <div className="container footer-container">
            <div className="footer-1">
            <img src={footerlogo} alt="" />
            <h1>Power-hosting</h1>
            </div>
            <div className="footer-2">
                <h2>Links</h2>
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
          
             <div className="footer-3">
                <h2>Support</h2>
                <ul>
                    <li>
                        <a href="#">Technology</a>
                        <a href="#">Maintance</a>
                        <a href="#">Products</a>
                        <a href="#">Customers</a>
                        <a href="#">Contact</a>
                    </li>
                </ul>
             </div>
             <div className="footer-4">
                 
                 <div className="icon">
                 <span ><FiInstagram/></span>
                 <span ><FiFacebook/></span>
                 <span ><FiTwitter/></span>
                 </div>
                
             </div>
            </div>
         
        </footer>
    )
}