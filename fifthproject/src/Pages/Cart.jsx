import React ,{useContext}from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
    const {cart,quantity,removeprd}=useContext(CartContext)
  return (
<>
{
    cart?.map((prd,i)=>{
        return (
            <div style={{display:"flex",gap:"10px"}}>
                <div>
                    <img src={prd.images?.[0]} alt="" style={{height:"100px"}} />
                </div>
                <div>
                    <p>{prd.title}</p>
                    <p>{prd.price}</p>
                </div>
                <div>
                    <button onClick={()=>quantity(prd,1)}>+</button>
                    <span>{prd.qty}</span>
                    <button onClick={()=>quantity(prd,-1)}>-</button>
                </div>
                <div>
                    <button onClick={()=>removeprd(prd)}>remove</button>
                </div>
               

            </div>
        )

    })
}
</>  
)
}
