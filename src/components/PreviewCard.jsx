import React, { useState, useEffect } from "react";
import "./PreviewCard.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import YouTubeIcon from "@material-ui/icons/YouTube";
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
    async function fetchRecepieSummary() {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${props.id}/summary?apiKey=a32be79753f4445d842d92a452b17e81`
      );
      const itemSumJSON = await data.json();
      setRecepieSummary(itemSumJSON.summary);
    }

    fetchRecepieSummary();
  }, []);

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
        <Link to={`/DetailPage/${props.id}`} style={{ textDecoration: "none" }}>
          <img
            src={`https://spoonacular.com/recipeImages/${props.id}-312x231.jpg`}
            alt="recepie-img"
          />
        </Link>
      </div>

      <div className="recepie-detail-container">
        <Link
          to={`/DetailPage/${props.id}`}
          style={{ textDecoration: "none", color: "#a23131" }}
        >
          <h4 className="recepie-name">{props.name}</h4>
        </Link>
        <Link
          to={`/DetailPage/${props.id}`}
          style={{ textDecoration: "none", color: "#ec0101" }}
        >
          {recepieSummary === "" ? null : (
            <div
              className="summary-text-div"
              dangerouslySetInnerHTML={{ __html: `<p>${recepieSummary}</p>` }}
            />
          )}
        </Link>
      </div>
      <div className="like-unlike-btn-container">
        {props.name === "Click Here for More Detail" ? (
          <div></div>
        ) : (
          <a
            href={`https://www.youtube.com/results?search_query=how+to+make+${props.name}`}
            target="_blank"
          >
            <YouTubeIcon />
          </a>
        )}

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
          {props.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>
    </div>
  );
}

export default PreviewCard;
