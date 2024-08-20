
import React, { useEffect, useState } from 'react';
import '../../styles/Navbar.css';
// import logo from "../../images/restrologo.png";
import logo from "../../images/logo-no-background.png";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser, logoutUser, selectIsAdmin } from '../../store/features/userSlice';
import { selectCart } from '../../store/features/cartSlice';
import Headroom from 'react-headroom';



function Navbar() {






  const user = useSelector(selectUser);

  const isAdmin=useSelector(selectIsAdmin);
  const dispatch = useDispatch();

  const cart=useSelector(selectCart);
  const totalNumberOfItems = cart.reduce((total, item) => total + item.quantity, 0);

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  

  return (



    <nav className="navbar navbar-expand-md sticky-top bg-black"
    >
  <div className="container-md px-2 py-2">
    <div className="d-flex justify-content-between align-items-center w-100">
  <Link to="/"><img src={logo} className='logo-img' alt="" /></Link>
  <button className="navbar-toggler" type="button" onClick={toggleNavbar} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation">

       {isOpen ? <FontAwesomeIcon className='toggle-icons' icon={faTimes} size='lg' /> : <FontAwesomeIcon className='toggle-icons' icon={faBars} size='lg' />} {/* Toggle between hamburger and X icons */}
    </button>
  </div>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m mb-2 mb-lg-0 text-end pe-2">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`} to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/book-reservations' ? 'active' : ''}`} to="/book-reservations">Book Reservation</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`} to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
  </div>


</nav>



  );
}

export default Navbar;
