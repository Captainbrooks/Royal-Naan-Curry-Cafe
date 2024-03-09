/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import '../../styles/Foods.css'


import butterchicken from "../../images/butterchicken.webp"
import palakpaneer from "../../images/palakpaneer.webp"
import nepalithali from "../../images/nepalithali.webp"

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
  <div className="foods-available">
    <h2 className="text-danger">Food Gallery</h2>


    <div className="food-gallery">
        {foods && foods.map((food)=>(
            <div className="each-food" key={food.id}>

<img className='food-image' src={food.img} alt="Food Image" />
<h3 >{food.name}</h3>
<p>{food.description}</p>
            </div>
        ))}
    </div>
  </div>
  )
}

export default Foods
