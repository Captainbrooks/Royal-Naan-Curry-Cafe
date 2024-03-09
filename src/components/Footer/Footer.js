import React from "react";

import "../../styles/Footer.css";
import Rcclogo from "../../images/logo-no-background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";


import { faFacebookSquare, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-head">
        <div className="icon-info">
        <Link to="/"><img src={Rcclogo} className="restro-logo" alt="Resturant Logo" /></Link> 

          <h6 className="text-secondary">
            Royal Naan Curry & Bar serves indian contemporary cuisine with
            coffee and drinks
          </h6>
        </div>

        <div className="book-reservations">
          <h3 className="text-warning">Book Reservations</h3>

          <div className="icons-box">
            <div className="each-icon">
              <FontAwesomeIcon
                className="reservations-icons"
                icon={faPhoneAlt}
              />
              <Link to="tel: +437-477-6100">+1 (437) 477-6100</Link>
            </div>
            <div className="each-icon">
              <FontAwesomeIcon
                className="reservations-icons"
                icon={faEnvelope}
              />
              <Link to="mailto: royalcurry010@gmail.com">
                royalcurry010@gmail.com
              </Link>
            </div>
            <div className="each-icon">
              <FontAwesomeIcon className="reservations-icons" icon={faHome} />
              <Link to="https://www.google.com/maps/place/17+Oakridge+Dr,+Scarborough,+ON+M1M+2A5/@43.7267291,-79.2450703,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4cfcc8860319d:0x9d6d3e86c6bebd9e!8m2!3d43.7267253!4d-79.2424954!16s%2Fg%2F11c1j11y31?entry=ttu">
                17 Oakridge Drive, M1M 2A5
              </Link>
            </div>
            <div className="each-icon">
              <FontAwesomeIcon
                className="reservations-icons"
                icon={faMapMarkerAlt}
              />
              <Link
                to="https://www.google.com/maps/place/17+Oakridge+Dr,+Scarborough,+ON+M1M+2A5/@43.7267291,-79.2450703,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4cfcc8860319d:0x9d6d3e86c6bebd9e!8m2!3d43.7267253!4d-79.2424954!16s%2Fg%2F11c1j11y31?entry=ttu"
                target="_blank" rel="noreferrer"
              >
                Find us on a google map
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-body">
        <div className="subscribe">
          <h3 className="text-warning">Subscribe To Know Latest Offers</h3>
          <span className="text-muted">
            Subscribe to our newsletter and receive the latest updates & offers
            from Royal Naan Curry & Bar.
          </span>
          <input
            className="subcribe-input-box"
            type="text"
            placeholder="Email.."
          />
          <button className="subcribe-input-button">Subscribe</button>
        </div>
      </div>

      <div className="footer-foot">
        
        <div className="social-media">
       <Link to="https://www.facebook.com/gairemilton/" target="_blank" rel="noreferrer" > <FontAwesomeIcon className="social-media-icons" icon={faFacebookSquare} size="2x"/></Link> {/* Facebook Icon */}
    <Link to="https://www.facebook.com/gairemilton/" target="_blank" rel="noreferrer">  <FontAwesomeIcon className="social-media-icons" icon={faInstagram} size="2x" /> </Link>{/* Instagram Icon */}
    <Link to="https://www.facebook.com/gairemilton/" target="_blank" rel="noreferrer"> <FontAwesomeIcon className="social-media-icons" icon={faTwitter} size="2x" /></Link>  {/* Twitter Icon */}
    <Link to="https://www.facebook.com/gairemilton/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="social-media-icons" icon={faPinterest} size="2x" /> </Link>{/* Pinterest Icon */}
        </div>

        <div className="copyrightinfo">
<span><h6 className="text-muted">&copy; All rights reserved. Designed by Milton Gaire</h6></span>
        </div>

      </div>
 
    </div>
  );
}

export default Footer;
