import React,{useState} from 'react'
import { useLogin } from './useLogin';
import {  useDispatch } from 'react-redux';
import { loginUser, verifyAdmin } from '../store/features/userSlice';




function useVerifyAdmin() {

    const dispatch=useDispatch();

    const {isverifiedAdmin } = useLogin();


    const [invalidMessage,setInvalidMessage]=useState("");
    

 

    // const[verified,setVerified]=useState(false);


    const verify = async (isverifiedAdmin,email,verificationCode) => {

        console.log("verify is clicke");

        console.log("is verify admin ",isverifiedAdmin);
    
        if (isverifiedAdmin) {
    
          const response = await fetch("https://royal-naan-curry-bar.onrender.com/api/v1/user/verifyadmin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // 'Authorization':`Bearer ${token}`
            },
            body: JSON.stringify({ email, verificationCode })
          });
    
    
          const json = await response.json();


    
          if(response.ok){
            console.log(json);
           if(json.isadminverified)
           console.log("admin is logged in")
            dispatch(loginUser(json.adminToken,json.verificationCode));

            console.log("successfully dispatched admin inside the redux");
            // setVerified(true);
          }
          else{
            console.log("Response isn't okay");
           setInvalidMessage(json.error);

           const timeout=  setTimeout(function(){
            setInvalidMessage("");
                  },5000);
          }
    
          
        }
    
      }

  return {
    verify,invalidMessage
  }
}

export default useVerifyAdmin
