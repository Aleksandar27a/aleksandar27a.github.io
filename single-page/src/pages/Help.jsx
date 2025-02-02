import Faq from "../components/Faq";
import Footer from "../components/Footer";
 
import './Help.css'
// import '../components/Footer.css'
export default function Help() {
  return (
    <>
    <section>
    <h1 className="help">Help Center</h1>
    </section>
   
     <section className="faq-section">
      <h1 className="title">Frequently Asked Questions</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quisquam ipsam magnam, amet voluptatem ad.
      </p>
      <Faq />
    </section>
        <section className="more-questions">
            <h1>Stay up to date with the latest information</h1>
            <p>Subscribe us to get updated with newest events</p>
        <div className="more-container">
            <input type="email" required placeholder="Enter your email"/>
            <button className="btn">Subscribe</button>
        </div>
        </section>
        
    
    <Footer/>
    </>
   
  );
}
