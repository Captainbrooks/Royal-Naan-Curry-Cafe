import React, { useEffect } from "react";

import "../../styles/AllMenu.css";
import samosa from "../../images/samosa.webp";
import pakauras from "../../images/pakoras.webp";
import tandoori from "../../images/tandori.webp";
import chickentikka from "../../images/chickentikka.webp";
import pannertikka from "../../images/paneertikka.webp";
import alutikki from "../../images/alutikki.webp";
import Papdichat from "../../images/papdichat.webp";
import useFetchMainCourses from "../../Hook/useFetchMainCourses";
import VegMainCourses from "./VegMainCourses";
import ChickenMainCourses from "./ChickenMainCourses";
import MuttonMainCourses from "./MuttonMainCourses";


function MainCourses() {




  // const VegMainCourses = [
  //   {
  //     id: 101,
  //     name: "Palak Paneer",
  //     img: samosa,
  //     price: "3.99 per 4 pcs",
  //     description: "Flaky pastry with spiced potato filling",
  //   },
  //   {
  //     id: 102,
  //     name: "Alu Gobi",
  //     img: pakauras,
  //     price: "3.99 per 4 pcs",
  //     description: "Crunchy chickpea-flour coated vegetable",
  //   },
  //   {
  //     id: 103,
  //     name: "Paneer Tikka Masala",
  //     img: tandoori,
  //     price: "7.99 per 2 pcs",
  //     description: "Tender, smoky chicken from traditional",
  //   },
  //   {
  //     id: 104,
  //     name: "Mutter Paneer",
  //     img: chickentikka,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices",
  //   },
  //   {
  //     id: 105,
  //     name: "Chana Masala",
  //     img: pannertikka,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 106,
  //     name: "Shahi Paneer",
  //     img: alutikki,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 107,
  //     name: "Veg Mo:mo",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 108,
  //     name: "Mix Vegetable Curry",
  //     img: alutikki,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 109,
  //     name: "Saag Aloo",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  // ];



  //chicken momo, butter chicken, chicken biryani, mutton biryani, sekuwa, kadai chicken, chicken korma, chicken curry, anda curry

  // const ChickenMainCourses = [
  //   {
  //     id: 201,
  //     name: "Chicken Mo:mo",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 202,
  //     name: "Butter Chicken",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 203,
  //     name: "Chicken Biryani",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 204,
  //     name: "Chicken Sekuwa",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 205,
  //     name: "Kadai Chicken",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 206,
  //     name: "Chicken Korma",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 207,
  //     name: "Chicken Curry",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 208,
  //     name: "Chicken Tikka Masala",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //     id: 209,
  //     name: "Chilly Chicken",
  //     img: Papdichat,
  //     price: "3.99 per 4 pcs",
  //     description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  // ];




  // const MuttonMainCourses=[
  //   {
  //       id: 301,
  //       name: "Mutton Mo:mo",
  //       img: Papdichat,
  //       price: "3.99 per 4 pcs",
  //       description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //       id: 301,
  //       name: "Mutton Curry",
  //       img: Papdichat,
  //       price: "3.99 per 4 pcs",
  //       description: "Juicy, grilled chicken with aromatic spices.",
  //   },
  //   {
  //       id: 301,
  //       name: "Mutton Biryani",
  //       img: Papdichat,
  //       price: "3.99 per 4 pcs",
  //       description: "Juicy, grilled chicken with aromatic spices.",
  //   }
  // ]


  return (
    <div className="main-courses">
      <div className="container-fluid">
        <h1 className="text-warning">Main Courses</h1>
      </div>



     <VegMainCourses/>

        {/* Chicken main courses */}

       <ChickenMainCourses/>

       {/* Mutton main courses */}

       <MuttonMainCourses/>

      
   
    </div>
  );
}

export default MainCourses;
