import React from 'react'
// import { Refhook } from './Refhook'
// import { Productpage } from './Productpage'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Compo } from './Compo'
const App = () => {
  const obj=useContext(CartContext)
  console.log(obj)
  return (
    <div>
      <p>App</p>
      {/* <Refhook/>
      <Productpage/> */}
      <Compo> my component </Compo>
    </div>
  )
}

export default App