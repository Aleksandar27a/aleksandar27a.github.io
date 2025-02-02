import deer from '../assets/deer.jpg';
import { FiArrowLeft } from "react-icons/fi";
 
import './SignUp.css'
import { Link } from 'react-router-dom';
export default function SignUp() {
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
                 <h1>Sign Up</h1>
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <Link to="/signin"> You have already account ? Login in </Link>
                    <button>Sign Up</button>
                 </div>
                 
            </div>
        </section>
    );
}
