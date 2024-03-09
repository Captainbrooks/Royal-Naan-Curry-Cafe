import React, { useEffect, useState } from 'react'
import "../styles/Events.css";
import Navbar from '../components/Header/Navbar'

import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom';

function Events() {

const[noevents,setNoEvents]=useState(null);
  const [events,setEvents]=useState([]);


useEffect(()=>{
  fetchEvents();
},[])


  const fetchEvents=async()=>{
    
    const response=await fetch("http://localhost:4000/api/v1/events/active-events",{
        method:"GET"
    })

    const json=await response.json();

    if(response.ok){

      if(json.events.length===0){
        setNoEvents( <div className="container bg-dark custom-events">
        <h2 className='text-warning'>Unfortunately, We don't have any events scheduled at the moment.</h2>
        <span><h3 className="text-light">Subscribe below to stay informed about our upcoming events!</h3></span>
           </div>);
      }
      setEvents(json.events);
       
    }
    if(!response.ok){
        setEvents([]);
    }


}



  return (

    <div className="events-page">
     <Navbar/>
     <div className="events">

     <div className="container">
      <h1 className='text-warning'>Active Events</h1>
       {
        events.length > 0 ? (<div className='container'>

            {
                events.map((ev)=>(
                  <div class="row" style={{width:"500px",margin:"20px"}}>
<div class="card mb-3" key={ev._id}>
  <img class="card-img-top" src={ev.imgUrl}   alt="Card image cap" style={{width:"200px"}}/>
  <div class="card-body">
    <h5 class="card-title">{ev.name}</h5>
    <p class="card-text" style={{width:"70%"}}>{ev.description}</p>
    <p class="card-text"><small class="text-muted"> From : {ev.startTime}</small></p>
    <p class="card-text"><small class="text-muted"> Until : {ev.endTime}</small></p>
  <Link to="/book-reservations"><button class="btn btn-primary">Register Now</button></Link>
  </div>
</div>
</div>
))
            }

        </div>):( <div>{noevents}</div>)
       }
    </div>






     </div>
<Footer/>
    </div>

  )
}

export default Events
