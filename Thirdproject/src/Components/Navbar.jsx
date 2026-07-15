import React from 'react'
import { Link } from 'react-router'

export const Navbar = ({cart}) => {
  return (
   <>
   <div className='Nav'>
    <ul>
        <li><Link to='/'> Home </Link></li>
        <li><Link to="/about"> about</Link></li>
        <li><Link to="/cart" style={{position:"relative"}}> cart <span className="badge">{cart?.length}</span></Link></li>
        <li>contact</li>
        <li>blog</li>
    </ul>
   </div>
   </>
  )
}
