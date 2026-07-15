import React from 'react'
import { Navbar } from '../Components/Navbar'
import {Outlet} from 'react-router'

export const Layout = ({cart}) => {
  return (
    <>
    <Navbar cart={cart}/>
    <div>
    <Outlet></Outlet>
    </div>
    
    </>
  )
}
