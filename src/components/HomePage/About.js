import React from "react";
import "../../styles/About.css";
import chef from "../../images/chef.webp"

const About = () => {
  return (
    <div className="about-rcc">
      <h2 className="text-danger">About Royal Naan Curry & Cafe</h2>

      <img className="chef-image" src={chef} alt="" />

      <div className="rcc-info-container">
        <span className="chef-description">
          At Royal Naan Curry & Cafe, <i style={{fontWeight:"bold",color:"red"}}>LilaDhar Gaire</i> is the culinary maestro
          behind the scenes. With a passion for storytelling through food,
          Aakash's journey began with a quest to blend traditional flavors with
          modern twists. Trained at renowned culinary institutions, he's
          mastered the art of infusing each dish with emotion and intuition. At
          his restaurant, every bite tells a tale of family, friendship, and the
          joy of savoring authentic cuisine
        </span>
      </div>
    </div>
  );
};

export default About;
