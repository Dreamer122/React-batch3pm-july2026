import {Home} from "./Pages/Home"
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router"
import { DescPage } from "./Pages/DescPage"
import { ErrorPage } from "./Pages/ErrorPage"
import { AboutPage } from "./Pages/AboutPage"
import { Layout } from "./Pages/Layout"
import { CartPage } from "./Pages/CartPage"
import {useState} from "react"

function App(){
  // addtocart
const [cart,setCart]=useState([])
  const addcart=(prd)=>{
    setCart([...cart,prd])
    console.log(cart)
    alert("product added to cart")


  }
  return (
    // dynamic routing
    <>
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Layout />} >
      <Route index element={<Home addcart={addcart}/>}></Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/description/:slug/:id" element={<DescPage />} />
      <Route path="/*" element={<ErrorPage />} />
</Route>

   </Routes>
   </BrowserRouter>
    </>
  )


}

export default App