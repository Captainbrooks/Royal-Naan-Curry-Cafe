import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        AddToCartArray:(state,action)=>{
            const { _id } = action.payload;
            const existingItemIndex = state.cart.findIndex(item => item._id === _id);
            if (existingItemIndex !== -1) {
              state.cart[existingItemIndex].quantity += 1;
            } else {
              state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter((item)=>item._id !== action.payload)
        },
        increaseQuantity:(state,action)=>{
            const existingItem=state.cart.find((item)=> item._id === action.payload)
            if(existingItem){
                existingItem.quantity += 1;
            }
        },
        decreaseQuantity:(state,action)=>{
            const existingItem=state.cart.find((item)=>item._id === action.payload)
            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity-= 1;
            }
        }
    }
});

export const { AddToCartArray, removeFromCart, increaseQuantity,decreaseQuantity } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;