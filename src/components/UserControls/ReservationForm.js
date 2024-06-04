import React, { useState } from "react";
import "../../styles/Reservation.css";
import ButtonSpinner from "../ButtonSpinner";

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReservations = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    setMessage("");

    const data = {
      name,
      email,
      date,
      time,
      persons,
      phone,
    };

    const response = await fetch("http://miltongaire.com:4000/api/v1/reservations/add-reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      setError(json.error);
    } else {
      setMessage("Submitted successfully!");
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setDate("");
      setPersons("");
      setTime("");
      setPhone("");

      setTimeout(() => {
        setMessage("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="container-lg d-flex flex-column justify-content-center align-items-center">
      <div className="title">
        <h1 className="text-warning my-5">Book a Reservation</h1>
      </div>

      <div className="container-md d-flex justify-content-center flex-column align-items-center">
        <form onSubmit={handleReservations} className="form d-flex flex-column mb-5">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter Date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeInput">Time</label>
            <select
              id="timeInput"
              className="form-control"
              style={{ padding: "5px" }}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {options}
            </select>
          </div>

          <div className="form-group">
            <label>Number of Persons</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Number of Persons"
              value={persons}
              onChange={(e) => setPersons(e.target.value > 0 ? e.target.value : "")}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="for eg: 123-456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button
            className="btn btn-success text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? <ButtonSpinner /> : isSubmitted ? "Submitted" : "Submit"}
          </button>
        </form>

       
  
            {error && <p className="text-danger fw-bold">{error}</p>}
          </div>
          {message && <p className="text-success fw-bold">{message}</p>}
  
  
    </div>
  );
}

export default ReservationForm;
