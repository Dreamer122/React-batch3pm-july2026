import {Home} from "./Pages/Home"
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router"
import { DescPage } from "./Pages/DescPage"
import { ErrorPage } from "./Pages/ErrorPage"
import { AboutPage } from "./Pages/AboutPage"
import { Layout } from "./Pages/Layout"
function App(){
  return (
    // dynamic routing
    <>
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Layout />} >
      <Route index element={<Home/>}></Route>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/description/:slug/:id" element={<DescPage />} />
      <Route path="/*" element={<ErrorPage />} />
</Route>

   </Routes>
   </BrowserRouter>
    </>
  )


}

export default App