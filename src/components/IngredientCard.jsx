import React from "react";
import "./IngredientCard.css";
import IngredientItem from "./IngredientItem";
//import IconButton from "@material-ui/core/IconButton";

function IngredientCard(s) {
  return (
    <div className="IngredientCard">
      <h3 className="total-ingredient">Total ingredienst: ##</h3>
      <IngredientItem />
      <IngredientItem />
      {/*make it scrollable if there is more than five ingredienst*/}
      <IngredientItem />
      <IngredientItem />
      <IngredientItem />
    </div>
  );
}

export default IngredientCard;
