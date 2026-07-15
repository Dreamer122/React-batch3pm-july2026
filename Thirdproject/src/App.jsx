import {Home} from "./Pages/Home"
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router"
import { DescPage } from "./Pages/DescPage"
import { ErrorPage } from "./Pages/ErrorPage"
import { AboutPage } from "./Pages/AboutPage"
import { Layout } from "./Pages/Layout"
import { CartPage } from "./Pages/CartPage"
import {useState} from "react"
import toast, { Toaster } from 'react-hot-toast';

function App(){
  // addtocart
const [cart,setCart]=useState([])
  const addcart=(prd)=>{
    console.log("prd")
    let flag=0
    cart?.forEach((p)=>{ 
      if(p.id==prd.id){
        flag=1
      }  
    })
    if(flag==1){
      toast.error("product already added to cart")
    }
    else{
      setCart([...cart,prd])
      toast.success("product added to cart")

    }


  }
  return (
    // dynamic routing
    <>
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Layout cart={cart}/>} >
      <Route index element={<Home addcart={addcart}/>}></Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage cart={cart} />} />
      <Route path="/description/:slug/:id" element={<DescPage />} />
      <Route path="/*" element={<ErrorPage />} />
</Route>

   </Routes>
   <Toaster/>
   </BrowserRouter>
    </>
  )


}

export default App