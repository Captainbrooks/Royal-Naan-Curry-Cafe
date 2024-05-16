import React from "react";

import useFetchByCategory from '../../../Hook/useFetchByCategory';
import { useDispatch, useSelector } from "react-redux";
import { AddToCartArray } from "../../../store/features/cartSlice";
import { Link } from "react-router-dom";
import useHandleDelete from '../../../Hook/useHandleDelete';
import { selectIsAdmin } from "../../../store/features/userSlice";

function TraditionalBreads() {

  const dispatch=useDispatch();

  const isAdmin=useSelector(selectIsAdmin);

  const {data,message,isLoading}=useFetchByCategory("Traditional Breads");

  const {foodtype,handleDelete}=useHandleDelete(data);

  // const Breads = [
  //   {
  //     id: 301,
  //     name: "House Special Naan",
  //     description: "Stuffed with chopped chicken and herbs",
  //     price: "$5.99",
  //     img:Papdichat
  //   },
  //   {
  //       id: 302,
  //       name: "Tandoori Naan",
  //       description: "Light and fluffy Bread (Most Popular)",
  //       price: "$3.99",
  //       img:Papdichat
  //     },
  //   {
  //     id: 303,
  //     name: "Butter Naan",
  //     description: "Light and multi-layered flasky bread with lightly butter",
  //     price: "$5.99",
  //     img:Papdichat
  //   },
  //   {
  //       id: 304,
  //       name: "Garlic Naan",
  //       description: "Light bread stuffed with garlic and cumin",
  //       price: "$3.99",
  //       img:Papdichat
  //     },
  //   {
  //       id: 305,
  //       name: "Tandoori Roti",
  //       description: "Oven Baked whole wheat bread",
  //       price: "$3.99",
  //       img:Papdichat
  //     },
  //   {
  //       id: 306,
  //       name: "Onion Kulcha",
  //       description: "Tandoori bread with onions & cumin",
  //       price: "$3.99",
  //       img:Papdichat
  //     },
  
  //   {
  //       id: 307,
  //       name: "Laccha Paratha",
  //       description: "Multi Layered flasky bread",
  //       price: "$3.99",
  //       img:Papdichat
  //     },
  //   {
  //       id: 308,
  //       name: "Sukkha Roti",
  //       description: "Authentic Nepali style Wheat Bread",
  //       price: "$3.99",
  //       img:Papdichat
  //     },
  //   {
  //       id: 309,
  //       name: "Aloo Paratha",
  //       description: "Wheat bread stuffed with potatoes",
  //       price: "$3.99",
  //       img:Papdichat
  //     },
  // ];
  return (
    <div className="container">
       <div className="container starter-title">
        <h1 className="text-warning">Traditional Breads</h1>
      </div>

      <div className="container border-container">
        {foodtype &&
          foodtype.map((bread) => (
            <div className="bread-items" key={bread.id}>
              <img src={bread.imgUrl} alt="breads" className="breads" />
              <h3 className="text-danger" style={{ fontWeight: "550" }}>
                {bread.name}
              </h3>
              <span className="text-muted">{bread.price}</span>
              <p className="text-dark">{bread.description}</p>
              {
                isAdmin ? 
                <div className="admin-control">
                <button className="btn btn-danger" onClick={()=>handleDelete(bread._id)} style={{borderRadius:"20px"}}>Delete</button>
                 </div>:
                 (<Link to="/order-online"><button className="text-dark btn btn-warning" onClick={()=>dispatch(AddToCartArray(bread))} style={{borderRadius:"20px"}}>Order Now</button></Link>)
               
              }
            </div>
          ))}
          </div>
    </div>
  );
}

export default TraditionalBreads;
