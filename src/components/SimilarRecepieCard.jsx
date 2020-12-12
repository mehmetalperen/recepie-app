import React, { useEffect, useState } from "react";
import "./SimilarRecepieCard.css";
import PreviewCard from "./PreviewCard";
//import IconButton from "@material-ui/core/IconButton";

function SimilarRecepieCard(props) {
  const [similarRecepieList, setSimilarRecepieList] = useState([]);
  const [likedRecepies, setLikedRecepies] = useState([]);

  useEffect(() => {
    const likedRecepiesString = localStorage.getItem("likedRecepies");
    if (likedRecepiesString) {
      const likedRecepies = JSON.parse(likedRecepiesString);
      setLikedRecepies(likedRecepies);
    } else {
      localStorage.setItem("likedRecepies", "[]");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedRecepies", JSON.stringify(likedRecepies));
  }, [likedRecepies]);

  const handleLikeRecepies = (id) => {
    setLikedRecepies((previousLikedRecepies) => {
      return [...previousLikedRecepies, id];
    });
  };

  const handleUnlikeRecepies = (id) => {
    setLikedRecepies((previousLikedRecepies) => {
      return previousLikedRecepies.filter((recepieID) => recepieID !== id);
    });
  };

  useEffect(() => {
    async function getSimilarRecepies() {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${props.id}/similar?apiKey=a32be79753f4445d842d92a452b17e81`
      );
      const JSONdata = await data.json();
      setSimilarRecepieList(JSONdata);
    }
    getSimilarRecepies();
  }, [props.id]);

  const handleRemoveRecepie = (id) => {
    setSimilarRecepieList((allRecepies) => {
      return allRecepies.filter((recepieInfo) => {
        return recepieInfo.id !== id;
      });
    });
  };
  return (
    <div className="SimilarRecepieCard">
      <h2 className="similar-recepi-title">Recepies you might like</h2>
      {similarRecepieList.map((recepiInfo) => {
        return (
          <PreviewCard
            key={recepiInfo.id}
            id={recepiInfo.id}
            name={recepiInfo.title}
            isSearchPage={false}
            onRemove={handleRemoveRecepie}
            isLiked={likedRecepies.includes(recepiInfo.id)}
            onLike={handleLikeRecepies}
            onUnlike={handleUnlikeRecepies}
          />
        );
      })}
    </div>
  );
}

export default SimilarRecepieCard;
