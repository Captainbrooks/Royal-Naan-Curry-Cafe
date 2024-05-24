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
    <div className="container-xl">
    <div className="container-fluid p-1 mb-2 text-start text-md-center">
      <h1 className="text-warning fw-bold fs-2">Desert</h1>
    </div>

    <div className=" container-xl d-flex flex-wrap">
      {foodtype.length > 0 ?
        foodtype.map((starter) => (

          <div className="col-sm-12 col-md-6 col-lg-4 custom-eachfood  p-2" >

<div class="card custom-card" style={{ width: "18rem"}} key={starter.id}>
              <img class="card-img-top" src={starter.imgUrl} alt="starter item" height={"200rem"} style={{ borderRadius: "50%" }} />
              <div class="card-body text-center">
                <h3 class="card-title text-warning">{starter.name}</h3>
                   <span className="text-muted">${starter.price}</span>
                <p class="card-text text-dark">{starter.description}</p>
                {
                  isAdmin ?
                    <div className="admin-control">
                      <button className="btn btn-danger" onClick={() => handleDelete(starter._id)} style={{ borderRadius: "20px" }}>Delete</button>
                    </div> :
                    (<Link to="/order-online"><button className="text-dark btn btn-warning" onClick={() => dispatch(AddToCartArray(starter))} style={{ borderRadius: "20px" }}>Order Now</button></Link>)

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
</div>
  )
}

export default Deserts
