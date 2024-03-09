import React from 'react'
import useFetchMainCourses from '../../Hook/useFetchMainCourses';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartArray,removeFromCart } from '../../store/features/cartSlice';
import { Link } from 'react-router-dom';
import useHandleDelete from '../../Hook/useHandleDelete';
import { selectIsAdmin } from '../../store/features/userSlice';

function ChickenMainCourses() {

  const isAdmin=useSelector(selectIsAdmin);

const dispatch=useDispatch();

    const {data,message,isLoading}=useFetchMainCourses("Chicken");

    const {foodtype,handleDelete}=useHandleDelete(data);

  return (
  <div className="chicken-main-courses">
      <div className="container">
        <h1 className="text-secondary" style={{padding:"10px",borderRadius:"20px"}}>Chicken Items</h1>
      </div>

        <div className="container border-container">
          {foodtype &&
            foodtype.map((chicken) => (
              <div className="chicken-items" key={chicken.id}>
                <img src={chicken.imgUrl} alt="starter" className="starter" />
                <h3 className="text-danger" style={{ fontWeight: "550" }}>
                  {chicken.name}
                </h3>
                <span className="text-muted">{chicken.price}$</span>
                <p className="text-dark">{chicken.description}</p>
                {
                isAdmin ? 
                <div className="admin-control">
                <button className="btn btn-danger" onClick={()=>handleDelete(chicken._id)} style={{borderRadius:"20px"}}>Delete</button>
                 </div>:
                 (<Link to="/order-online"><button className="text-dark btn btn-warning" onClick={()=>dispatch(AddToCartArray(chicken))} style={{borderRadius:"20px"}}>Order Now</button></Link>)
               
              }
              </div>
            ))}
        </div>
  </div>
  )
}

export default ChickenMainCourses
