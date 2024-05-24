import React, { useEffect, useState } from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

function Events() {
  const [noevents, setNoEvents] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await fetch("http://localhost:4000/api/v1/events/active-events", {
      method: "GET"
    });

    const json = await response.json();

    if (response.ok) {
      if (json.events.length === 0) {
        setNoEvents(
          <div className="container bg-dark custom-events">
            <h2 className='text-warning'>Unfortunately, We don't have any events scheduled at the moment.</h2>
            <span><h3 className="text-light">Subscribe below to stay informed about our upcoming events!</h3></span>
          </div>
        );
      }
      setEvents(json.events);
    } else {
      setEvents([]);
    }
  }

  return (
    <div className="events-page">
      <Navbar />

      <div className="container-md d-flex flex-column justify-content-center align-items-center">
        <h1 className='text-warning mt-5 mb-5'>Active Events</h1>
        {events.length > 0 ? (
          <div className='row'>
            {events.map((ev) => (
              <div className="col-12 col-sm-6 col-md-6 mb-4" key={ev._id}>
                <div className="card h-100">
                  <img className="card-img-top" src={ev.imgUrl} alt="Card image cap" style={{width: "100%", height: "200px", objectFit: "cover"}} />
                  <div className="card-body">
                    <h5 className="card-title">{ev.name}</h5>
                    <p className="card-text">{ev.description}</p>
                    <p className="card-text"><small className="text-muted">From: {new Date(ev.startTime).toLocaleString()}</small></p>
                    <p className="card-text"><small className="text-muted">Until: {new Date(ev.endTime).toLocaleString()}</small></p>
                    <Link to="/book-reservations"><button className="btn btn-primary">Register Now</button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>{noevents}</div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Events;
