import React from 'react'
import useFetchDrinks from '../../../Hook/useFetchDrinks';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartArray } from '../../../store/features/cartSlice';
import { Link } from 'react-router-dom';
import useHandleDelete from '../../../Hook/useHandleDelete';
import { selectIsAdmin } from '../../../store/features/userSlice';
import LoadingSpinner from '../../../components/LoadingSpinner';

function CoffeeAndTea() {

  const isAdmin=useSelector(selectIsAdmin);

  const dispatch=useDispatch();
  const {data,message,isLoading}=useFetchDrinks("Coffee & Tea");

  const {foodtype,handleDelete}=useHandleDelete(data);


  return (
    <div className="container-xl">
    <div className="p-2 my-4 bg-body">
      <h5 className='text-body-secondary fw-bolder h3' style={{textShadow: "1px 1px 2px rgba(0,0,0,0.5)"}}>Coffee & Tea</h5>
    </div>
    
    
    {isLoading ? (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      ) : (
    
        <div className="container-xl d-flex flex-wrap">
          {foodtype.length > 0 ?
            foodtype.map((chicken) => (
    
              <div className="col-sm-12 col-md-6 col-lg-4 custom-eachfood  p-2" >
    
    <div class="card custom-card" style={{ width: "18rem"}} key={chicken.id}>
                  <img class="card-img-top" src={chicken.imgUrl} alt="chicken item" height={"200rem"} style={{ borderRadius: "50%" }} />
                  <div class="card-body text-center">
                    <h3 class="card-title text-warning">{chicken.name}</h3>
                       <span className="text-muted">${chicken.price}</span>
                    <p class="card-text text-dark">{chicken.description}</p>
                    {
                      isAdmin ?
                        <div className="admin-control">
                          <button className="btn btn-danger" onClick={() => handleDelete(chicken._id)} style={{ borderRadius: "20px" }}>Delete</button>
                        </div> :
                        (<Link to="/order-online"><button className="text-dark btn btn-warning" onClick={() => dispatch(AddToCartArray(chicken))} style={{ borderRadius: "20px" }}>Order Now</button></Link>)
    
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

      )}
    </div>
  )
}

export default CoffeeAndTea
