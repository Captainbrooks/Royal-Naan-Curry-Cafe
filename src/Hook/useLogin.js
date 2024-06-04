import { useState } from "react";
import {loginUser,signupUser,selectUser} from "../store/features/userSlice"
import {useSelector,useDispatch} from "react-redux";



export const useLogin=()=>{
    const [error,setError]=useState(null)
    const [isverifiedAdmin,setIsVerifiedAdmin]=useState(false);
    const[isLoading,setIsLoading]=useState(null)

    // const user=useSelector(selectUser);
    const dispatch=useDispatch();

    


    const login= async(email,password)=>{
        setIsLoading(true)
        setError(null)

        const response=await fetch("http://miltongaire.com:4000/api/v1/user/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        })

        const json=await response.json();
      

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)   
        }
        else{
            if(json.error==='required verification'){
                console.log("line where requiored verification reached")
              return setIsVerifiedAdmin(true)
            }
         console.log("Line after setisVerifiedAdmin is reached");
            dispatch(loginUser(json.token))
            setError(null);
            setIsLoading(false);
        }    
    }

    return {login,isLoading,error,isverifiedAdmin}
}