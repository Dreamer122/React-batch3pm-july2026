import {useParams} from 'react-router'
import { useEffect,useState } from 'react'
export const DescPage = () => {
    const {id}=useParams()
    const [product,setProduct]=useState({})
    // console.log("params=",data)
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
  .then(response => response.json())
  .then(data =>{
     console.log(data)
     setProduct(data)
  }
);
    },[])
  return (
    <>
<div>
<div className="product-desc">
  <div className="Left-images">
    {
      // optional chaining
      product?.images?.map((v)=>{
        return (
          <div key={v.id} className='imagebox'>
            <img src={v} alt="productimage" />
          </div>
        )
      })
    }
  </div>
  <div className='Right-desc'>
    <h2>{product?.title}</h2>
    <p>{product?.description}</p>
    <p style={{backgroundColor:"blueviolet",color:"navy",width:'max-content',padding:"10px",borderRadius:"20px"}}>{product?.category?.name}</p>
    <button className="addtc">Add to cart</button>
  </div>
</div>

</div>
    </>
  )
}
