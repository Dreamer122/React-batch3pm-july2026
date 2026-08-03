import React,{useEffect,useState} from 'react'
import {EmpForm} from "../Components/EmpForm"
import axios from 'axios'
import {useParams,useNavigate} from "react-router"

export const UpdateEmp =() => {
    const [empdata,setEmpdata]=useState({})
    const navigate=useNavigate()

    const {id}=useParams()
    const getdata=async ()=>{

     const res=   await axios.get(`http://localhost:3000/employees/${id}`)
   console.log("res",res)
   setEmpdata(res.data)

    }
   


    const updateData=async(data)=>{
        const res=axios.put(`http://localhost:3000/employees/${data.id}`,{
            ...data
        })
        console.log("res update emp",res)
        navigate("/")
        
    }

    useEffect(()=>{
        getdata()
    },[id])
  return (
   <>
   <div className='bg-gray-900'>

   <h2 className="text-4xl text-center text-white"> Update Data</h2>
   {
   Object.keys(empdata).length > 0 &&
 <EmpForm isEdit={true} defaultValue={empdata} func={updateData}/>
   }
   </div>
   </>
  )
}
