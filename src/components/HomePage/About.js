import React from "react";
import chef from "../../images/chef.webp"

const About = () => {
  return (
    <div className="container p-3">
      <div class="container-lg p-3 mb-2 bg-info-subtle text-info-emphasis text-start text-sm-center">
      <h2 className="text-warning fw-bold text-md-center">About Royal Naan Curry & Cafe</h2>
      </div>

<div className="chef-info container justify-content-center mb-5">
      <div className="col-sm-12 col-md-6 chef-image mb-5">

      <img src={chef} class="img-fluid rounded-5" alt="chef image"/>
      </div>

<div className="col-md-6 text-center">
<div className="fw-bold  p-2 mb-2 bg-body-tertiary lh-lg">  At Royal Naan Curry & Cafe, <i style={{fontWeight:"bold",color:"red"}}>LilaDhar Gaire</i> is the culinary maestro
          behind the scenes. With a passion for storytelling through food,
          Aakash's journey began with a quest to blend traditional flavors with
          modern twists. Trained at renowned culinary institutions, he's
          mastered the art of infusing each dish with emotion and intuition. At
          his restaurant, every bite tells a tale of family, friendship, and the
          joy of savoring authentic cuisine</div>
        </div> 
        </div>

      </div>
  );
};

export default About;
