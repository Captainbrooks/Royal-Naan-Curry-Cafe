import React from 'react'
import "../../../styles/AllMenu.css";
import useFetchMainCourses from '../../../Hook/useFetchMainCourses';
import { AddToCartArray,removeFromCart } from '../../../store/features/cartSlice';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useHandleDelete from '../../../Hook/useHandleDelete';
import { selectIsAdmin } from '../../../store/features/userSlice';

function VegMainCourses() {
  const dispatch=useDispatch();

  const isAdmin = useSelector(selectIsAdmin);


    const {data,message,isLoading}=useFetchMainCourses("Veg");




    const {foodtype,handleDelete}=useHandleDelete(data);
    
  return (
 <div className="veg-maincourses">
     <div className="container">
        <h1 className="text-secondary" style={{padding:"10px",borderRadius:"20px"}}>Veg Items</h1>
      </div>

      {/*  veg main courses */}
      <div className="container border-container">
        {foodtype &&
          foodtype.map((veg) => (
            <div className="veg-items" key={veg.id}>
              <img src={veg.imgUrl} alt="starter" className="starter" />
              <h3 className="text-danger" style={{ fontWeight: "550" }}>
                {veg.name}
              </h3>
              <span className="text-muted">{veg.price}</span>
              <p className="text-dark">{veg.description}</p>
              {
                isAdmin ? 
                <div className="admin-control">
                <button className="btn btn-danger" onClick={()=>handleDelete(veg._id)} style={{borderRadius:"20px"}}>Delete</button>
                 </div>:
                 (<Link to="/order-online"><button className="text-dark btn btn-warning" onClick={()=>dispatch(AddToCartArray(veg))} style={{borderRadius:"20px"}}>Order Now</button></Link>)
               
              }
            </div>
          ))}
          </div>
 </div>
  )
}

export default VegMainCourses
