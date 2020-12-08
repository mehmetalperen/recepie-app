import React, { useState, useEffect } from "react";
import "./PreviewCard.css";
import { Link } from "react-router-dom";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
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
    //i don't like the format of summary. there are html elements displaying in the UI. need to fix it
  }

  return (
    <div className="PreviewCard">
      {props.isSearchPage ? null : (
        <div style={{ textAlign: "right" }}>
          <IconButton
            style={{ color: "#ec0101" }}
            onClick={() => {
              props.onRemove(props.id);
            }}
          >
            <HighlightOffIcon />
          </IconButton>
        </div>
      )}

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
        <IconButton
          style={{ color: "#ec0101" }}
          onClick={() => {
            if (!props.isLiked) {
              props.onLike(props.id);
            } else {
              props.onUnlike(props.id);
            }
          }}
        >
          {props.isLiked ? <ThumbDownIcon /> : <ThumbUpAltIcon />}
        </IconButton>
      </div>
    </div>
  );
}

export default PreviewCard;
