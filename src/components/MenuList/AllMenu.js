import React, { useState, useEffect } from "react";
import "../../styles/AllMenu.css";

import StarterMenus from "./StarterMenu/StarterMenus";
import MainCourses from "./MainCoursesMenu/MainCourses";
import TraditionalBreads from "./TraditionalBreadsMenu/TraditionalBreads";
import DrinkMenu from "./DrinksMenu/DrinkMenu";
import Deserts from "./DesertMenu/Deserts";


function AllMenu() {
  const [section, setSection] = useState('');

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const startersOffset = document.getElementById("starters").offsetTop;
      const mainCoursesOffset = document.getElementById("main-courses").offsetTop;
      const traditionalBreadsOffset = document.getElementById("traditional-breads").offsetTop;
      const drinkMenusOffset = document.getElementById("drink-menus").offsetTop;
      const desertMenusOffset = document.getElementById("desert-menus").offsetTop;

      if (scrollPosition >= startersOffset && scrollPosition < mainCoursesOffset) {
        setSection('starters');
      } else if (scrollPosition >= mainCoursesOffset && scrollPosition < traditionalBreadsOffset) {
        setSection('main-courses');
      } else if (scrollPosition >= traditionalBreadsOffset && scrollPosition < drinkMenusOffset) {
        setSection('traditional-breads');
      } else if (scrollPosition >= drinkMenusOffset && scrollPosition < desertMenusOffset) {
        setSection('drink-menus');
      } else if (scrollPosition >= desertMenusOffset) {
        setSection('desert-menus');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="menu-page-container">
      <div className="sidebar">
        <div className="sidebar-head">
          <h3 className="text-warning">Menus</h3>
        </div>
        <div className="sidebar-body">
          <h6 className={`text-muted ${section === 'starters' ? 'sidebar-tracking' : ''}`} onClick={() => scrollToSection("starters")}>Starter Menus</h6>
          <h6 className={`text-muted ${section === 'main-courses' ? 'sidebar-tracking' : ''}`} onClick={() => scrollToSection("main-courses")}>Main Courses</h6>
          <h6 className={`text-muted ${section === 'traditional-breads' ? 'sidebar-tracking' : ''}`} onClick={() => scrollToSection("traditional-breads")}>Traditional Breads</h6>
          <h6 className={`text-muted ${section === 'drink-menus' ? 'sidebar-tracking' : ''}`} onClick={() => scrollToSection("drink-menus")}>Drinks Menus</h6>
          <h6 className={`text-muted ${section === 'desert-menus' ? 'sidebar-tracking' : ''}`} onClick={() => scrollToSection("desert-menus")}>Desert</h6>
        </div>
      </div>

      <div className="menu-items">
          <div id="starters">
            <StarterMenus/>
          </div>
          <div id="main-courses">
           <MainCourses/>
          </div>
          <div id="traditional-breads">
          <TraditionalBreads/>
          </div>
          <div id="drink-menus">
           <DrinkMenu/>
          </div>
          <div id="desert-menus">
          <Deserts/>
          </div>
        </div>
    </div>
  );
}

export default AllMenu;
