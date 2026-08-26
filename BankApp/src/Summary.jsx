import React from 'react'
import { useSelector } from 'react-redux'
export const Summary = () => {
    const data=useSelector((state)=>state.account)
    console.log(data)
  return (
    <>
    
    <h1> Account Summary</h1>
    <h2 >Balance Amount:{data.balance} </h2>
    <h2>Total Transactions :{data.transactions.length}</h2>

    <h1> Transaction History</h1>
    <table>
        <thead>
            <tr>

            <th>Sno.</th>
            <th>transaction id</th>
            <th>transaction type</th>
            <th>amount</th>
            </tr>
        </thead>
        <tbody>

     
    {
        data.transactions.map((txn,i)=>{
            return(
                <tr>
                    <td>{i+1}</td>
                    <td>{txn.id}</td>
                    <td>{txn.type}</td>
                    <td>{txn.amount}</td>
                </tr>
            )
        })
    }
       </tbody>
    </table>
    </>
  )
}
