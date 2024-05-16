import React from 'react'
import Navbar from '../components/Header/Navbar'

import Footer from '../components/Footer/Footer'
import ContactForm from '../components/UserControls/ContactForm'
import AddFoodForm from '../components/AdminControls/AddFoodForm'

function ContactUs() {
  return (
 <div className="contact-us-page">
  <Navbar/>
  <div className="contact-us">
    <ContactForm/>
    {/* <AddFoodForm/> */}
  </div>
<Footer/>
 </div>
  )
}

export default ContactUs
