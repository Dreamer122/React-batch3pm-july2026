import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    // const {errors}=formstate
    // console.log(register("hello"))
    // console.log(obj)
    const submitform=(d)=>{
        console.log("data=",d)
    }
  return (
    <>
    <form onSubmit={handleSubmit(submitform)} action="" className='w-1/2 bg-gray-200 m-auto text-center'>
        <input type="text" className='border' placeholder="Fullname" {...register('fullname',{
            required:{
                value:true,
                message:"fullname is required"
            },
            pattern:{
                value:/^[A-Za-z\\s]+$/,
                message:"fullname can contain only alphabets"
            },
            minLength:{
                value:2,
                message:"name should be 2 character long"
            }
        })} /> 
        
        {errors.fullname && <span>{errors.fullname.message}</span>}
        <br />
        <input type="email" className='border' placeholder='email' {...register("email")} /> <br />
        <input type="number" className='border' placeholder='number'  {...register("phone")}/> <br />
        <label htmlFor="gender">gender</label> <br />
        <input type="radio" value="Male" {...register("gender")} />
        <label htmlFor="male">Male</label>
        
         <br /> 
        <input type="radio" value="Female" {...register("gender")} /> 
        <label htmlFor="Female">Female</label><br />
        <br />
        <input type="submit" value="Send" />
    </form>
    
    </>
  )
}
