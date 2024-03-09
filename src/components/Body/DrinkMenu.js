import React from "react";
import Papdichat from "../../images/papdichat.webp";
import SoftDrinks from "./SoftDrinks";
import CoffeeAndTea from "./CoffeeAndTea";
import Beverages from "./Beverages";

function DrinkMenu() {
    // const softDrinks = [
    //     {
    //       id: 401,
    //       name: "Soda Drinks",
    //       description: "Stuffed with chopped chicken and herbs",
    //       price: "$5.99",
    //       img:Papdichat
    //     },
    //     {
    //         id: 402,
    //         name: "Mango Lassi",
    //         description: "Light and fluffy Bread (Most Popular)",
    //         price: "$3.99",
    //         img:Papdichat
    //       },
    //     {
    //       id: 403,
    //       name: "Juice",
    //       description: "Light and multi-layered flasky bread with lightly butter",
    //       price: "$5.99",
    //       img:Papdichat
    //     },
     
    //   ];
    // const CoffeeAndTea = [
    //     {
    //       id: 501,
    //       name: "Ktm Cappuccino",
    //       description: "Stuffed with chopped chicken and herbs",
    //       price: "$5.99",
    //       img:Papdichat
    //     },
    //     {
    //         id: 502,
    //         name: "Langtang Latte",
    //         description: "Light and fluffy Bread (Most Popular)",
    //         price: "$3.99",
    //         img:Papdichat
    //       },
    //     {
    //       id: 503,
    //       name: "Americano",
    //       description: "Light and multi-layered flasky bread with lightly butter",
    //       price: "$5.99",
    //       img:Papdichat
    //     },
    //     {
    //       id: 504,
    //       name: "Masala Chiyā",
    //       description: "Stuffed with chopped chicken and herbs",
    //       price: "$5.99",
    //       img:Papdichat
    //     },
    //     {
    //         id: 505,
    //         name: "Himalayan Green Tea",
    //         description: "Light and fluffy Bread (Most Popular)",
    //         price: "$3.99",
    //         img:Papdichat
    //       },
    //     {
    //       id: 506,
    //       name: "Honey Lemon Tea",
    //       description: "xbwjmcn wj",
    //       price: "$5.99",
    //       img:Papdichat
    //     },
    //   ];
    // const Beverages = [
    //     {
    //       id: 601,
    //       name: "Gorkha Beer",
    //       description: "Stuffed with chopped chicken and herbs",
    //       price: "$5.99",
    //       img:Papdichat
    //     },
    //     {
    //         id: 602,
    //         name: "Khukuri Rum",
    //         description: "Light and fluffy Bread (Most Popular)",
    //         price: "$3.99",
    //         img:Papdichat
    //       },
    //     {
    //       id: 603,
    //       name: "Vodka",
    //       description: "Light and multi-layered flasky bread with lightly butter",
    //       price: "$5.99",
    //       img:Papdichat
    //     },
    //     {
    //       id: 604,
    //       name: "Nepali Whiskey",
    //       description: "Stuffed with chopped chicken and herbs",
    //       price: "$5.99",
    //       img:Papdichat
    //     },
    //   ];
      return (
        <div className="traditional-breads-menu">
          <div className="container-fluid">
            <h1 className="text-warning">Drinks Menu</h1>
          </div>

         <SoftDrinks/>

              <CoffeeAndTea/>

              <Beverages/>

             

        </div>
      );
}

export default DrinkMenu;
