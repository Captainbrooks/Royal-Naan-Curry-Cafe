import React from "react";

import SoftDrinks from "./SoftDrinks";
import CoffeeAndTea from "./CoffeeAndTea";
import Beverages from "./Beverages";

function DrinkMenu() {

      return (
        <div className="container-xl">
        <div className="container-fluid p-1 mb-2 text-start  text-md-center">
          <h1 className="text-warning fw-bold fs-2">Drinks</h1>
        </div>

         <SoftDrinks/>

              <CoffeeAndTea/>

              <Beverages/>

             

        </div>
      );
}

export default DrinkMenu;
