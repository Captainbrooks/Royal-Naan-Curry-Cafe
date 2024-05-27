import React , {useEffect} from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import AllMenu from "../components/MenuList/AllMenu";
import SearchBar from "../components/MenuList/SearchBar";
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from "../store/features/cartSlice";




function Menu() {

  const cart=useSelector(selectCart);
  const totalNumberOfItems = cart.reduce((total, item) => total + item.quantity, 0);


  useEffect(() => {
    const fixedContainer = document.querySelector('.fixed-container');
    const footer = document.querySelector('.footer');

    const handleScroll = () => {
      if (footer.getBoundingClientRect().top <= window.innerHeight) {
        fixedContainer.style.display = 'none';
      } else {
        fixedContainer.style.display = 'block';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
    <input type="search" className="search-input" placeholder="Search" />

  </div>
</form>
</div>
    

<div className="col-3 col-sm-4 col-md-6 d-flex justify-content-center align-items-center">
<div className="cart-logo">
          {
             (<Link to="/cart"><div className="d-flex justify-content-center rounded-circle bg-secondary text-white"> {totalNumberOfItems}</div><FaShoppingCart  color="orange" size="2em"/>
           </Link>)
          }
        </div>
</div>
</div>


</div>











</div>
      
      <div className="menu-page-body">
      <AllMenu/>
      </div>
    </div>
<div className="footer">
    <Footer />
    </div>
    </>
  );
}

export default Menu;
