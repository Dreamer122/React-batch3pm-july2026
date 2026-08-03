import React from 'react'
import { Home } from './Pages/Home'
import { Navbar } from './Components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router"
import { CreateEmp } from './Pages/CreateEmp'
import { Detail } from './Pages/Detail'
import { UpdateEmp } from './Pages/UpdateEmp'
const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/createemployee" element={<CreateEmp/>}/>
      <Route path="/detail/:id" element={<Detail/>} />
      <Route path="/editemployeedata/:id" element={<UpdateEmp/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App