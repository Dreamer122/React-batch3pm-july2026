import React from 'react'
import { Link } from 'react-router'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
export const Navbar = () => {
    const {cart}=useContext(CartContext)
    // console.log(cart)
  return (
   <>
   <div>
    <ul>

        <li><Link to='/'> Home </Link></li>
        {/* <li><Link to="/about"> about</Link></li> */}
        <li><Link to="/cart" style={{position:"relative"}}> cart <span className="badge">{cart?.length}</span></Link></li>
        <li>contact</li>
        <li>blog</li>
    </ul>
   </div>
   </>
  )
}
