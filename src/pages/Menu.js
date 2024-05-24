import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import AllMenu from "../components/MenuList/AllMenu";
import SearchBar from "../components/MenuList/SearchBar";



function Menu() {



  return (
    <>
    <Navbar />
    <div className="menu-page">
   
      <div className="menu-page-body">
      <AllMenu/>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Menu;
