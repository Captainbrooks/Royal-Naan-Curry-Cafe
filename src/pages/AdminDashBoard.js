import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../store/features/userSlice';
import "../styles/AdminDashBoard.css"



import '../styles/Navbar.css';
// import logo from "../../images/restrologo.png";
import logo from "../images/logo-no-background.png";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FaShoppingCart } from 'react-icons/fa';
import AddFoodForm from '../components/AdminControls/AddFoodForm';
import ViewUsers from '../components/AdminControls/ViewUsers';
import Admin from '../components/AdminControls/Admin';
import CreateEvents from '../components/AdminControls/CreateEvents';
import ViewReservation from '../components/AdminControls/ViewReservation';
import AddFood from '../components/AdminControls/AddFood';




function AdminDashBoard() {






    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };



    const[content,setContent]=useState(<Admin/>);


    
  return (
<div className="admin-dashboard">
<div className="admin-dashboard-sidebar">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" onClick={toggleNavbar} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={isOpen} aria-label="Toggle navigation" style={{justifyContent:"center"}}>
        {isOpen ? <FontAwesomeIcon className='toggle-icons' icon={faTimes} /> : <FontAwesomeIcon className='toggle-icons' icon={faBars}  />} {/* Toggle between hamburger and X icons */}
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav" style={{display:'flex',flexDirection:"column",justifyContent:"space-around"}}>
                      
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" onClick={()=>setContent(<Admin/>)} >Admin Home</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link">Manage Orders</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/add-food' ? 'active' : ''}`}>
            <Link className="nav-link"  onClick={()=>setContent(<AddFood/>)}>Manage Food Items</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" onClick={()=>setContent(<ViewUsers/>)}>Manage Users</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" onClick={()=>setContent(<CreateEvents/>)}>Manage Events</Link>
          </li>

          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" onClick={()=>setContent(<ViewReservation/>)}>Manage Reservations</Link>
          </li>

          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link className="nav-link" to="/">Go To Homepage</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>

<div className="content">

{content && <div>{content}</div>}

</div>
</div>
  )
}

export default AdminDashBoard
