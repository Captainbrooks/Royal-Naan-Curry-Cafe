import React , {useEffect} from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import AllMenu from "../components/MenuList/AllMenu";
import SearchBar from "../components/MenuList/SearchBar";



function Menu() {
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


    <div className="fixed-container">

      <div className="container-fluid border d-flex h-75 justify-content-center align-items-center">
<input type="search" name="" id="" />

<div className="cart d-flex align-items-center border">
  <p>cart</p>
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
