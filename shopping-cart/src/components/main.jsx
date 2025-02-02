import {useContext, useEffect, useState } from "react";
import './style.css' 
import ShoppingCart from "./shoppingcart";
import { CartContext } from "./cartlogic";


export default function ProductPage(){

    const [data,setData] = useState([]);
    const [cart,setCart] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const {cartItems,addToCart} = useContext(CartContext);
    

   async function fetchData(){
        try{
            setLoading(true)
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setData(data.products)
            console.log(data.products);
        }catch(error){
            setError(error);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    if(loading){
        return <h1>Loading products... Please wait !</h1>
    }


    return (
        <>
       <div>
        <ShoppingCart/>
       </div>
        <div className="products-container">
            
                {data.map((item)=>
                <div className="products">
                <img src={item.images} alt={item.title} />
                <h2>{item.title}</h2>
                    <p>{item.price}$</p>
                    <button onClick={()=> addToCart(item)}>Buy now !</button>
                    </div>
                )}
        </div>
        </>
    )
}