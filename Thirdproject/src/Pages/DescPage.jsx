import {useParams} from 'react-router'
import { useEffect } from 'react'
export const DescPage = () => {
    const {slug,id}=useParams()
    // console.log("params=",data)
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  .then(response => response.json())
  .then(data => console.log(data));
    },[])
  return (
    <>
    <div>DescPage</div>
    </>
  )
}
