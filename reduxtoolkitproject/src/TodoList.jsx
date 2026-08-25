import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteTodo ,editTodo} from './reduxstore/todoSlice'

export const TodoList = () => {
    const todos=useSelector(state=>state.todos.todoarray)
    console.log(todos)
    const dispatch=useDispatch()
    const [editid,setEditId]=useState(null)
    const [editText,setEditText]=useState("")

    const handledit=(t)=>{
        setEditId(t.id)
        setEditText(t.text)
    }
    const handleSave=(id)=>{
        dispatch(editTodo({
            id:id,
            text:editText
        }))
        setEditId(null)
        setEditText("")
    }

  return (
   <div style={{background:"crimson","width":"300px","padding":"5px"}}>
    {
        todos?.map((t)=>{
return(

<div key={t.id} style={{display:"flex",gap:"5px",justifyContent:"space-evenly",backgroundColor:"pink",marginBottom:"2px"}}>
   {editid==t.id?(
    <>
    <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)}/>
    <button onClick={()=>handleSave(t.id)}>save</button>
    </>
   ):
   <>
   
    <p>{t.text}</p>
     <button onClick={()=>{
        if(confirm("are you sure?")){
        dispatch(deleteTodo(t.id))}
        }
    }>delete</button>
    
    {/* edit text */}
     <button onClick={()=>handledit(t)}>edit</button>
</>
}  
</div>
        
        
)
        
        })
        
    }


   </div>
  )
}
