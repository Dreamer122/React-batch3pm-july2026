import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { account } from '../lib/appwrite'
import { db } from '../appwriteConfig'
import { ID } from 'appwrite'
import toast from 'react-hot-toast'

export const Signup = () => {
  const [loading,setLoading]=useState(false)
    const {register,handleSubmit,formState:{errors}}=useForm()

    const createAccount=async (data)=>{
        console.log(data)
        setLoading(true)

       try {
    const user = await account.create({
        userId:ID.unique() ,
        name:data.fullname,
        email: data.email,
        password: data.password
    });
    console.log(user)

    // send data to user table
    const res = await db.createRow({
    databaseId: import.meta.env.VITE_APPWRITE_DB_ID,
    tableId: import.meta.env.VITE_APPWRITE_USERS_TABLE,
    rowId: ID.unique(),
    data: {
      FullName:data.fullname,
      Email:data.email,
    }
});
console.log("response",res)
toast.success("account created successfully")


} catch (e){
    console.error(e)
    toast.error("error occured:"+e.message)
}
finally{
  setLoading(false)
}

    }

  return (
 <>
 
 <form action="" onSubmit={handleSubmit(createAccount)}>
    <input type="text" placeholder='enter your full name' {...register("fullname",{required:true})} /> <br />
    <input type="email" placeholder='enter your email' {...register("email",{required:true})} /> <br />
    <input type="password" name="" id="" placeholder='create password' {...register("password",{required:true})} /> <br />
    <input type="submit" disabled={loading} value={`${loading?"creating...":"create account"}`} />
 </form>
 </>
  )
}
