import React from 'react'

export const Servicecard = ({servicename,desc}) => {
    // const {servicename,desc}=props
  return (
    <div className="card">
        <h3>{servicename}</h3>
        <p>{desc}</p>
    </div>
  )
}
// destructuring , rest and spread operator , map function,,filter function
