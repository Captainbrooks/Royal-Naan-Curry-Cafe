import React from 'react';
import useFetchMainCourses from '../../../Hook/useFetchMainCourses';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartArray } from '../../../store/features/cartSlice';
import { Link } from 'react-router-dom';
import useHandleDelete from '../../../Hook/useHandleDelete';
import { selectIsAdmin } from '../../../store/features/userSlice';
import LoadingSpinner from '../../../components/LoadingSpinner';

function MuttonMainCourses() {
  const isAdmin = useSelector(selectIsAdmin);
  const dispatch = useDispatch();
  const { data, message, isLoading } = useFetchMainCourses('Mutton');
  const { foodtype, handleDelete } = useHandleDelete(data);

  return (
    <div className="container-xl">
      <div className="p-2 my-4 bg-body">
        <h5 className='text-body-secondary fw-bolder h3' style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Mutton Items</h5>
      </div>

      {isLoading ? (
        <div className="text-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="container-xl d-flex flex-wrap">
          {foodtype.length > 0 ? (
            foodtype.map((mutton) => (
              <div className="col-sm-12 col-md-6 col-lg-4 custom-eachfood p-2" key={mutton.id}>
                <div className="card custom-card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src={mutton.imgUrl} alt="mutton item" height="200rem" style={{ borderRadius: '50%' }} />
                  <div className="card-body text-center">
                    <h3 className="card-title text-warning">{mutton.name}</h3>
                    <span className="text-muted">${mutton.price}</span>
                    <p className="card-text text-dark">{mutton.description}</p>
                    {isAdmin ? (
                      <div className="admin-control">
                        <button className="btn btn-danger" onClick={() => handleDelete(mutton._id)} style={{ borderRadius: '20px' }}>Delete</button>
                      </div>
                    ) : (
                      <Link to="/order-online">
                        <button className="text-dark btn btn-warning" onClick={() => dispatch(AddToCartArray(mutton))} style={{ borderRadius: '20px' }}>Order Now</button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h4 className='text-muted'>No Starter Items</h4>
              {isAdmin && <Link to="/admin-dashboard"><button className='btn btn-primary'>Add Starter Items</button></Link>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MuttonMainCourses;
