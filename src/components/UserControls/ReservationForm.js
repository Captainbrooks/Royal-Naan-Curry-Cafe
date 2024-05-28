import React, { useState } from "react";
import "../../styles/Reservation.css";

function ReservationForm() {
  const startHour = 14; 
  const endHour = 22; 

 
  const options = [];

  
  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === endHour && minute === 0) {
        break;
      }
      const displayHour = hour > 12 ? hour - 12 : hour;
      const timeString = `${displayHour}:${minute === 0 ? "00" : minute} pm`;
      options.push(
        <option key={timeString} value={timeString}>
          {timeString}
        </option>
      );
    }
  }

  options.push(
    <option key="10:00 pm" value="10:00 pm">
      10:00 pm
    </option>
  );



  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [time,setTime]=useState("")
  const [persons,setPersons]=useState("")
  const [phone,setPhone]=useState("")
  const[date,setDate]=useState(null);

  const [error,setError]=useState("");
  const [message,setMessage]=useState("");



  const handleReservations=async(event)=>{
    event.preventDefault();
   

    const data={
      name,email,date,time,persons,phone
    }


    console.log(data);

    const response=await fetch("http://https://royal-naan-curry-bar.onrender.com/api/v1/reservations/add-reservations",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data)

    })

    const json=await response.json();

    if(!response.ok){
setError(json.error);
setMessage(null);
    }

    if(response.ok){
      setError(null);
      setMessage(json.message);


      setName("");

      setEmail("");
      setDate("");
      setPersons("");
      setTime("");

      setTimeout(setMessage(""),3000);
    }
  }



  


  return (
    <div className="container-lg d-flex flex-column justify-content-center align-items-center">
<div className="title">
        <h1 className="text-warning my-5">Book a Reservation</h1>
        </div>


<div className="container-md d-flex justify-content-center">
        <form onSubmit={handleReservations} className="form mb-5">
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
          <div class="form-group">
            <label for="exampleInputEmail1">Date</label>
            <input type="date" class="form-control" value={date} onChange={(e)=>setDate(e.target.value)} placeholder="Enter Email" />
          </div>

          <div className="form-group">
            <label htmlFor="timeInput">Time</label>
            <select
              id="timeInput"
              className="form-control"
              style={{ padding: "5px" }}
              value={time}
              onChange={(e)=>setTime(e.target.value)}
            >
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Number of Persons</label>
            <input
              type="number"
              class="form-control"
              placeholder="Enter Number of Person"
              value={persons}
              onChange={(e)=>{
              setPersons(e.target.value > 0 && e.target.value)               
              }}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" class="form-control" placeholder="for eg: 123-456-7890" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </div>

          <button
            className="btn btn-success text-white">
            Submit
          </button>
          </form>




          <div className="d-flex justify-content-center align-items-end" style={{height:"50px"}}>
    <div className='error'>
 {error && <h6 className='text-danger'>{error}</h6>}
 </div>
 {message &&
 
    <h3 className='text-success'>{message}</h3>
    }
 </div>
     
        </div>
   
    </div>
  );
}

export default ReservationForm;
