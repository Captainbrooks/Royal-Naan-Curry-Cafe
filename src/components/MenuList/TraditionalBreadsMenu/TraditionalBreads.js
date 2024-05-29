import React from "react";
import useFetchByCategory from '../../../Hook/useFetchByCategory';
import { useDispatch, useSelector } from "react-redux";
import { AddToCartArray } from "../../../store/features/cartSlice";
import { Link } from "react-router-dom";
import useHandleDelete from '../../../Hook/useHandleDelete';
import { selectIsAdmin } from "../../../store/features/userSlice";
import LoadingSpinner from "../../../components/LoadingSpinner";

function TraditionalBreads() {
  const dispatch = useDispatch();
  const isAdmin = useSelector(selectIsAdmin);
  const { data, message, isLoading } = useFetchByCategory("Traditional Breads");
  const { foodtype, handleDelete } = useHandleDelete(data);

  return (
    <div className="container-xl">
      <div className="container-fluid p-1 mb-2 text-start text-md-center">
        <h1 className="text-warning fw-bold fs-2">Traditional Breads</h1>
      </div>

      {isLoading ? (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="container-xl d-flex flex-wrap">
          {foodtype.length > 0 ? (
            foodtype.map((bread) => (
              <div className="col-sm-12 col-md-6 col-lg-4 custom-eachfood p-2" key={bread.id}>
                <div className="card custom-card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={bread.imgUrl} alt="bread item" height="200rem" style={{ borderRadius: "50%" }} />
                  <div className="card-body text-center">
                    <h3 className="card-title text-warning">{bread.name}</h3>
                    <span className="text-muted">${bread.price}</span>
                    <p className="card-text text-dark">{bread.description}</p>
                    {isAdmin ? (
                      <div className="admin-control">
                        <button className="btn btn-danger" onClick={() => handleDelete(bread._id)} style={{ borderRadius: "20px" }}>Delete</button>
                      </div>
                    ) : (
                      <Link to="/order-online">
                        <button className="text-dark btn btn-warning" onClick={() => dispatch(AddToCartArray(bread))} style={{ borderRadius: "20px" }}>Order Now</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h4 className='text-muted'>No Starter Items</h4>
              {isAdmin && (
                <Link to="/add-food">
                  <button className='btn btn-primary'>Add Starter Items</button>
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TraditionalBreads;
