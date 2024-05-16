import React from "react";

import SoftDrinks from "./SoftDrinks";
import CoffeeAndTea from "./CoffeeAndTea";
import Beverages from "./Beverages";

function DrinkMenu() {

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
