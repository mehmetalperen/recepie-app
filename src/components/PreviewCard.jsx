import React, { useState, useEffect } from "react";
import "./PreviewCard.css";
import { Link } from "react-router-dom";

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
  }, []);

  async function fetchRecepieSummary() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${props.id}/summary?apiKey=a32be79753f4445d842d92a452b17e81`
    );
    const itemSumJSON = await data.json();
    setRecepieSummary(itemSumJSON.summary);
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
        <Link
          to={`/DetailPage/${props.id}`}
          style={{ textDecoration: "none", color: "#ec0101" }}
        >
          <h4 className="recepie-name">{props.name}</h4>
        </Link>
        <Link
          to={`/DetailPage/${props.id}`}
          style={{ textDecoration: "none", color: "#ec0101" }}
        >
          <p className="recepie-description">{recepieSummary}</p>
        </Link>
      </div>
      <div className="like-unlike-btn-container">
        <button>like</button>
      </div>
    </div>
  );
}

export default PreviewCard;
