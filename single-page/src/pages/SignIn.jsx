import deer from '../assets/deer.jpg';
import { FiArrowLeft } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa6";
import Home from './Home.jsx'
import './SignIn.css'
import { useState } from 'react';
export default function SignIn() {

    const [showPassword,setShowPassword] = useState(false);

    function TogglePassword(){
        setShowPassword((prev)=> !prev)
    }

    return (
        <section 
            className="register"
            style={{backgroundImage : `${deer}`,
            minHeight:'100vh',
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}
        >
          <a className='previous' href='./Home'><FiArrowLeft/></a>
            <div className="register-container">
                
                 <div className="reg-info">
                 <h1>Sign In</h1>
                    <input type="email" placeholder='Email' />
                    <input className="pass" type={showPassword? 'text' : 'password'} placeholder='Password' />
                    <span className='eye' onClick={TogglePassword}>{showPassword === true ? <LuEye/> : <FaRegEyeSlash/>}</span>
                    <a>You forget your password ? Let's reset it</a>
                    <button>Sign Up</button>
                 </div>
                 
            </div>
        </section>
    );
}
