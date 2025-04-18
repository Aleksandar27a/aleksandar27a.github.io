import hero_right from "../assets/hero_right.png"
import information from '../assets/information.png'
import information2 from '../assets/information2.png'
import author from '../assets/author.png'
import author1 from '../assets/author1.png'
import author2 from '../assets/author2.png'
import { FiServer,FiPocket,FiTool, FiWifi, FiUploadCloud,FiPower,FiDatabase,FiArrowUp,FiPlus,FiMinus,FiChevronLeft,FiChevronRight,} from "react-icons/fi";
import { PiDotOutlineBold } from "react-icons/pi";
import VisiblyScroll from '../components/ScrollVisibility'
import './home.css'
import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Faq from "../components/Faq"

export default function Home(){
    const { showTopButton, GoToTop } = VisiblyScroll({ treshold: 100 });
            const [slide,setSlide] = useState(0);
            const [animate,setAnimate] = useState(false);
           

    
            const testData = [
                {
                    image:author,
                    name:'John Davis',
                    job:'Designer',
                    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatem accusantium! Dolorum reprehenderit obcaecati eveniet!'
                },
                {
                    image:author1,
                    name:'Mark Domer',
                    job:'CEO',
                    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatem accusantium! Dolorum reprehenderit obcaecati eveniet!'
                },
                {
                    image:author2,
                    name:'William Young',
                    job:'Developer',
                    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatem accusantium! Dolorum reprehenderit obcaecati eveniet!'
                },
                {
                    image:author,
                    name:'John Davis',
                    job:'designer',
                    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatem accusantium! Dolorum reprehenderit obcaecati eveniet!'
                },
                {
                    image:author,
                    name:'John Davis',
                    job:'designer',
                    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatem accusantium! Dolorum reprehenderit obcaecati eveniet!'
                }
              ]
              function slidePrev(){
                setAnimate(false);
                setTimeout(()=>{
                    setSlide((prev)=>(prev === 0 ? testData.length - 1 : prev - 1))
                    setAnimate(true)
                },10)
              }
              function slideNext(){
                setAnimate(false)
                setTimeout(()=>{
                    setSlide((prev)=>(prev + 1) % testData.length)
                })
              }

        
           
         
    return(
       <> 
        <section className="hero" >
            <div className="container hero-section">
                <div className="hero-left">
                <h3>Best Domain & hosting service provider</h3>
                <h1>Powerful web hosting</h1>
                <p>Supercharge your hosting with marketing tools, data backups all in one place.</p>
                <button className='btn get-started'>Get Started</button>
                </div>
                <div className="hero-right">
                <img src={hero_right} alt="" />
                </div>
            </div>
          
            {showTopButton && (
                <div className="go-top" onClick={GoToTop}>
                    <span><FiArrowUp className="arrow" /> </span>
                </div>
            )}
        
    

           
        </section>
        
        <section className='feature-container'>
            <div className="container feature-section">
                <h1>Check our Features</h1>
                <div className="features">
                 
             <div className="feature">
              <span className="icon one"><FiPocket color='white' /></span>  
                <h2>Protection</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
             </div>
                <div className="feature">
             <span className="icon two"><FiTool color='white' /></span>   
                <h2>Tehnical Support</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="feature">
                  <span className="icon three"><FiServer /></span>  
                <h2>Employee</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                <div className="feature">
             <span className="icon four"><FiWifi color='aqua'/></span>   
                <h2>Great connection</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="feature">
               <span className="icon five"><FiUploadCloud color='blue' /></span> 
                <h2>New Features</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="feature">
               <span className="icon six"><FiPower />
               
               </span> 
                <h2>Up Time 100%</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </div>
              
            </div>
        </section>



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
            <span className="card-icon"><FiDatabase /></span> 
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
  
        <section className="faq-section">
      <h1 className="title">Frequently Asked Questions</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quisquam ipsam magnam, amet voluptatem ad.
      </p>
      <Faq />
    </section>
     
     <section className="testimonials">
     <h1>Look what our client says</h1>
        <div className="container testimonial-container">
            <FiChevronLeft onClick={slidePrev} className="a-left"/>
                    <div key={slide} className={`content ${animate ? 'slide':''}`}>
            <div className="inside-content">
            <img src={testData[slide].image} alt="" />
                    <h2>{testData[slide].name}</h2>
                    <h3>{testData[slide].job}</h3>
                    <p>{testData[slide].desc}</p>
            </div>
                   </div>
             
            
        
               <FiChevronRight onClick={slideNext} className="a-right"/>
          
        </div>
     </section>
               <Footer/>
        </>
    )
    
}