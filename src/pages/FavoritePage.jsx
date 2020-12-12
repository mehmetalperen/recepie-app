import React, { useState, useEffect } from "react";
import PreviewCard from "../components/PreviewCard";
import "./FavoritePage.css";

function FavoritePage() {
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

  const noFunctionalityFunction = (id) => {
    console.log(`hevle gube function: ${id}`);
  };
  return (
    <div className="FavoritePage">
      <div className="liked-recepie-container">
        {likedRecepies.map((dish) => {
          return (
            <PreviewCard
              key={dish}
              id={dish}
              name={"Click Here for More Detail"}
              isSearchPage={true}
              onRemove={noFunctionalityFunction}
              isLiked={likedRecepies.includes(dish)}
              onLike={handleLikeRecepies}
              onUnlike={handleUnlikeRecepies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FavoritePage;
