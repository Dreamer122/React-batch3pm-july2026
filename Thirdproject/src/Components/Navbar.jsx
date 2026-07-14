import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
  return (
   <>
   <div className='Nav'>
    <ul>
        <li><Link to='/'> Home </Link></li>
        <li><Link to="/about"> about</Link></li>
        <li><Link to="/cart"> cart</Link></li>
        <li>contact</li>
        <li>blog</li>
    </ul>
   </div>
   </>
  )
}
