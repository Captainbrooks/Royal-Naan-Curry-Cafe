import React, { useState } from 'react'
import { selectUser } from '../../store/features/userSlice';
import { useSelector } from 'react-redux';

function Admin() {

const token=useSelector(selectUser);

const [issue,setIssue]=useState("");



const handleIssue=async(e)=>{
    e.preventDefault();


    try {
        const response=await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/admin/issue`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authourization":`Bearer ${token}`
            },
            body:JSON.stringify({issue})
            
        })
    } catch (error) {
        
    }

}

  return (
  <div className="admin-welcome">
    <div className="container">
        <h1 className='text-warning'>Hey Admin, How 's the day ?</h1>

        <div className="container">
        <div className="admin-info">
          <h2 className='text-danger'>Admin Information</h2>
          <p className='text-info'>Welcome to the admin dashboard. Here, you can manage various aspects of the site.</p>
          <p className='text-info'>Feel free to explore the sidebar navigation to access different functionalities.</p>
        </div>

        <div className="container">
            <h2 className='text-secondary'>Any Problem with the site ?</h2>
            <div className="container">
            <form
            >
                 <label>
              <h3 className='text-danger'>
             Issue
              </h3>
            </label>
            <textarea
              className='form-control'
              type="text"
              value={issue}
              required
              onChange={(e) => setIssue(e.target.value)}
              placeholder='Enter the issue here'

              cols={110}
              rows="5"
            ></textarea>
            <button className='btn btn-success' style={{marginTop:"15px"}}>Submit</button>
            </form>
            </div>
        </div>
        </div>
        </div>
    </div>

  )
}

export default Admin
