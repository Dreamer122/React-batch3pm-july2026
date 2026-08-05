import React,{useEffect,useState,useRef} from 'react'

export const Productpage = () => {
    const [data1,setData1]=useState({})
    const mainimage=useRef(null)
    const image=useRef(null)
    const getprd=async()=>{
     const res=await  fetch("https://api.escuelajs.co/api/v1/products/21")
     const d=await res.json()
     console.log("data",d)
     setData1(d)
    }

    const handleImages=(src)=>{
        // let src=image.current.src;
        // console.log("src=",src)
        mainimage.current.src=src
    }
    useEffect(()=>{
        getprd()
    },[])
  return (
   <>
   <h1>product images</h1>
   <div style={{display:"flex",gap:"10px"}}>
    <div className="left">
{
    data1?.images?.map((v,i)=>{
        return (
            <div key={i}><img src={v} alt="hello" style={{height:"100px"}} ref={image} onClick={()=>handleImages(v)}/> </div>
        )
    })
}

    </div>
    <div className='right'>
<img src={data1?.images?.[0]} alt=""  style={{height:"300px"}} ref={mainimage}/>
    </div>
   </div>
   </>
  )
}
