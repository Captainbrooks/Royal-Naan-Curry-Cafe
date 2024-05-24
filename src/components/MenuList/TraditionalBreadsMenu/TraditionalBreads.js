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
    <div className="container-xl">
    <div className="container-fluid p-1 mb-2  text-start text-md-center">
      <h1 className="text-warning fw-bold fs-2">Traditional Breads</h1>
    </div>

    <div className="container-xl d-flex flex-wrap">
      {foodtype.length > 0 ?
        foodtype.map((bread) => (

          <div className="col-sm-12 col-md-6 col-lg-4 custom-eachfood  p-2" >

<div class="card custom-card" style={{ width: "18rem"}} key={bread.id}>
              <img class="card-img-top" src={bread.imgUrl} alt="bread item" height={"200rem"} style={{ borderRadius: "50%" }} />
              <div class="card-body text-center">
                <h3 class="card-title text-warning">{bread.name}</h3>
                   <span className="text-muted">${bread.price}</span>
                <p class="card-text text-dark">{bread.description}</p>
                {
                  isAdmin ?
                    <div className="admin-control">
                      <button className="btn btn-danger" onClick={() => handleDelete(bread._id)} style={{ borderRadius: "20px" }}>Delete</button>
                    </div> :
                    (<Link to="/order-online"><button className="text-dark btn btn-warning" onClick={() => dispatch(AddToCartArray(bread))} style={{ borderRadius: "20px" }}>Order Now</button></Link>)

                }
              </div>
            </div>
      
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
  );
}

export default TraditionalBreads;
