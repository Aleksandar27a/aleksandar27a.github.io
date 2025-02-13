import './Contact.css'
import '../components/Footer.css'
import { FaPhoneAlt, } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../components/Footer";
export default function Contact(){
    return (
    
        <>
            <section className="contact">
                <h1>Contact</h1>
          </section>
        <section className="container">
            <div className="contact-container">
                <h2>Our Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23223.265641632275!2d21.893359!3d43.316181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0c240c81f65%3A0x56319fe3122ac3cd!2z0J3QuNGI!5e0!3m2!1ssr!2srs!4v1738248864541!5m2!1ssr!2srs"></iframe>
            </div>
        </section>

        <section className="container form-info">
            <div className="form-left">
            <h1>Send us your opinion</h1>
            <div className="form">
                <input type="text" placeholder='Enter your name'  required/>
                <input type="text" placeholder='Enter your last name'  required/>
                <input type="email" placeholder='Enter your email'  required/>
                <input type="text" placeholder='Share your opinion'  required/>
                <button>Send</button>
                </div>
                
            </div>
            
           
            <div className="info-right">
                <span><FaPhoneAlt className='phone'/> +381 65 221 322</span>
                <span><HiOutlineMail className='mail'/>astojiljkovic24@gmail.com</span>
                <span><IoLocationSharp className='location'/>Trg Kralja Aleksandra 18</span>
            </div>
        </section>
        <Footer/>
 </>
    )
}