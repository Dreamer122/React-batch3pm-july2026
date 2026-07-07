import { useState,useEffect } from "react"
import {Card} from "../Components/Card"
export const Home = () => {
    console.log("start")
    const [data,setData]=useState([])
    // get data from api

    // hook -> useEffect hook , it contains two parameters
    // first one is a callback , and second one is a dependency array
    console.log("before useeffect")
    useEffect(()=>{
     fetch("https://api.escuelajs.co/api/v1/products")
     .then((res)=>res.json()).then((data1)=>{
        console.log("data",data1)
        setData(data1)
    })
        .catch((error)=>console.log("error occured while fetching data",error))

    },[])
    console.log("after useEffect")
  return (
   <>
   <h1> All Products</h1>
   <div className="cardcontainer">

   {
    data.map((prd)=>{
       return (
        <Card product={prd} key={prd.id}/>
       )
    })
   }
   </div>

   </>
  )
}
