import React from 'react'
import { Navbar } from '../Components/Navbar'
import {Outlet} from 'react-router'

export const Layout = () => {
  return (
    <>
    <Navbar/>
    <div>
    <Outlet></Outlet>
    </div>
    
    </>
  )
}
