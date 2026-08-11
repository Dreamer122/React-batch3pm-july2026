import React from 'react'
// import { Refhook } from './Refhook'
// import { Productpage } from './Productpage'
// import { useContext } from 'react'
// import { CartContext } from './context/CartContext'
// import { Compo } from './Compo'
import { Home } from './Pages/Home'
import { Navbar } from './Pages/Navbar'
import {BrowserRouter,Routes,Route} from "react-router"
import { Cart } from './Pages/Cart'
const App = () => {
  // const obj=useContext(CartContext)
  // console.log(obj)
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      </BrowserRouter>
      {/* <p>App</p> */}
      {/* <Refhook/>
      <Productpage/> */}
      {/* <Compo> my component </Compo> */}
      {/* <Home/> */}
    </>
  )
}

export default App