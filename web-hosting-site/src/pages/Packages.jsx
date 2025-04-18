import { FiDatabase, FiServer, FiUploadCloud } from "react-icons/fi";
import information from '../assets/information.png'
import information2 from '../assets/information2.png'
import Footer from "../components/Footer"
import './Packages.css'
import { PiDotOutlineBold } from "react-icons/pi";
import footerlogo from '../assets/footerlogo.jpg'
import { NavLink } from 'react-router-dom'
import {FiInstagram,FiFacebook, FiTwitter} from 'react-icons/fi'
import { FaCopyright } from "react-icons/fa";
export default function Packages(){
    return (
        <>
         <section className='sub'>
        <div className="container subscription-container">
            <h1>Choose premium packet for you </h1>
            <p className='title'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae deleniti voluptas totam, ex sed reiciendis!</p>
                <div className="cards">
                    <div className="card">
                        <span className="card-icon"><FiServer/></span>
                        <h2>Shared Hosting</h2>
                        <h4>For only</h4>
                        <h3>$4.00/month</h3>
                        <hr />
                        <p>5 TB of space</p>
                        <p>No limit on bandwidth</p>
                        <p>free domain</p>
                        <p>1TB databese</p>
                        <button className="btn">Buy Now</button>
                    </div>
        
                    <div className="card">
                    <span className="card-icon"><FiDatabase/></span> 
                        <h2>Dedicated Hosting</h2>
                        <h4>For only</h4>
                        <h3>$7.77/month</h3>
                        <hr />
                        <p>8 TB of space</p>
                        <p>No limit on bandwidth</p>
                        <p>free domain</p>
                        <p>10TB database</p>
                        <button className="btn">Buy Now</button>
                    </div>
        
        
                    <div className="card">
                       <span className="card-icon"><FiUploadCloud /></span> 
                        <h2>Cloud Hosting</h2>
                        <h4>For only</h4>
                        <h3>$12.32/month</h3>
                        <hr />
                        <p>Unlimite space</p>
                        <p>No limit on bandwidth</p>
                        <p>free domain</p>
                        <p>unlimited database</p>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
        </div>
        </section>

<section className="information">
        <div className="info-container">
            <div className="about">
            <div className="info-left">
                <img src={information} alt="" />
            </div>
            <div className="info-right">
                <h1>What is Web-Hosting?</h1>
                <p>Web hosting is the process of purchasing online space to store your website on the internet. Signing up for a web hosting service empowers you to publish your website online.</p>
            </div>
            </div>
            
        <div className="about">
            <div className="info-second-left">
                <h1>Dedicated Support</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quae architecto laboriosam rerum, et quis! Assumenda nemo corporis magni blanditiis?</p>
                <li> <PiDotOutlineBold/> WordPress hosting with detailed website</li>
                <li > <PiDotOutlineBold/> Our experts are just part of the reason</li>
            </div>
            <div className="info-second-right">
                <img src={information2} alt="" />
            </div>
        </div>
            
        </div>
        
        
        </section>

    <Footer/>
        </>
       
        
    )
}