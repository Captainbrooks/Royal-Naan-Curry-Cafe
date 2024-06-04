import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAdmin, selectUser } from '../store/features/userSlice'

function useHandleDelete(foodinfo) {

    const [error,setError]=useState(null)
    const[isLoading,setIsLoading]=useState(null)


   const admintoken=useSelector(selectIsAdmin);

   const token=useSelector(selectUser);
   const [foodtype, setFoodType] = useState([]);


   useEffect(() => {
    if (foodinfo) {
        setFoodType(foodinfo);
    }
}, [foodinfo]);



const handleDelete=async(id)=>{

    setIsLoading(true);

    const response=await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/fooditem/delete/`+id,{

    method:"DELETE",
    headers:{
        'Content-type':'application/json',
        'Authorization':`Bearer ${token}`
    }})

    const json=await response.json();
      

    if(!response.ok){
        setIsLoading(false)
        setError(json.error)   
    }
    else{
        setFoodType(prevFoodType => prevFoodType.filter(food => food._id !== id));
        setError(null);
        setIsLoading(false);
    
    }    


}


  return {foodtype,handleDelete,error,isLoading};
}

export default useHandleDelete






