import { createSlice } from "@reduxjs/toolkit";
                                      
const cartSlice = createSlice({
  name : 'cart',
  initialState : [
    {d : 1 , title : "shirt" , qty : 3},
    {d : 1 , title : "shirt" , qty : 8},
],
  reducers : {
    addToCart :(state, action)=>{
      // if present increase the count 
      state.push();
      // else add object to array
    },

    removeItem : () => {
      // remove the objject from array 
    },

    incrementItemQuantity : () => {
      // increase the qty of particular object 
    },

    decrementmentItemQuantity : () => {
      // decrease the qty of particular object 
    },
  }
});

export default cartSlice.reducer;

// return actions of object 
// destructuring and export them 
export const {addToCart , removeItem , incrementItemQuantity , decrementmentItemQuantity} = cartSlice.actions;