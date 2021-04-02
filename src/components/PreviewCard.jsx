import React, { useState, useEffect } from "react";
import "./PreviewCard.css";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import YouTubeIcon from "@material-ui/icons/YouTube";
/*

*/

function PreviewCard(props) {
  const [recepieSummary, setRecepieSummary] = useState("");

  useEffect(() => {
    //on page load
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
            style={{ color: "#5b8a72" }}
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
          style={{ textDecoration: "none", color: "#464f41" }}
        >
          <h4 className="recepie-name">{props.name}</h4>
        </Link>
        <Link
          to={`/DetailPage/${props.id}`}
          style={{ textDecoration: "none", color: "#5b8a72" }}
        >
          {recepieSummary === "" ? null : (
            <div
              className="summary-text-div"
              dangerouslySetInnerHTML={{
                __html: `<p style="color: #5b8a72">${recepieSummary}</p>`,
              }}
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
            <YouTubeIcon style={{ color: "#5b8a72" }} />
          </a>
        )}

        <IconButton
          style={{ color: "#5b8a72" }}
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
