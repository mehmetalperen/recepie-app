import React from "react";
import "./DetailPage.css";
import IngredientCard from "../components/IngredientCard";
import EquipmentCard from "../components/EquipmentCard";
import SimilarRecepieCard from "../components/SimilarRecepieCard";
import InstructionCard from "../components/InstructionCard";
function DetailPage() {
  return (
    <div className="DetailPage">
      <div className="recepie-info-wrapper">
        <img
          src={`https://spoonacular.com/recipeImages/${209128}-240x150.jpg`}
          alt="dish-pic"
        />
        <IngredientCard />
        <EquipmentCard />
      </div>

      <div className="instructions-wrapper">
        <InstructionCard />
      </div>

      <div className="similar-recepie-wrapper">
        <SimilarRecepieCard />
      </div>
    </div>
  );
}

export default DetailPage;
