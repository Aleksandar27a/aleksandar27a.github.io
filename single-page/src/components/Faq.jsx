import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import '../pages/home.css'
export default function Faq() {
  const [display, setDisplay] = useState(null);

  function showAnswer(index) {
    setDisplay(display === index ? null : index);
  }

  const faqData = [
    {
        question:"Why can't people connect to the web server on my PC?",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quaerat!"
    },
    {
        question:"Why can't people connect to the web server on my PC?",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quaerat!"
    },
    {
        question:"Why can't people connect to the web server on my PC?",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quaerat!"
    },
    {
        question:"Why can't people connect to the web server on my PC?",
        answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quaerat!"
    },
]

  return (
    <section className="faq-section">
      
        <div className="container faq-container">
           
        
                {
                        faqData.map((data,index)=>(
                            <div key={index} className="faq" >
                                <div className="question">
                                <h1>{data.question}</h1>
                                <span className="plus"> <FiPlus  onClick={()=>showAnswer(index)}/></span>
                                </div>
                           <div className="answer">
                           {
                                display === index  && (
                                    <>
                                     <p>{data.answer}</p> 
                                     <span><FiMinus className="minus" onClick={()=>showAnswer(index)}/></span>
                                    </>
                               
                            )
                            }
                           </div>
                           
                        </div>
                        )
                          
                        )
                }
        
        </div>
       </section>
  );
}
