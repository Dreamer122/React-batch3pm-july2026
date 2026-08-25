import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todos",
    initialState:{
        todoarray:[{id:1,text:"hello"},]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todoarray.push(
                {id:Date.now(),
                text:action.payload
                }
            )

        },
        deleteTodo:(state,action)=>{
            state.todoarray=state.todos.filter(t=>t.id!=action.payload)

        },
        editTodo:(state,action)=>{
            const x=state.todoarray.find((t)=>t.id==action.payload.id)
            if(x){
                x.text=action.payload.text
            }
        }
    }
}
)
export const {addTodo,deleteTodo,editTodo}=todoSlice.actions
export default todoSlice.reducer