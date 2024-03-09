import React, { useEffect, useState } from 'react'
import "../../styles/AllMenu.css";

import useFetchByCategory from '../../Hook/useFetchByCategory';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { selectIsAdmin, selectIsVerifiedAdmin} from '../../store/features/userSlice';
import {AddToCartArray} from '../../store/features/cartSlice';
import useHandleDelete from '../../Hook/useHandleDelete';


function StarterMenus() {


  const isAdmin = useSelector(selectIsAdmin);
  const dispatch=useDispatch();

 
  const {data,message,isLoading}=useFetchByCategory("Starter Menus");


const {foodtype,handleDelete}=useHandleDelete(data);



    // const starterMenus = [
    //     {
    //       id: 1,
    //       name: "Samosa",
    //       img: samosa,
    //       price:"3.99 per 4 pcs",
    //       description:"Flaky pastry with spiced potato filling"
    //     },
    //     {
    //       id: 2,
    //       name: "Pakoras",
    //       img: pakauras,
    //       price:"3.99 per 4 pcs",
    //       description:"Crunchy chickpea-flour coated vegetable fritters"
    //     },
    //     {
    //       id: 3,
    //       name: "Chicken Tandoori",
    //       img: tandoori,
    //       price:"7.99 per 2 pcs",
    //       description:"Tender, smoky chicken from traditional clay oven"
    //     },
    //     {
    //       id: 4,
    //       name: "Chicken Tikka",
    //       img: chickentikka,
    //       price:"3.99 per 4 pcs",
    //       description:"Juicy, grilled chicken with aromatic spices"
    //     },
    //     {
    //       id: 5,
    //       name: "Panner Tikka",
    //       img: pannertikka,
    //       price:"3.99 per 4 pcs",
    //       description:"Juicy, grilled chicken with aromatic spices."
    //     },
    //     {
    //       id: 6,
    //       name: "Alu Tikki",
    //       img: alutikki,
    //       price:"3.99 per 4 pcs",
    //       description:"Juicy, grilled chicken with aromatic spices."
    //     },
    //     {
    //       id: 7,
    //       name: "Papdi Chaat",
    //       img: Papdichat,
    //       price:"3.99 per 4 pcs",
    //       description:"Juicy, grilled chicken with aromatic spices."
    //     },
    //     {
    //       id: 8,
    //       name: "Seekh Kabab",
    //       img: seekhkabab,
    //       price:"3.99 per 4 pcs",
    //       description:"Juicy, grilled chicken with aromatic spices."
    //     },
    //   ];



  return (
 <div className="container">
      <div className="container starter-title">
        <h1 className="text-warning">Starter Menus</h1>
      </div>

      <div className="container starter-food-container">
        {foodtype.length > 0 ?
          foodtype.map((starter) => (
            <div className="each-starter" key={starter.id}>
              <div className="image">
              <img src={starter.imgUrl} alt="starter" className="starter" />
              </div>
              <div className="starter-info">
              <h3 className="text-danger" style={{ fontWeight: "550" }}>
                {starter.name}
              </h3>
              <span className="text-muted">${starter.price}</span>
              <p className="text-secondary">{starter.description}</p>
              </div>

              {
                isAdmin ? 
                <div className="admin-control">
                <button className="btn btn-danger" onClick={()=>handleDelete(starter._id)} style={{borderRadius:"20px"}}>Delete</button>
                 </div>:
                 (<Link to="/order-online"><button className="text-dark btn btn-warning" onClick={()=>dispatch(AddToCartArray(starter))} style={{borderRadius:"20px"}}>Order Now</button></Link>)
               
              }
            </div>
          )):

          (<div>
            <h4 className='text-muted'>No Starter Items</h4>
            { isAdmin &&
              <Link to="/add-food"> <button className='btn btn-primary'>Add Starter Items</button></Link> 
            }
            </div>)
        }

      </div>
 </div>

  )
}

export default StarterMenus
