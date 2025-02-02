import { FaShoppingCart } from "react-icons/fa";
import './style.css'
import { useState, useContext } from "react";
import { CartContext } from "./cartlogic";
export default function ShoppingCart(){

        const [openCart,setOpenCart] = useState(false);
    const {cartItems,addToCart,removeFromCart,getTotalInCart,clearCart} = useContext(CartContext)
        function toggleCart(){
            setOpenCart((prev) => !prev)
            console.log('Otvoreno')
        }
        
    return (
        
            <div className="cart">
                <FaShoppingCart onClick={toggleCart}/>
                {openCart && <div className="cart-content" >
                    <div className="inside-cart">
                    <button className="btn" onClick={()=> setOpenCart(false)}>X</button>
                    <p>Total price: {getTotalInCart().toFixed(2)}$</p>
                        {
                        cartItems.map((cartItem,index)=>
                            <div className="inside-products" key={index}>
                    
                    <img src={cartItem.thumbnail} alt="" />
                    <h4 className="title">{cartItem.title}</h4>
                    <p className="price">{cartItem.price}$</p>
                    <p>Quantity:{cartItem.quantity}</p>
                    <button className="remove-btn" onClick={()=>removeFromCart(cartItem)}>remove</button>
                    </div>
                        )
                        
                }
                <button onClick={()=>clearCart()} className="clear-btn">
                  Clear
                </button>
 </div> 
                    </div>}
            </div>
       
    )
}