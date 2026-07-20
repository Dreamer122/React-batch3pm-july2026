import { useState,useEffect } from "react"

export const CartPage = ({cart,removefun,quantity}) => {
  const [totalbill,setTotalBill]=useState(0)
   if(cart?.length==0){
   return(<h3>Your cart is empty</h3>)
   }

   const total=()=>{
      let bill=0
      cart.forEach((prd)=>{
        let prdtotal=prd.price*prd.qty
        bill+=prdtotal

      })
      setTotalBill(bill)

   }
   useEffect(()=>{
    total()
   },[cart])
  return (
   <>
   <div>
    <h2>Your Cart..</h2>
    {/* cart */}
    <div>
    <table>
      <thead>
      <tr>
        <th>
          Product
        </th>
        <th>
          Quantity
        </th>
        <th>
          price
        </th>
      </tr>
      </thead>
      <tbody>
      {/* product row */}
      
      {
       
        cart?.map((p,i)=>{
          return (
            <tr key={p.id}>
              {/* first td */}
              <td>
                {/* image box */}
                <div>
                  <img src={p.images[0]} alt="" style={{width:"100px",height:"150px"}}/>
                </div>
{/* contenct box */}
<div>
  <p>{p.title}</p>
  <button onClick={()=>removefun(p)}>remove</button>
</div>
              </td>

              {/* second td */}
              <td>
                <button className="btns" onClick={()=>quantity(p,1)}>+</button>
                <span style={{marginInline:"20px"}}>{p.qty}</span>
                <button className="btns" onClick={()=>quantity(p,-1)}>-</button>
              </td>
              <td>
                {p.price}
              </td>
            </tr>
          )

        })
      }
      </tbody>
    </table>
    </div>
    <h1>{totalbill}</h1>
   </div>
   </>
  )
}
