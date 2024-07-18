import React, {  useState } from 'react'

import { Navigate } from 'react-router-dom';




import { FaLock } from "react-icons/fa";

import { useLocation } from 'react-router-dom';

function PasswordReset() {



    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email');


    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");



    const [password,setPassword]=useState(null);
    const[confirmPassword,setConfirmPassword]=useState(null);







    








const handleSubmit=async(e)=>{
    e.preventDefault();

    const response=await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/reset-password/?email=${email}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({password,confirmPassword})

    })

    const json=await response.json();

    if(!response.ok){
        setSuccess(null);
        setError(json.error);
    }

    if(response){
        setSuccess(json.message);
        setError(null);


    }

}









  return (
<div className="reset-password">
  <div className="reset-password">
{


success ? (
    <Navigate to="/login" replace />
  ): 

 (
    <form onSubmit={handleSubmit}>
     <label style={{ marginBlock: "10px" }}>
              <h6>
                Password:   <FaLock />
              </h6>
            </label>
            <input
              className='form-control'
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

<label style={{ marginBlock: "10px" }}>
              <h6>
              Confirm Password:   <FaLock />
              </h6>
            </label>
        <input type="confirmPassword"
        value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)} />

        <button className='btn btn-primary'>Submit</button>

{error && <p>{error}</p>}

    </form>





)

}
  </div>

</div>
  )
}

export default PasswordReset




