import React from 'react'
import Navbar from '../components/Header/Navbar'

import Footer from '../components/Footer/Footer'
import ReservationForm from '../components/UserControls/ReservationForm'

function BookReservation() {
  return (

   <div className="book-reservation-page">
<Navbar/>
<div className="book-reservations-body">
<ReservationForm/>
</div>
<Footer/>

   </div>
    
      
 
  )
}

export default BookReservation
