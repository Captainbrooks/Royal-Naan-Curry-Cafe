import React from 'react'
import Navbar from '../components/Header/Navbar'

import Footer from '../components/Footer/Footer'
import ReservationForm from '../components/UserControls/ReservationForm'
import Headroom from 'react-headroom';
function BookReservation() {
  return (

   <div className="book-reservation-page">
    <Headroom>
<Navbar/>
</Headroom>
<div className="book-reservations-body">
<ReservationForm/>
</div>
<Footer/>

   </div>
    
      
 
  )
}

export default BookReservation
