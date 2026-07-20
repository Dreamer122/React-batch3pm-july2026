import { useState,useEffect } from "react"
import {Card} from "../Components/Card"
import { Loader } from "../Components/Loader"
import { Navbar } from "../Components/Navbar"
import { GoSearch } from "react-icons/go"
import { Link } from "react-router"
export const Home = ({addcart}) => {
    // console.log("start")
    const [data,setData]=useState([])
    const [filterdata,setFilterData]=useState([])
    // get data from api

    // hook -> useEffect hook , it contains two parameters
    // first one is a callback , and second one is a dependency array
    // console.log("before useeffect")
    useEffect(()=>{
     fetch("https://api.escuelajs.co/api/v1/products")
     .then((res)=>res.json()).then((data1)=>{
        // console.log("data",data1)
        setData(data1)
        setFilterData(data1)
    })
        .catch((error)=>console.log("error occured while fetching data",error))

    },[])
    // console.log("after useEffect")
    if(data.length==0){
        return <Loader/>
    }

    // filterdata function
    const filterfunc=(value)=>{
    //   console.log(value)

        const filteredvalue=data.filter((v)=>v.title.toLowerCase().includes(value.toLowerCase()))
    //   console.log(filteredvalue)
        setFilterData(filteredvalue)


    }
  return (
   <>
   <h1 style={{textAlign:"center",marginBlock:"20px"}}> All Products</h1>
   <div className="sb">
    <div className="searchbar">
        <input type="search" name="searchtext" onChange={(e)=>filterfunc(e.target.value)}  /><GoSearch style={{fontSize:"25px"}} />
    </div>
   </div>
   <div className="cardcontainer">

   {
    filterdata.map((prd)=>{
        prd.qty=1
        // console.log("prd=",prd)
       return (
        <Card product={prd} addcart={addcart} key={prd.id} />
       )
    })
   }
   </div>

   </>
  )
}
