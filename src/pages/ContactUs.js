import React from 'react'
import Navbar from '../components/Header/Navbar'

import Footer from '../components/Footer/Footer'
import ContactForm from '../components/UserControls/ContactForm'
import AddFoodForm from '../components/AdminControls/AddFoodForm'
import Headroom from 'react-headroom'

function ContactUs() {
  return (
 <div className="contact-us-page">

  <Headroom>
  <Navbar/>
  </Headroom>

  <div className="contact-us">
    <ContactForm/>
    {/* <AddFoodForm/> */}
  </div>
<Footer/>
 </div>
  )
}

export default ContactUs
