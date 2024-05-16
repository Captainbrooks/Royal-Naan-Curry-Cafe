import React from 'react'


import useFetchByCategory from '../../../Hook/useFetchByCategory';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartArray } from '../../../store/features/cartSlice';

import { Link } from 'react-router-dom';
import useHandleDelete from '../../../Hook/useHandleDelete';
import { selectIsAdmin } from '../../../store/features/userSlice';

function Deserts() {

  const isAdmin=useSelector(selectIsAdmin);
  const dispatch=useDispatch();

  const {data,message,isLoading}=useFetchByCategory("Desert Menu");

  const {foodtype,handleDelete}=useHandleDelete(data);

    // const DesertMenus=[
    //     {
    //         id: 701,
    //         name: "Kheer",
    //         img: Papdichat,
    //         price: "3.99 per 4 pcs",
    //         description: "Juicy, grilled chicken with aromatic spices.",
    //     },
    //     {
    //         id: 702,
    //         name: "Dhahi",
    //         img: Papdichat,
    //         price: "3.99 per 4 pcs",
    //         description: "Juicy, grilled chicken with aromatic spices.",
    //     },
    //     {
    //         id: 703,
    //         name: "Rasgulla",
    //         img: Papdichat,
    //         price: "3.99 per 4 pcs",
    //         description: "Juicy, grilled chicken with aromatic spices.",
    //     }
    //   ]
  return (
   <div className="deserts">
        <div className="container-fluid">
        <h1 className="text-warning">Desert Menu</h1>
      </div>

  
      <div className="container border-container">
          {foodtype &&
            foodtype.map((desert) => (
              <div className="mutton-items" key={desert.id}>
                <img src={desert.imgUrl} alt="starter" className="starter" />
                <h3 className="text-danger" style={{ fontWeight: "550" }}>
                  {desert.name}
                </h3>
                <span className="text-muted">{desert.price}</span>
                <p className="text-dark">{desert.description}</p>
                {
                isAdmin ? 
                <div className="admin-control">
                <button className="btn btn-danger" onClick={()=>handleDelete(desert._id)} style={{borderRadius:"20px"}}>Delete</button>
                 </div>:
                 (<Link to="/order-online"><button className="text-dark btn btn-warning" onClick={()=>dispatch(AddToCartArray(desert))} style={{borderRadius:"20px"}}>Order Now</button></Link>)
               
              }
              </div>
            ))}
        </div>

   </div>
  )
}

export default Deserts
