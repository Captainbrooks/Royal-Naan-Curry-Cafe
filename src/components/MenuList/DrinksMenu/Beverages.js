import React from 'react'
import useFetchDrinks from '../../../Hook/useFetchDrinks';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartArray } from '../../../store/features/cartSlice';
import { Link } from 'react-router-dom';
import useHandleDelete from '../../../Hook/useHandleDelete';
import { selectIsAdmin } from '../../../store/features/userSlice';


function Beverages() {

  const dispatch=useDispatch();

  const isAdmin=useSelector(selectIsAdmin)

    const {data,message,isLoading}=useFetchDrinks("Beverages");

    const {foodtype,handleDelete}=useHandleDelete(data);

  return (
  <div className="beverages">
     <div className="container">
        <h1 className="text-white bg-success title-menu" style={{padding:"10px",borderRadius:"20px"}}>Beverages</h1>
      </div>

      <div className="container border-container">
            {foodtype &&
              foodtype.map((drink) => (
                <div className="beverage" key={drink.id}>
                  <img src={drink.imgUrl} alt={drink.name} className="drink" />
                  <h3 className="text-danger" style={{ fontWeight: "550" }}>
                    {drink.name}
                  </h3>
                  <span className="text-muted">{drink.price}</span>
                  <p className="text-dark">{drink.description}</p>
                  {
                isAdmin ? 
                <div className="admin-control">
                <button className="btn btn-danger" onClick={()=>handleDelete(drink._id)} style={{borderRadius:"20px"}}>Delete</button>
                 </div>:
                 (<Link to="/order-online"><button className="text-dark btn btn-warning" onClick={()=>dispatch(AddToCartArray(drink))} style={{borderRadius:"20px"}}>Order Now</button></Link>)
               
              }
                </div>
              ))}
       </div>
  </div>
  )
}

export default Beverages
