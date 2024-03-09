import React, { useState } from 'react'
import useContact from '../../Hook/useContact';

function ContactForm() {

  const {contact,isLoading,error}=useContact();





  const [name,setName]=useState("");
  const[email,setEmail]=useState("");

  const [phone,setPhone]=useState('');

  const [message,setMessage]=useState("");



  const handleSubmit=async(e)=>{

    e.preventDefault();
await contact(name,email,phone,message);
  }
 
  return (
  <div className="contact-form">
     <div className="form-container">
        <h1 className="text-warning">Contact Us</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"

              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email"

              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>   
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" class="form-control" 
            placeholder="123-456-7890"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
  <label>Message</label>
  <textarea className="form-control" 
  placeholder="Enter your message" 
  rows="4" 
  cols="10"

  value={message}
  onChange={(e)=>setMessage(e.target.value)}
  
  ></textarea>
</div>


          <button
          type='submit'
            className="btn btn-success text-white"
            style={{
              padding: "10px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}

          
          >
            Submit
          </button>
        </form>
      </div>
  </div>
  )
}

export default ContactForm
