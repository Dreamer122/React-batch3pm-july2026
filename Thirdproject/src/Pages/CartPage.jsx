
export const CartPage = ({cart}) => {
   if(cart?.length==0){
   return(<h3>Your cart is empty</h3>)
   }
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
  <p>remove</p>
</div>
              </td>

              {/* second td */}
              <td>
                <button>+</button>
                <span>1</span>
                <button>-</button>
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
   </div>
   </>
  )
}
