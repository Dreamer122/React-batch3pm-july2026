import React,{useState} from 'react'
import { deposit,withdraw } from './redux/accountSlice'
import { useDispatch } from 'react-redux'
export const AccountForm = () => {
     const [input,setInput]=useState(0)
     const dispatch=useDispatch()

     const handleDeposit=(e)=>{
        e.preventDefault()
        if(input){

            dispatch(deposit(Number(input)))
            setInput(0)
            alert("balance added successfully")
        }

     }
       const handleWithdraw=(e)=>{
        e.preventDefault()
        if(input){

            dispatch(withdraw(Number(input)))
            setInput(0)
            alert("amount withdraw successfully")
        }

     }


  return (
   <>
   <div className="text-center my-4">
    <h2> ADD Balance  or Withdraw</h2>
    <div className=' mx-auto'>
        <form action="">
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='enter amount' className='border border-gray-300 my-4' />  <br />
            <button onClick={handleDeposit}
             className='px-4 py-2 rounded bg-green-500 text-white disabled:bg-green-300' disabled={input?false:true}>Deposit</button>
            <button onClick={handleWithdraw} className="px-4 py-2 rounded bg-red-600 text-white mx-4 disabled:bg-red-400" disabled={input?false:true}>Withdraw</button>
        </form>
    </div>
   </div>
   </>
  )
}
