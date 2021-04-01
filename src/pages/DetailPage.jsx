import React, { useEffect, useState } from "react";
import "./DetailPage.css";
import IngredientCard from "../components/IngredientCard";
import EquipmentCard from "../components/EquipmentCard";
import SimilarRecepieCard from "../components/SimilarRecepieCard";
import InstructionCard from "../components/InstructionCard";
import IconButton from "@material-ui/core/IconButton";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
function DetailPage({ match }) {
  /*
Main Colors:
yellow --> ffd31d
red --> ec0101

secondary colors:
yellow --> f6cd61
red --> cd0a0a

*/
  const [recepieName, setRecepieName] = useState("");
  const [recepieDescription, setRecepieDescription] = useState("");
  const [isShowSummary, setIsShowSummary] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likedRecepies, setLikedRecepies] = useState([]);

  useEffect(() => {
    async function getRecepieBacisIntro() {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${match.params.id}/summary?apiKey=a32be79753f4445d842d92a452b17e81`
      );
      const dataJSON = await data.json();
      if (dataJSON.title !== undefined) {
        setRecepieName(dataJSON.title);
      }
      if (dataJSON.summary !== undefined) {
        setRecepieDescription(dataJSON.summary);
      }
      setLikedRecepies(JSON.parse(localStorage.getItem("likedRecepies")));
      setIsLiked(likedRecepies.includes(parseInt(match.params.id)));
    }
    getRecepieBacisIntro();
  }, [match.params.id]);

  //LIKE /UNLIKE recepie
  useEffect(() => {
    setIsLiked(likedRecepies.includes(parseInt(match.params.id)));
    localStorage.setItem("likedRecepies", JSON.stringify(likedRecepies));
  }, [likedRecepies]);

  const handleLike = () => {
    setLikedRecepies((previousLikedRecepies) => {
      return [...previousLikedRecepies, parseInt(match.params.id)];
    });
  };

  const handleUnlike = () => {
    const allLikedRecepieIDs = JSON.parse(
      localStorage.getItem("likedRecepies")
    );
    const updatedLikedRecepiIDs = allLikedRecepieIDs.filter((id) => {
      return id !== parseInt(match.params.id);
    });
    setLikedRecepies(updatedLikedRecepiIDs);
  };
  //LIKE /UNLIKE recepie

  return (
    <div className="DetailPage">
      <div className="recepie-info-wrapper">
        <div className="img-title-container">
          {isShowSummary ? (
            <div className="recepie-summary-container">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<p>${recepieDescription}</p>`,
                }}
              />
              <IconButton
                style={{ color: "#ffa45b" }}
                onClick={() => {
                  setIsShowSummary(!isShowSummary);
                }}
              >
                Show Picture
              </IconButton>
            </div>
          ) : (
            <div className="img-like-container">
              <img
                src={`https://spoonacular.com/recipeImages/${match.params.id}-240x150.jpg`}
                alt="dish-pic"
              />
              <h2 className="recepie-title" style={{ color: "#a23131" }}>
                {recepieName}
              </h2>
              <div className="youtube-like-btn-container">
                <IconButton style={{ color: "#ec0101" }}>
                  <a
                    href={`https://www.youtube.com/results?search_query=how+to+make+${recepieName}`}
                    target="_blank"
                  >
                    <YouTubeIcon style={{ fontSize: "2rem" }} />
                  </a>
                </IconButton>
                <IconButton
                  style={{ color: "#ffa45b" }}
                  onClick={() => {
                    setIsShowSummary(!isShowSummary);
                  }}
                >
                  Summary
                </IconButton>
                <IconButton
                  style={{ color: "#ec0101" }}
                  onClick={() => {
                    if (isLiked) {
                      handleUnlike();
                    } else {
                      handleLike();
                    }
                  }}
                >
                  {isLiked ? (
                    <FavoriteIcon style={{ fontSize: "2rem" }} />
                  ) : (
                    <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                  )}
                </IconButton>
              </div>
            </div>
          )}
        </div>

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
