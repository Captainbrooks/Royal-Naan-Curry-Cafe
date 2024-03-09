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
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <Link to="/"><img src={logo} className='logo-img' alt="" /></Link>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={isOpen} aria-label="Toggle navigation">
        {isOpen ? <FontAwesomeIcon className='toggle-icons' icon={faTimes} size='lg' /> : <FontAwesomeIcon className='toggle-icons' icon={faBars} size='lg' />} {/* Toggle between hamburger and X icons */}
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className={`nav-item dropdown ${location.pathname === '/menu' ? 'active' : ''}`}>
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/book-reservations' ? 'active' : ''}`}>
            <Link className="nav-link" to="/book-reservations">Book Reservation</Link>
          </li>

          <li className={`nav-item ${location.pathname === '/events' ? 'active' : ''}`}>
            <Link className="nav-link" to="/events">Events</Link>
          </li>

          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>

        </ul>

   

        {user ? (<div className="order">
          <button type="button" className="btn btn-warning" onClick={() => dispatch(logoutUser())}>Logout</button>
        </div>) : (
          ""
        )

        
       

        

        }


    
        <div className="order">
          {
     !isAdmin ?   <Link to="/order-online"><button type="button" className="btn btn-warning">Order Online</button></Link>: <Link to="/admin-dashboard"><button type="button" className="btn btn-warning">Admin Dashboard</button></Link>
          }


        </div>
        <div className="cart-logo">
          {
             (<Link to="/cart"><div className='count' style={{display:"flex",justifyContent:"center",padding:"5px", backgroundColor:"black",borderRadius:"50%",color:"white"}}> {totalNumberOfItems}</div><FaShoppingCart size="2em" className={`${location.pathname === '/cart' ? 'text-warning' : 'text-white'}`}/>
           </Link>)
          }
        </div>

      </div>
      
    </nav>
  
       
  );
}

export default Navbar;





