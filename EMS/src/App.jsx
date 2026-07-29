import React from 'react'
import { Home } from './Pages/Home'
import { Navbar } from './Components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router"
import { CreateEmp } from './Pages/CreateEmp'
const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/createemployee" element={<CreateEmp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App