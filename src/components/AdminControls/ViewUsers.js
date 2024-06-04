import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import "../../styles/AdminDashBoard.css"
import { selectIsAdmin, selectUser } from '../../store/features/userSlice';

function ViewUsers() {


    const token=useSelector(selectUser);

    const isAdmin=useSelector(selectIsAdmin);

    const[allusers,setAllUsers]=useState([]);

    const getAllUsers=async()=>{
        const response=await fetch("http://miltongaire.com:4000/api/v1/user/get-users",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}` 
            }   
        });

    

        const json=await response.json();
    
        if(response.ok){
            console.log(json.users);
         return setAllUsers(json.users);
        }
        if(!response.ok){
            setAllUsers([]);
        }
      
    }
    





    const makeAdmin=async(id)=>{

        console.log("make admin is clicked ", id )

        
        try {
            const response=await fetch("http://miltongaire.com:4000/api/v1/user/makeadmin/"+id,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}` 
                }
            });

            const json=await response.json();

            if(response.ok){
                console.log(json.user);
            }
        } catch (error) {
            console.log(error);
        }
    }



const deleteUser=async(id)=>{
    console.log("delete user is clicked ", id )

        
    try {
        const response=await fetch("http://miltongaire.com:4000/api/v1/user/delete/"+id,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}` 
            }
        });

        const json=await response.json();

        if(response.ok){
            console.log(json.message);
        }
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
      
    getAllUsers();

},[token,makeAdmin,deleteUser])

  return (
 <div className="container view-users">
    <div className="user-heading">
<h1 className='text-warning'>Users</h1>
</div>

<div className="container">
  {allusers.length > 0 ? (
    <table className="table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {allusers.map((user) => (
          <tr key={user._id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>

                <div className="actions" style={{display:"flex"}} >
                    <div className="button1" style={{marginRight:"5px"}}>
              {user.role !== 'admin' && (
                <button className="btn btn-success" onClick={()=>makeAdmin(user._id)}>
                  Make Admin
                </button>
              )}
              </div>
<div className="button2">
              {
                user.role !== 'admin' && (
                    <button className="btn btn-warning" onClick={()=>deleteUser(user._id)}>
                      Delete User
                    </button>
                  )
              }
              </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div>No Users Found</div>
  )}
</div>

 </div>
  )
}

export default ViewUsers
