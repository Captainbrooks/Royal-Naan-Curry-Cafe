import React from "react";
import "../../styles/Ratings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import bishnusapkota from "../../images/bishnusapkota.jpg";
import krishnaneupane from "../../images/krishnaneupane.jpg";
import jatinyogi from "../../images/jatinyogi.jpg";
import miltongaire from "../../images/miltongaire.jpg";
import aakashpaudel from "../../images/aakashpaudel.jpg";
import prajwaladhikari from "../../images/prajwaladhikari.jpg";

function Ratings() {
  const ratings = [
    {
      id: 1,
      profileImg: miltongaire,
      customerName: "Milton Gaire",
      time: "3 months ago",
      customerDescription:
        "Always our favourite place to go for a family dinner. Everything is just perfect that you cannot get over this place. Everything is just awesome from staff to food.avourite place to go for a family dinner.",
    },
    {
      id: 2,
      profileImg: krishnaneupane,
      customerName: "Krishna Neupane",
      time: "2 days ago",
      customerDescription:
        "From the moment you step inside, you're greeted with warmth and hospitality. The flavors are rich, the portions generous, and the atmosphere inviting. Whether it's a cozy dinner for two or a gathering with friends, this restaurant never fails to impress. Definitely a favorite spot for indulging in culinary delights!",
    },
    {
      id: 3,
      profileImg: aakashpaudel,
      customerName: "Aakash Paudel",
      time: "1 month ago",
      customerDescription:
        "Incredible food, impeccable service, and a charming ambiance—what more could you ask for? Every visit leaves us craving more, and we find ourselves eagerly anticipating our next meal here. Whether you're a food enthusiast or just looking for a delightful dining experience, this place is a must-visit.",
    },
    {
      id: 4,
      profileImg: bishnusapkota,
      customerName: "Bishnu Sapkota",
      time: "1 year ago",
      customerDescription:
        "Absolutely delightful dining experience! From the warm welcome at the door to the impeccable service and scrumptious dishes, every moment spent here is memorable. A must-visit for anyone craving authentic flavors and top-notch hospitality.",
    },
    {
      id: 5,
      profileImg: jatinyogi,
      customerName: "Jatin Yogi",
      time: "4 months ago",
      customerDescription:
        "Exquisite flavors and impeccable presentation make this restaurant a standout gem in the culinary scene. The attention to detail in every dish is evident, and the staff goes above and beyond to ensure a delightful dining experience. It's no wonder this has become our go-to spot for celebrating life's moments.",
    },
    {
      id: 6,
      profileImg: prajwaladhikari,
      customerName: "Prajwal Adikari",
      time: "2 years ago",
      customerDescription:
        "Hands down the best Indian cuisine in town! Every bite is bursting with flavor, and the ambiance is inviting and cozy. Whether it's a special occasion or just a casual night out, this place never disappoints. Highly recommend trying their signature dishes!",
    },
  ];

  return (
    <div className="container-sm">
      <div className="container-lg p-3 mb-2  text-info-emphasis text-start text-sm-center">
        <h2 className="text-warning fw-bold">Customer Reviews</h2>
      </div>

      <div className="reviews-container">
        {ratings.map((rating) => (
          <div className="each-review" key={rating.id}>
            <div className="review-header">
              <img src={rating.profileImg} className="profile" alt="pic" />

              <div className="customer-name">
                <h4 className="text-primary">{rating.customerName}</h4>
                <div className="star-ratings">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      className="star-icon"
                      icon={faStar}
                    />
                  ))}
                </div>
                <span>
                  <small className="text-muted">{rating.time}</small>
                </span>
              </div>
            </div>
            <div className="review-body">
              <div className="ratings-description">
                <span className="text-secondary">
                  {rating.customerDescription}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ratings;
