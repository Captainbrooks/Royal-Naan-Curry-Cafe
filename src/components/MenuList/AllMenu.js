import React, { useState, useEffect } from "react";
import "../../styles/AllMenu.css";

import StarterMenus from "./StarterMenu/StarterMenus";
import MainCourses from "./MainCoursesMenu/MainCourses";
import TraditionalBreads from "./TraditionalBreadsMenu/TraditionalBreads";
import DrinkMenu from "./DrinksMenu/DrinkMenu";
import Deserts from "./DesertMenu/Deserts";
import SearchBar from "./SearchBar";


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
<>
  
    <div className="container-fluid border border-danger d-flex">
        <div className="container-fluid">
<div className="row">
      <div className="col-md-3 sidebar text-muted fw-bold d-none d-md-block d-flex justify-content-center">
        <div className="container text-center">
          <h3 className="text-warning fw-bold">Menus</h3>
        </div>
        <div className="container p-3 d-flex flex-column">
          <h6 className={`text-muted mb-2 fw-bold p-2 text-center ${section === 'starters' ? 'sidebar-tracking' : ''}`} onClick={() => scrollToSection("starters")}>Starter Menus</h6>
          <h6 className={`text-muted mb-2 fw-bold p-2 text-center ${section === 'main-courses' ? 'sidebar-tracking' : ''}`} onClick={() => scrollToSection("main-courses")}>Main Courses</h6>
          <h6 className={`text-muted mb-2 fw-bold p-2 text-center ${section === 'traditional-breads' ? 'sidebar-tracking' : ''}`} onClick={() => scrollToSection("traditional-breads")}>Traditional Breads</h6>
          <h6 className={`text-muted mb-2 fw-bold p-2 text-center ${section === 'drink-menus' ? 'sidebar-tracking' : ''}`} onClick={() => scrollToSection("drink-menus")}>Drinks Menus</h6>
          <h6 className={`text-muted mb-2 fw-bold p-2 text-center ${section === 'desert-menus' ? 'sidebar-tracking' : ''}`} onClick={() => scrollToSection("desert-menus")}>Desert</h6>
        </div>
      </div>

      <div className="col-md-9 mt-5  px-0 py-2">
      {/* <div className="container-xxl mb-4 custom-searchbar">
      <SearchBar/>
    </div> */}

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
        </div>
    </div>
    </>
  );
}

export default AllMenu;
