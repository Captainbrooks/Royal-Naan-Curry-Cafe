import React from 'react';
import '../../styles/Foods.css';

import butterchicken from '../../images/butterchicken.webp';
import palakpaneer from '../../images/palakpaneer.webp';
import nepalithali from '../../images/nepalithali.webp';

function Foods() {
  const foods = [
    {
      id: 1,
      name: 'Butter Chicken',
      description: 'Creamy and flavorful Indian dish featuring marinated chicken in a rich tomato and butter sauce.',
      img: butterchicken,
    },
    {
      id: 2,
      name: 'Palak Paneer',
      description: 'Indian dish made with creamy spinach sauce and chunks of soft paneer cheese, seasoned with aromatic spices.',
      img: palakpaneer,
    },
    {
      id: 3,
      name: 'Thakali Set',
      description: 'Authentic Nepali Thakali set Khana',
      img: nepalithali,
    },
  ];

  return (
    <div className="container-fluid text-md-center">
      <div className="container-lg p-3 mb-2 mt-5 text-info-emphasis text-center">
        <h2 className="text-warning fw-bold">Food Gallery</h2>
      </div>

      <div className="container-fluid">
        <div className="row g-3">
          {foods.map((food) => (
            <div className="col-md-4">
              <div className="food-card position-relative">
                <img className="img-fluid w-100 food-image" src={food.img} alt={`Image of ${food.name}`} />
                <div className="overlay d-flex flex-column justify-content-center align-items-center text-white">
                  <h3 className='text-warning fw-bold'>{food.name}</h3>
                  <p className='text-white fw-bold'>{food.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Foods;
