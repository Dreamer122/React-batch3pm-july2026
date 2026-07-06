import React, { useState } from 'react'

export const Counter = () => {
    // let a=1
    let [a,seta]=useState(1)
    function increase(){
        console.log(a)
        seta(a+1)
    }
    function decrease(){
        seta(a-1)
    }
    // hooks -> usestate
  return (
    <div>Counter
        {a}
        <button onClick={increase}>inc</button>
        <button onClick={decrease}>dec</button>
    </div>
  )
}
