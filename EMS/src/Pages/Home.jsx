import { useEffect,useState } from 'react';
import axios from 'axios';
import { Card } from '../Components/Card';
export const Home = () => {
    const [empdata,setEmpdata]=useState([])


    const  getdata= async()=>{
         try{
          let res= await axios.get("http://localhost:3000/employees")
          console.log("response=",res.data)
          setEmpdata(res.data)
        }
        catch(error){
            console.log("error",error)
        }
    }
    // delete emp
    const deleteemp= async(id)=>{
        const check=confirm("are you sure?")
        if(check){

            const res=await axios.delete(`http://localhost:3000/employees/${id}`)
            console.log("res,",res)
        }

    }

    useEffect(()=>{
       getdata()
    },[])
  return (
   <>
   <div className="flex gap-6 flex-wrap mx-auto w-[90%]">
   {
    empdata?.map((e)=>{
        return (
            <>
            <Card key={e.id} data={e} deleteemp={deleteemp}/>

               </>
            
        )
    })
   }
   </div>
   </>
  )
}
