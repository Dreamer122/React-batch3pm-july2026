import React from 'react'
import { Signup } from './Pages/Signup'
import { Toaster } from 'react-hot-toast'
import { Navbar } from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
   </Routes>
   <Toaster></Toaster>
   </BrowserRouter>
   
  
   </>
  )
}

export default App