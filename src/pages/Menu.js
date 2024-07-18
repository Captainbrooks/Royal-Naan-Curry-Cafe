import React, { useEffect, useState } from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import AllMenu from "../components/MenuList/AllMenu";
import SearchBar from "../components/MenuList/SearchBar";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from "../store/features/cartSlice";
import notfound from "../images/notfound.avif"



import "../styles/AllMenu.css";

import StarterMenus from "../components/MenuList/StarterMenu/StarterMenus";
import MainCourses from "../components/MenuList/MainCoursesMenu/MainCourses";
import TraditionalBreads from "../components/MenuList/TraditionalBreadsMenu/TraditionalBreads";
import DrinkMenu from "../components/MenuList/DrinksMenu/DrinkMenu";
import Deserts from "../components/MenuList/DesertMenu/Deserts";
import { AddToCartArray } from '../store/features/cartSlice';



function Menu() {


  const [section, setSection] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const [search, setSearch] = useState();

  const dispatch = useDispatch();


  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Adjust this according to your actual navbar class

    if (sectionElement) {
      const sectionPosition = sectionElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {

    if (!search) {


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

    }

  }, [search]);





  const cart = useSelector(selectCart);
  const totalNumberOfItems = cart.reduce((total, item) => total + item.quantity, 0);


  useEffect(() => {
    const fixedContainer = document.querySelector('.fixed-container');
    const footer = document.querySelector('.footer');

    const handleScroll = () => {
      if (!search && footer.getBoundingClientRect().top <= window.innerHeight) {

        fixedContainer.style.display = 'none';

      } else {

        fixedContainer.style.display = 'block';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [search]);


  useEffect(() => {
    const handleSearch = async () => {


      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/fooditem/getfoods/search?term=` + search, {
        method: "GET"
      });

      if (response.ok) {
        const data = await response.json();
        setSearchResult(data);
      }

      if (!response.ok) {
        const json = await response.json();
        setSearchResult("Not found")
      }

    }

    handleSearch();
  }, [search])


  return (
    <>

      <Navbar />







      <div className="menu-page">



        <div className="search-bar">



          <div className="container-fluid fixed-container px-2">


            <div className="row mt-3">
              <div className="col-9 col-sm-8 col-md-6">
                <form>
                  <div className="search">
                    <span className="search-icon material-symbols-outlined">Search</span>
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} className="search-input" placeholder="Search" />
                  </div>
                </form>
              </div>


              <div className="col-3 col-sm-4 col-md-6 d-flex justify-content-center align-items-center">
                <div className="cart-logo">
                  {
                    (<Link to="/cart"><div className="d-flex justify-content-center rounded-circle bg-secondary text-white"> {totalNumberOfItems}</div><FaShoppingCart color="orange" size="2em" />
                    </Link>)
                  }
                </div>
              </div>
            </div>


          </div>

        </div>




        <div className="menu-page-body">
          <div className="container-fluid ">

            <div className="container-fluid">
              <div className="row">
                {!search && (
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
                )}


                <div className={`col-md-${search ? '12' : '9'} px-0 py-2 menu-items`}>

                  {

                    search ? (

                      <div className="container-fluid">
                        <div className="container my-5">
                          {
                            searchResult && searchResult.length > 0 && <h4 className="text-muted text-start text-md-center fw-bold">{searchResult.length} Matching Founds</h4>
                          }

                        </div>

                        <div className="container-xl d-flex flex-wrap justify-content-center">
                          {searchResult && searchResult.length > 0 ? (

                            searchResult.map((s) => (

                              <div className="col-sm-12 col-md-6 col-lg-4 custom-eachfood p-2" key={s.id}>
                                <div className="card custom-card" style={{ width: "18rem" }}>
                                  <img className="card-img-top" src={s.imgUrl} alt="s item" height={"200rem"} style={{ borderRadius: "50%" }} />
                                  <div className="card-body text-center">
                                    <h3 className="card-title text-warning">{s.name}</h3>
                                    <span className="text-muted">${s.price}</span>
                                    <p className="card-text text-dark">{s.description}</p>

                                    <Link to="/order-online">
                                      <button className="text-dark btn btn-warning" onClick={() => dispatch(AddToCartArray(s))} style={{ borderRadius: "20px" }}>Order Now</button>
                                    </Link>

                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="container d-flex flex-column justify-content-center align-items-center">

                              <img className="img-fluid p-0" src={notfound} alt="Not Found" width={"20%"} />
                              <div className="container">
                                <p className="text-muted h5 my-3  text-center fw-bold">Sorry, We couldn't find any result for "<strong className="text-danger">{search}</strong>"</p>
                              </div>

                            </div>
                          )}
                        </div>
                      </div>

                    ) :

                      (<div className="list">
                        <div id="starters">
                          <StarterMenus />
                        </div>
                        <div id="main-courses">
                          <MainCourses />
                        </div>
                        <div id="traditional-breads">
                          <TraditionalBreads />
                        </div>
                        <div id="drink-menus">
                          <DrinkMenu />
                        </div>
                        <div id="desert-menus">
                          <Deserts />
                        </div>
                      </div>
                      )


                  }
                </div>




              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Menu;
