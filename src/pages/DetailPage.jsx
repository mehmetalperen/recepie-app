import React from "react";
import "./DetailPage.css";
import IngredientCard from "../components/IngredientCard";
import EquipmentCard from "../components/EquipmentCard";
import SimilarRecepieCard from "../components/SimilarRecepieCard";
import InstructionCard from "../components/InstructionCard";

function DetailPage({ match }) {
  //match.params.id
  return (
    <div className="DetailPage">
      <div className="recepie-info-wrapper">
        <img
          src={`https://spoonacular.com/recipeImages/${match.params.id}-240x150.jpg`}
          alt="dish-pic"
        />
        <div className="required-items-container">
          <IngredientCard id={match.params.id} />
          <EquipmentCard id={match.params.id} />
        </div>
      </div>

      <div className="instructions-wrapper">
        <InstructionCard id={match.params.id} />
      </div>

      <div className="similar-recepie-wrapper">
        <SimilarRecepieCard id={match.params.id} />
      </div>
    </div>
  );
}

export default DetailPage;
