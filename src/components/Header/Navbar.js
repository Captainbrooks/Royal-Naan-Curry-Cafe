import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../images/logo-no-background.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md bg-body-tertiary bg-dark">
  <div class="container-md p-1 px-2">
    <div className="d-flex justify-content-between align-items-center">
  <Link to="/"><img src={logo} className='logo-img' alt="" /></Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  m mb-2 mb-lg-0 text-end pe-2 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
