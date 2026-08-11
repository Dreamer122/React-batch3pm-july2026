import React,{useState,useEffect,useContext} from 'react'
import { CartContext } from '../context/CartContext'

export const Home = () => {
    const [products,setProducts]=useState([])
    const {addcart}=useContext(CartContext)

    const getproducts=async()=>{
        const res=await fetch(" https://api.escuelajs.co/api/v1/products")
        const result=await res.json()
        console.log(result)
        setProducts(result)
    }
    useEffect(()=>{
        getproducts()
    },[])
  return (
   <>
   <h1> Home component</h1>
   <div style={{display:"flex",flexWrap:"wrap"}}>

   {
    products?.map((prd,i)=>{
        prd.qty=1
        return (
            <div key={i}>
                <img src={prd.images?.[0]} alt="" style={{height:"200px"}} />
                <h4>{prd.title}</h4>
                <p>price:{prd.price}</p>
                <button onClick={()=>addcart(prd)}>add to cart</button>
            </div>
        )

    })
   }
   </div>

   </>
  )
}
