import React from 'react'
import { EmpForm } from '../Components/EmpForm'
import { useNavigate } from 'react-router'
import axios from "axios"

export const CreateEmp = () => {
  const navigate=useNavigate()

  const createEmployee=async(data)=>{
    const res=await axios.post("http://localhost:3000/employees",data)
    console.log("res",res)
    navigate('/')


  }
  return (
  <div className="bg-gray-900">
  <h1 className=' text-white text-3xl text-center py-5'>Create New Employee</h1>
  <EmpForm func={createEmployee}  isEdit={false} />
  </div>
  )
}
