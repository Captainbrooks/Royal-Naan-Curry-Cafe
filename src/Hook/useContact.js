import React , {useState} from 'react'


function useContact() {
    const [error,setError]=useState(null)
    const[isLoading,setIsLoading]=useState(null)

    const contact=async(name,email,phone,message)=>{
 
        setIsLoading(true)
        setError(null)
        

    const response=await fetch("https://royal-naan-curry-bar.onrender.com/api/v1/contact",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,email,phone,message})
    })

    const json=await response.json();
      

    if(!response.ok){
        setIsLoading(false)
        setError(json.error)
    }
    else{   
        setError(null);
        setIsLoading(false);
    }    

    }

  return {contact,error,isLoading}
}

export default useContact
