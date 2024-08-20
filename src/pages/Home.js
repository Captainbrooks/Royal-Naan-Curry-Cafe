import React from 'react'
import Navbar from "../components/Header/Navbar";
import Welcome from "../components/HomePage/Welcome";
import Foods from "../components/HomePage/Foods";
import About from "../components/HomePage/About";
import Ratings from "../components/HomePage/Ratings";
import Footer from "../components/Footer/Footer";
import Headroom from 'react-headroom';

function Home() {
  return (
    <div className="home-page">


      
      <Welcome />
      <Foods />
      <About />
      <Ratings />
      <Footer />
    </div>
  )
}

export default Home
