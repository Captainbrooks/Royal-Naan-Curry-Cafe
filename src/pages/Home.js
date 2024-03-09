import React from 'react'
import Navbar from "../components/Header/Navbar";
import Welcome from "../components/Body/Welcome";
import Foods from "../components/Body/Foods";
import About from "../components/Body/About";
import Ratings from "../components/Body/Ratings";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
  <div className="home-page">
     <Navbar/>
    <Welcome/>
    <Foods/>
    <About/>
    <Ratings/>
    <Footer/>
  </div>
  )
}

export default Home
