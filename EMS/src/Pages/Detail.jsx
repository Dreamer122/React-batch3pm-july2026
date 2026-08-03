import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const Detail = () => {
    console.log("hello")
    const {id}=useParams()
    const [emp,setEmp]=useState({})
    const getempdata=async()=>{
        const res=await axios.get(`http://localhost:3000/employees/${id}`)
        console.log("res",res)
        if(res.status==200){
            setEmp(res.data)
        }
    }
    useEffect(()=>{
        getempdata()
    },[id])
  return (
   <>
  <p className="text-6xl"> hello </p> 
  <p>{emp.Name}</p>
  <p>{emp.designation}</p>
  <p>{emp.Salary}</p>
  <p>{emp.phone}</p>
   </>
  )
}
