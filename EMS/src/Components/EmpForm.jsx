import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const EmpForm = ({func,isEdit,defaultValue}) => {
  const {register,handleSubmit,formState:{errors},reset}=useForm({
    defaultValues:defaultValue || {}

  })

 

  useEffect(()=>{
    if(defaultValue && isEdit){
      reset({...defaultValue})
    }
  },[defaultValue,isEdit])
  
  return (
 <>
 <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
      <form onSubmit={handleSubmit(func)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee Name</label>
                  <input type="text"  {...register("Name",{
                    required:{
                      value:true,
                      message:"name is required"
                    },
                    minLength:{
                      value:2,
                      message:"name should be min 2 character long"
                    }
                  })} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
              {
                errors.Name && <span className="text-red-500">{errors.Name.message}</span>
              }
              </div>
              <div className="w-full">
                  <label for="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" {...register("Email",{
                    required:{
                      value:true,
                      message:"email is required"
                    },

                  })} id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
               {
                errors.Email && <span className="text-red-500">{errors.Email.message}</span>
              }
              </div>
              <div className="w-full">
                  <label for="Salary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                  <input type="number" {...register("Salary",{
                    required:{
                      value:true,
                      message:"salary is required"
                    },
                    min:{
                      value:25000,
                      message:"salary should be more than 25000"
                    }
                  })} id="Salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""/>
               {
                errors.Salary && <span className="text-red-500">{errors.Salary.message}</span>
              }
              </div>
              <div>
                  <label for="Department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                  <select {...register("Department")} id="Department" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected>Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                  </select>
              </div>
              <div>
                  <label for="Designation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
                  <input type="text" {...register("Designation")} id="Designation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""/>
              </div> 
             
          </div>
          <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            {isEdit?"update Employee":"Add EMployee"}
          </button>
      </form>
  </div>
</section>
 </>
  )
}
