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
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid pt-5 bg-black">
      <div className="container">
        <div className="row">
      
          <div className="col-md-6 mb-4 mb-md-0 text-center p-3">
            <Link to="/">
              <img
                src={Rcclogo}
                className="restro-logo mb-4"
                alt="Restaurant Logo"
              />
            </Link>
            <h6 className="text-white text-center text-sm-center ">
              Royal Naan Curry & Bar serves Indian contemporary cuisine with
              coffee and drinks
            </h6>
          </div>

          <div className="col-md-6 text-center contact-container">
            <h3 className="text-warning">Contact Us</h3>
            <div className="container">
              <Link
                to="tel:+437-477-6100"
                className="link text-white text-decoration-none h6 justify-content-center icon-container"
              >
                <div className="icon">
                  <FontAwesomeIcon className="reservations-icons" icon={faPhoneAlt} />
                  +1 (437) 477-6100
                </div>
              </Link>
              <Link
                to="mailto:royalcurry010@gmail.com"
                className="link text-white text-decoration-none h6 justify-content-center icon-container"
              >
                <div className="icon">
                  <FontAwesomeIcon className="reservations-icons" icon={faEnvelope} />
                  royalcurry010@gmail.com
                </div>
              </Link>
              <Link
                to="https://www.google.com/maps/place/17+Oakridge+Dr,+Scarborough,+ON+M1M+2A5/@43.7267291,-79.2450703,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4cfcc8860319d:0x9d6d3e86c6bebd9e!8m2!3d43.7267253!4d-79.2424954!16s%2Fg%2F11c1j11y31?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="link text-white text-decoration-none icon-container"
              >
                <div className="icon">
                  <FontAwesomeIcon className="reservations-icons" icon={faHome} />
                  17 Oakridge Drive, M1M 2A5
                </div>
              </Link>
              <Link
                to="https://www.google.com/maps/place/17+Oakridge+Dr,+Scarborough,+ON+M1M+2A5/@43.7267291,-79.2450703,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4cfcc8860319d:0x9d6d3e86c6bebd9e!8m2!3d43.7267253!4d-79.2424954!16s%2Fg%2F11c1j11y31?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="link text-white text-decoration-none h6 icon-container"
              >
                <div className="icon">
                  <FontAwesomeIcon className="reservations-icons" icon={faMapMarkerAlt} />
                  Find us on Google Maps
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-lg mt-4 text-center">
          <div className="container-fluid p-3">
            <h3 className="text-warning">Subscribe To Know Latest Offers</h3>
            <span className="text-white">
              Subscribe to our newsletter and receive the latest updates & offers
              from Royal Naan Curry & Bar.
            </span>
          </div>

          <div className="mt-4 d-flex justify-content-center">
            <div className="w-75 ">
              <input   
                type="email"
                className="form-control custom-input mb-2 p-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              
              />
              <button className="subscribe-input-button btn btn-warning fw-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="footer-foot">
          <div className="social-media">
            <Link to="https://www.facebook.com/gairemilton/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social-media-icons" icon={faFacebookSquare} size="2x" />
            </Link>
            <Link to="https://www.facebook.com/gairemilton/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social-media-icons" icon={faInstagram} size="2x" />
            </Link>
            <Link to="https://www.facebook.com/gairemilton/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social-media-icons" icon={faTwitter} size="2x" />
            </Link>
            <Link to="https://www.facebook.com/gairemilton/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social-media-icons" icon={faPinterest} size="2x" />
            </Link>
          </div>

          <div className="copyrightinfo">
            <span>
              <h6 className="text-white">&copy; All rights reserved. Designed by Milton Gaire</h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
