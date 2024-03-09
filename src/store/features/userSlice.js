import { createSlice } from "@reduxjs/toolkit";
import {jwtDecode } from 'jwt-decode';
import { json } from "react-router-dom";

export const userSlice=createSlice({
    name:"users",
    initialState:{
        user:null,
        isAdmin:false,
    },
    reducers:{

        // verifyAdmin:(state,action)=>{

        //     const decodedToken=jwtDecode(action.payload);
        //     console.log("decoed token " , decodedToken);
        //     state.isAdmin=decodedToken.checkAdmin && decodedToken.verificationCode===action.payload.verificationCode;
  
        //     document.cookie = `jwt=${JSON.stringify(action.payload)}; max-age=${60 * 60 * 24}; path=/`;
        //   },
        loginUser:(state,action)=>{
            
            state.user=action.payload;

            console.log(action.payload);
         
     
            const decodedToken=jwtDecode(action.payload);

            console.log("decodedtoken in userslice is ",decodedToken)

            const checkIfAdmin=decodedToken.checkAdmin;

            console.log(checkIfAdmin);

            state.isAdmin=checkIfAdmin;
            
            // saving the user to cookies
            document.cookie=`jwt=${JSON.stringify(action.payload)}; max-age=${60 * 60 * 24}; path=/`;
        },
        signupUser:(state,action)=>{
            state.user=action.payload;

            const decodedToken=jwtDecode(action.payload);

            const checkIfAdmin=decodedToken.checkAdmin;

            console.log(checkIfAdmin);

            state.isAdmin=checkIfAdmin;

            document.cookie = `jwt=${JSON.stringify(action.payload)}; max-age=${60 * 60 * 24}; path=/`;
            
            console.log("User is saved in redux store");

        },
        logoutUser:(state)=>{
            state.user=null;
              state.isAdmin=false;
            document.cookie="jwt=; max-age=0; path=/";
        }
    }
});

export const { loginUser, signupUser, logoutUser,verifyAdmin } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectIsAdmin = (state) => state.user.isAdmin;




export default userSlice.reducer;