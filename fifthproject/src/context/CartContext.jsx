import { createContext, useState } from "react";

export const CartContext=createContext()

export const CartProvider=({children})=>{
    // it contains all state and function which are going to be passed to multiple component
    const [cart,setCart]=useState([])
   
     const addcart=(prd)=>{
    console.log("prd")
    let flag=0
    cart?.forEach((p)=>{ 
      if(p.id==prd.id){
        flag=1
      }  
    })
    if(flag==1){
      alert("product already added to cart")
    }
    else{
      setCart([...cart,prd])
      alert("product added to cart")

    }


  }

   const removeprd=(prd)=>{
    console.log("product=",prd)
    const filteredarray=cart.filter((p)=>p.id!=prd.id)
    setCart([...filteredarray])
  }
  const quantity=(p,v)=>{
    const newarr=cart.map((prd)=>{
      if(prd.id==p.id){
        if(v==1){

          prd.qty+=v
          return prd
        }
        else{
          if(prd.qty<2){
            return prd
          }
          else{
            prd.qty+=v
            return prd
          }
        }
      }
      else{
        return prd
      }
    })
    setCart([...newarr])

  }

    return (
        <CartContext.Provider value={{cart,addcart,quantity,removeprd}}>
{children}
        </CartContext.Provider>
    )
}