import React from 'react';
import useFetchDrinks from '../../../Hook/useFetchDrinks';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartArray } from '../../../store/features/cartSlice';
import { Link } from 'react-router-dom';
import useHandleDelete from '../../../Hook/useHandleDelete';
import { selectIsAdmin } from '../../../store/features/userSlice';
import LoadingSpinner from '../../../components/LoadingSpinner';

function Beverages() {
  const dispatch = useDispatch();
  const isAdmin = useSelector(selectIsAdmin);
  const { data, message, isLoading } = useFetchDrinks("Beverages");
  const { foodtype, handleDelete } = useHandleDelete(data);

  return (
    <div className="container-xl">
      <div className="p-2 my-4 bg-body">
        <h5 className='text-body-secondary fw-bolder h3' style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>Beverages</h5>
      </div>

      {isLoading ? (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="container-xl d-flex flex-wrap">
          {foodtype.length > 0 ? (
            foodtype.map((beverage) => (
              <div className="col-sm-12 col-md-6 col-lg-4 custom-eachfood p-2" key={beverage.id}>
                <div className="card custom-card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={beverage.imgUrl} alt="beverage item" height="200rem" style={{ borderRadius: "50%" }} />
                  <div className="card-body text-center">
                    <h3 className="card-title text-warning">{beverage.name}</h3>
                    <span className="text-muted">${beverage.price}</span>
                    <p className="card-text text-dark">{beverage.description}</p>
                    {isAdmin ? (
                      <div className="admin-control">
                        <button className="btn btn-danger" onClick={() => handleDelete(beverage._id)} style={{ borderRadius: "20px" }}>Delete</button>
                      </div>
                    ) : (
                      <Link to="/order-online">
                        <button className="text-dark btn btn-warning" onClick={() => dispatch(AddToCartArray(beverage))} style={{ borderRadius: "20px" }}>Order Now</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h4 className='text-muted'>No Beverages Available</h4>
              {isAdmin && (
                <Link to="/add-food">
                  <button className='btn btn-primary'>Add Beverages</button>
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Beverages;
