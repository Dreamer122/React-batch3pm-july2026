import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState={
    balance:10000,
    transactions:[]
}
const accountSlice=createSlice({
    name:"account",
    initialState,
    reducers:{
        deposit:(state,action)=>{
            const amount=action.payload
            state.balance+=amount

            state.transactions.push(
                {
                    id:nanoid(6),
                    type:"Deposit",
                    amount:amount,
                    date:new Date().toLocaleString()
                } )
        },

        withdraw:(state,action)=>{
            const amount=action.payload
            if(amount>state.balance){
                return;
            }
            state.balance -=amount
            state.transactions.push(
                {
                    id:nanoid(6),
                    type:"Withdraw",
                    amount:amount,
                    date:new Date().toLocaleString()
                } )

        }
    }

})

export const {deposit,withdraw}=accountSlice.actions
export default accountSlice.reducer;