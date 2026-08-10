import { createContext, useState } from "react";

export const CartContext=createContext()

export const CartProvider=({children})=>{
    // it contains all state and function which are going to be passed to multiple component
    const [cart,setCart]=useState("hello")

    return (
        <CartContext.Provider value={cart}>
{children}
        </CartContext.Provider>
    )
}