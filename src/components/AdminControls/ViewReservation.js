import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/features/userSlice';

function ViewReservation() {


    const token=useSelector(selectUser);

    const [reservations,setReservations]=useState([]);

    const[success,setSuccess]=useState(null);

    const[changeerror,setChangeError]=useState(null);






    const markAsCompleted=async(id)=>{

        const response=await fetch("http://miltongaire.com:4000/api/v1/reservations/mark-complete/"+id,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        })
    
        const json=await response.json();
    
        if(!response.ok){
            setChangeError(json.error);
            setSuccess(null);
        }
        if(response){
            setChangeError(null)
            setSuccess(json.message)
    
    
        }
    
    }

    useEffect(()=>{


        const fetchReservations=async()=>{
        
            const response=await fetch("http://miltongaire.com:4000/api/v1/reservations",{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
    
            const json=await response.json();
    
            if(response.ok){
               
                  console.log(json.reservations);
        
                setReservations(json.reservations);
            }
            if(!response.ok){
                setReservations([]);
            }
        
        
    }
    
    fetchReservations();
    },[markAsCompleted])




  return (
<div className="container">
    <h2 className='text-warning'>Reservations</h2>



    <div className="container">
       {
        reservations.length > 0 ? (<div className='container'>
{
  reservations.map((rv) => (
    <div className="container-fluid flex justify-content-around align-items-start" key={rv._id} style={{ backgroundColor: "#efefefef", marginTop: "10px" }}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" style={{ textAlign: "center" }} colSpan="6">Reservation Details</th>
          </tr>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Phone</th>
            <th scope="col" style={{ width: "25%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{rv.name}</td>
            <td>{rv.email}</td>
            <td>{rv.date}</td>
            <td>{rv.time}</td>
            <td>{rv.phone}</td>
            <td><button className='btn btn-danger' onClick={() => markAsCompleted(rv._id)}>Mark as Completed</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
}


              {success && <p>{success}</p>}
        </div>):(<h1>No Active Reservations</h1>)
       }
    </div>
</div>
  )
}

export default ViewReservation
