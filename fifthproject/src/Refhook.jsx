import React, { useRef } from 'react'

export const Refhook = () => {
    const ref=useRef(0)
    console.log("ref =",ref)
   
    const handleclick=()=>{
        console.log("ref =",ref)

         ref.current.focus()
         ref.current.value=12;
         ref.current.style.background="red"
    }
  return (
    <>
    
    <div>Refhook</div>
    <input type="text"  placeholder="enter your name" ref={ref}/>
  <button onClick={handleclick}>click</button>
    </>
  )
}
