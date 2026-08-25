import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './reduxstore/todoSlice'

export const TodoForm = () => {
    const [text,setText]=useState("")
    const dispatch=useDispatch()

    const handlesubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert("please enter task before submitting")
            return;
        }
        else{
            dispatch(addTodo(text));
            setText("") 
        }
    }
  return (
   <>
   <form action="" onSubmit={handlesubmit}>
    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}  placeholder='enter task'/>
    <input type="submit" value="Add todo" />
   </form>
   </>
  )
}
