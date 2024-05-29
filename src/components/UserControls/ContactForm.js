import React, { useState } from 'react'
import useContact from '../../Hook/useContact';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactForm() {

  const { contact, isLoading, error } = useContact();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState('');

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    await contact(name, email, phone, message);
  }

  return (
    <div className="container-md d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-warning my-5">Contact Us</h1>

      <div className="container-fluid w-50 text-sm-start text-md-center">

        <Link
          to="tel:+437-477-6100"
          className="link text-muted text-decoration-none  justify-content-center icon-container"
        >
          <div className="icon d-flex justify-content-around">
            <FontAwesomeIcon className="reservations-icons d-none d-sm-block" icon={faPhoneAlt} />
            +1 (437) 477-6100
          </div>

        </Link>
        <Link
          to="mailto:royalcurry010@gmail.com"
          className="link text-muted text-decoration-none justify-content-center icon-container"
        >
          <div className="icon d-flex justify-content-around">
            <FontAwesomeIcon className="reservations-icons d-none d-sm-block" icon={faEnvelope} />
            royalcurry010@gmail.com
          </div>
        </Link>
      </div>


      <p className='m-3 text-muted'>or</p>
      <p className='text-muted'>Write a message below</p>

      <div className="container-md d-flex justify-content-center">

        <form className="form d-flex flex-column mb-4" onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"

              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" class="form-control"
              placeholder="123-456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control"
              placeholder="Enter your message"
              rows="4"
              cols="10"

              value={message}
              onChange={(e) => setMessage(e.target.value)}

            ></textarea>
          </div>
          <button
            type='submit'
            className="btn btn-success text-white"
            style={{
              padding: "10px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}>Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
