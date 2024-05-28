import { useState } from "react";
import {loginUser,signupUser,selectUser} from "../store/features/userSlice"
import {useSelector,useDispatch} from "react-redux";



export const useSignup=()=>{
    const [error,setError]=useState(null)
    const[isLoading,setIsLoading]=useState(null)

    const user=useSelector(selectUser);
    const dispatch=useDispatch();

    


    const signup= async(username,email,phone,password,confirmPassword)=>{
        setIsLoading(true)
        setError(null)

        const response=await fetch("https://royal-naan-curry-bar.onrender.com/api/v1/user/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username,email,phone,password,confirmPassword})
        })

        const json=await response.json();
      

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)   
        }
        else{

            dispatch(signupUser(json.token))
            setError(null);
            setIsLoading(false);
        }    
    }

    return {signup,isLoading,error}
}