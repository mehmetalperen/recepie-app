import React, { useState, useEffect } from "react";
import "./PreviewCard.css";

/*
Main Colors:
yellow --> ffd31d
red --> ec0101

secondary colors:
yellow --> f6cd61
red --> cd0a0a

*/

function PreviewCard(props) {
  const [recepieSummary, setRecepieSummary] = useState("");

  useEffect(() => {
    fetchRecepieSummary();
  });

  async function fetchRecepieSummary() {
    const data = fetch(``);
  }

  return (
    <div className="PreviewCard">
      <div className="img-container">
        <img
          src={`https://spoonacular.com/recipeImages/${props.id}-312x231.jpg`}
          alt="recepie-img"
        />
      </div>

      <div className="recepie-detail-container">
        <h4 className="recepie-name">{props.name}</h4>
        <p className="recepie-description">{recepieSummary}</p>
      </div>
      <div className="like-unlike-btn-container">
        <button>like</button>
      </div>
    </div>
  );
}

export default PreviewCard;
