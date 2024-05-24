/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../../styles/Foods.css'


import butterchicken from "../../images/butterchicken.webp"
import palakpaneer from "../../images/palakpaneer.webp"
import nepalithali from "../../images/nepalithali.webp"
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'

function Foods() {

const foods=[
    {
        id:1,
        name:"Butter Chicken",
        description:"creamy and flavorful Indian dish featuring marinated chicken in a rich tomato and butter sauce.",
        img:butterchicken

    },
    {
        id:2,
        name:"Palak Paneer",
        description:"Indian dish made with creamy spinach sauce and chunks of soft paneer cheese, seasoned with aromatic spices.",
        img:palakpaneer
    },
    {
        id:3,
        name:"Thakali Set",
        description:"Authentic Nepali Thakali set Khana",
        img:nepalithali
    }
]

  return (
  <div className="container-md text-md-center">
    <div class="container-lg p-3 mb-2 mt-5  text-info-emphasis text-start text-sm-center">
    <h2 className="text-warning fw-bold">Food Gallery</h2>
    </div>

  


    <div className="container-md">
        {foods && foods.map((food)=>(
            <div className="each-food text-center" key={food.id}>

                
<div className="container">
<img className='food-image img-fluid' src={food.img} alt="Food Image" />
</div>
<h3 >{food.name}</h3>
<p>{food.description}</p>
            </div>










        ))}
    </div>
  </div>
  )
}

export default Foods
