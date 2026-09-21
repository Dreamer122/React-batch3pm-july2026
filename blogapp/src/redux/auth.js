import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    loginid:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null
}
 export const auth=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setLoading:(state,action)=>{
            state.loading=action.payload
        },
        setlogin:(state,action)=>{
            state.loginid=action.payload
        }
    }
 })
 export const {setLoading,setlogin}=auth.actions
 export default auth.reducer