import { createContext,useState,useEffect } from "react";

export const CartContext= createContext()

export const CartProvider =({children}) =>{

    const [cartItems,setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]);
    
    const addToCart = (item) =>{
        const isItemInCart = cartItems.find((cartItem)=> cartItem.id === item.id);  // varijabla gde je u cart vec dodati proizvod
        if (isItemInCart){
            setCartItems(
                cartItems.map((cartItem)=>
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
                )
            ) // Petlja gde ukoliko je vec u cart a mi pokusamo da dodamo da povecava samo kolicinu proizvoda
        }else{
            setCartItems([...cartItems, {...item,quantity:1}])
        } //else petlja gde ukoliko nije dodajemo ga u cart
        console.log("Cart after adding:", cartItems);
    console.log("LocalStorage after adding:", localStorage.getItem("cartItems"));
    }

    const removeFromCart = (item) =>{
        const isItemInCart = cartItems.find((cartItem)=> cartItem.id === item.id);
        if(isItemInCart.quantity === 1){
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        }
        else{
          setCartItems(
            cartItems.map((cartItem)=>
            cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            )
          )  
        }
    }

    const clearCart = () =>{
        setCartItems([]);
    }

    const getTotalInCart = ()=>{
        return cartItems.reduce((total,item)=> total + item.price * item.quantity, 0);
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }, [cartItems]);
    
      useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
          setCartItems(JSON.parse(cartItems));
        }
      }, []);

    




    return (
         <CartContext.Provider value={
            {
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getTotalInCart,

            }
        }>
            {children}
         </CartContext.Provider>
    )
}
