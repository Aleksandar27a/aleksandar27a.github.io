import { useState } from 'react';
import './styles.css'


export default function Faq(){
        const [active,setActive] = useState(null);

        function Toggle(index){
            setActive(active === index ? null : index)
        }
        
        const faqData = [
            {
                question: "Who are we",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sapiente alias quam repellat sed esse."
            },
            {
                question: "How can you contact us",
                answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque error libero mollitia iste quo nam tenetur eligendi! Placeat, tempore dignissimos?"
            },
            {
                question: "How to apply",
                answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
            {
                question: "Where is our location",
                answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error pariatur earum quasi assumenda a doloremque quia?"
            },
        ]

    return (
         <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <div className="questions">
                {
                    faqData.map((item,index)=>{
                        return(
                        <div onClick={()=> Toggle(index)}   className='question' >
                            <div>
                            {item.question}
                            </div>
                           
                            {active === index && <p  className={`answer ${active === index ? 'active': ''}`}>{item.answer}</p>}
                          
                             
                        </div>
                        
                        )
                        
                    })
                }
            </div>
         </div>
    )
}