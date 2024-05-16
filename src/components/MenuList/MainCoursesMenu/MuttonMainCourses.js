import React from 'react'
import useFetchMainCourses from '../../../Hook/useFetchMainCourses';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartArray } from '../../../store/features/cartSlice';
import { Link } from 'react-router-dom';
import useHandleDelete from '../../../Hook/useHandleDelete';
import { selectIsAdmin } from '../../../store/features/userSlice';

function MuttonMainCourses() {

  const isAdmin=useSelector(selectIsAdmin);

  const dispatch=useDispatch();

    const {data,message,isLoading}=useFetchMainCourses("Mutton");

    const {foodtype,handleDelete}=useHandleDelete(data);


  return (
  <div className="mutton-maincourses">
  <div className="container">
        <h1 className="text-secondary" style={{padding:"10px",borderRadius:"20px"}}>Mutton Items</h1>
      </div>

      <div className="container border-container">
          {foodtype &&
            foodtype.map((mutton) => (
              <div className="mutton-items" key={mutton.id}>
                <img src={mutton.imgUrl} alt="starter" className="starter" />
                <h3 className="text-danger" style={{ fontWeight: "550" }}>
                  {mutton.name}
                </h3>
                <span className="text-muted">{mutton.price}</span>
                <p className="text-dark">{mutton.description}</p>
                {
                isAdmin ? 
                <div className="admin-control">
                <button className="btn btn-danger" onClick={()=>handleDelete(mutton._id)} style={{borderRadius:"20px"}}>Delete</button>
                 </div>:
                 (<Link to="/order-online"><button className="text-dark btn btn-warning" onClick={()=>dispatch(AddToCartArray(mutton))} style={{borderRadius:"20px"}}>Order Now</button></Link>)
               
              }
              </div>
            ))}
        </div>
  </div>
  )
}

export default MuttonMainCourses
