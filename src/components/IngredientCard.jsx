import React from "react";
import "./IngredientCard.css";
import IngredientItem from "./IngredientItem";
//import IconButton from "@material-ui/core/IconButton";

function IngredientCard() {
  return (
    <div className="IngredientCard">
      <IngredientItem />
      <IngredientItem />
      {/* if there are more than 5 ingredient, then display the first 5, and hide the rest.
only show the rest, if the user clicks on "show more" */}
      <IngredientItem />
      <IngredientItem />
      <IngredientItem />
    </div>
  );
}

export default IngredientCard;
