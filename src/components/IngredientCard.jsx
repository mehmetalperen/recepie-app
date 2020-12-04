import React from "react";
import "./IngredientCard.css";
import IngredientItem from "./IngredientItem";
//import IconButton from "@material-ui/core/IconButton";

function IngredientCard() {
  return (
    <div className="IngredientCard">
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
