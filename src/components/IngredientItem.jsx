import React from "react";
import "./IngredientItem.css";
//import IconButton from "@material-ui/core/IconButton";

function IngredientItem() {
  //<-- id, name, metric and US unit, imgURL

  // img --> https://spoonacular.com/cdn/ingredients_100x100/${props.imgURL}
  return (
    <div className="IngredientItem">
      <img
        src="https://spoonacular.com/cdn/ingredients_100x100/almonds.jpg"
        alt=""
      />
      <h4 className="item-name">Ingredient name</h4>
      <button>unit</button>
      <button>X</button>
    </div>
  );
}

export default IngredientItem;
