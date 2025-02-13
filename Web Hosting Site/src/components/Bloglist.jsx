import { useState } from "react";
import '../pages/Blog.css'
import { FaCommentDots,FaUser } from "react-icons/fa";

export default function BlogData() {

    const Data = [

        {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/internet.jpg",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur commodi magni aperiam consequuntur beatae ratione totam laudantium quo odio modi!'
        },
        {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/wordpress.jpg",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur commodi magni aperiam consequuntur beatae ratione totam laudantium quo odio modi!'
        },
        {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/Newsletter.jpg",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur commodi magni aperiam consequuntur beatae ratione totam laudantium quo odio modi!'
        }, {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/single.png",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur commodi magni aperiam consequuntur beatae ratione totam laudantium quo odio modi!'
        }, {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/national.jpg",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur commodi magni aperiam consequuntur beatae ratione totam laudantium quo odio modi!'
        },
        {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/wordpress.jpg",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur commodi magni aperiam consequuntur beatae ratione totam laudantium quo odio modi!'
        },
        {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/wordpress.jpg",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur commodi magni aperiam consequuntur beatae ratione totam laudantium quo odio modi!'
        },
        {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/wordpress.jpg",
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur commodi magni aperiam consequuntur beatae ratione totam laudantium quo odio modi!'
        },
        {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/wordpress.jpg",
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, perspiciatis?'
        },
        {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/wordpress.jpg",
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, perspiciatis?'
        },
        {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/wordpress.jpg",
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, perspiciatis?'
        },
        {
            blogName: "Seo - How to optimize Wordpress website for google search",
            img: "/img/wordpress.jpg",
            description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, perspiciatis?'
        }
    ]
 



    const postPerPages = 3;
    const [currentPage,setPage] = useState(1);

    const lastIndex = currentPage * postPerPages
    const firstIndex =  lastIndex - postPerPages
    
    const currentPost = Data.slice(firstIndex,lastIndex);
    function NextPage(){
        if(currentPage < totalPages){
            setPage(currentPage + 1)
        }
    }
    function PreviousPage(){
        if(currentPage > 1){
            setPage(currentPage - 1);
        }
    }

    const totalPages = Math.ceil(Data.length / postPerPages)





return(
    <>
    <section className="blog">
        <h1>Read some blogs from our blogers</h1>
        
        {
           currentPost.map((data,index)=>(
            <div key={index} className="container blog-container">
                <img src={data.img}/>
                <div className="info">
                <h2>{data.blogName}</h2>
                <p>{data.description}</p>
                 <span className="comments"><span className="comment-left">
                 <FaUser/> Local Media |
                    </span>
                 <span className="comment-right">
                 3 <FaCommentDots/>
                 </span>
                 </span>
                </div>
                
            </div>
      
           )) 
        }
        
    <div className="pagination">
        <button onClick={PreviousPage} disabled={currentPage === 1}>Prev</button>
        {
            [...Array(totalPages)].map((_,index)=>(
                <button key={index} onClick={()=> setPage(index + 1)} className={currentPage === index + 1 ? 'active': ''}>{index + 1}</button>
            ))
        }
        <button onClick={NextPage} disabled={currentPage === totalPages}>Next</button>
    </div> 
    </section>

   
    </>
)







}