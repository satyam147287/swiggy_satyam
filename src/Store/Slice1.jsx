import { createSlice } from "@reduxjs/toolkit";


const cart = createSlice({
    name:"Slice_1",
    initialState:{
        item:[],
        count:0
    },
    reducers:{
        AddItem : (state,action)=>{
              state.item.push({...action.payload,quantity:1});
              state.count++;
        },
        IncrementItems : (state,action)=>{
             const element=state.item.find(data=>data.id==action.payload.id);
             element.quantity+=1;
             state.count++;
        },
        DecrementItem: (state, action) => {
    const element = state.item.find(
        data => data.id === action.payload.id
    );

    if (element.quantity > 1) {
        element.quantity -= 1;
    } else {
        state.item = state.item.filter(
            data => data.id !== action.payload.id
        );
    }

    state.count--;
}
    }
})



export const {AddItem,IncrementItems,DecrementItem} = cart.actions;

export default cart.reducer;