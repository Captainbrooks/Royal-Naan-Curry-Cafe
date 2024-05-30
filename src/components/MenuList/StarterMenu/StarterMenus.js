import React from 'react';
import "../../../styles/AllMenu.css";
import useFetchByCategory from '../../../Hook/useFetchByCategory';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAdmin } from '../../../store/features/userSlice';
import { AddToCartArray } from '../../../store/features/cartSlice';
import useHandleDelete from '../../../Hook/useHandleDelete';
import LoadingSpinner from '../../LoadingSpinner';

function StarterMenus() {
  const isAdmin = useSelector(selectIsAdmin);
  const dispatch = useDispatch();
  const { data, message, isLoading } = useFetchByCategory("Starter Menus");
  const { foodtype, handleDelete } = useHandleDelete(data);

  return (
    <div className="container-xl">
      <div className="container-fluid p-1 mb-2 text-start text-md-center">
        <h1 className="text-warning fw-bold fs-2">Starter Menus</h1>
      </div>

      {isLoading ? (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="container-fluid d-flex flex-wrap">
          {foodtype.length > 0 ? (
            foodtype.map((starter) => (
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 custom-eachfood p-2" key={starter.id}>
                <div className="card custom-card" style={{ width: "18rem" }}>
                  <img className="card-img" src={starter.imgUrl} alt="starter item" height={"200rem"} style={{ borderRadius: "100%" }} />
                  <div className="card-body text-center">
                    <h4 className="card-title text-muted fw-bold">{starter.name}</h4>
                    <span className="text-muted text-center">${starter.price}</span>
                    <p className="card-text text-secondary text-center">{starter.description}</p>
                    {isAdmin ? (
                      <div className="admin-control">
                        <button className="btn btn-danger" onClick={() => handleDelete(starter._id)} style={{ borderRadius: "20px" }}>Delete</button>
                      </div>
                    ) : (
                      <Link to="/order-online">
                        <button className="text-dark btn btn-warning" onClick={() => dispatch(AddToCartArray(starter))} style={{ borderRadius: "20px" }}>Order Now</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h4 className="text-muted">No Starter Items</h4>
              {isAdmin && <Link to="/add-food"><button className="btn btn-primary">Add Starter Items</button></Link>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StarterMenus;
