import React from 'react'

export const Compo = (props) => {
    console.log(props)
  return (
    <div>Compo{props.children}</div>
  )
}
