import { useEffect,useState } from 'react';
import axios from 'axios';
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

    useEffect(()=>{
       getdata()
    },[])
  return (
   <>
   {
    empdata?.map((e)=>{
        return (
            <div key={e.id}>
                <img
  src={`https://api.dicebear.com/10.x/initials/svg?seed=${e.Name}`}
  alt="avatar" className="rounded-full w-10" />
                <p className="text-amber-300">{e.Name}</p>
                <p>{e.designation}</p>
            </div>
        )
    })
   }
   </>
  )
}
