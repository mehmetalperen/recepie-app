import React, { useEffect, useState } from "react";
import "./SimilarRecepieCard.css";
import PreviewCard from "./PreviewCard";
//import IconButton from "@material-ui/core/IconButton";

function SimilarRecepieCard(props) {
  const [similarRecepieList, setSimilarRecepieList] = useState([]);

  useEffect(() => {
    getSimilarRecepies();
  }, [props.id]);

  async function getSimilarRecepies() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${props.id}/similar?apiKey=a32be79753f4445d842d92a452b17e81`
    );
    const JSONdata = await data.json();
    setSimilarRecepieList(JSONdata);
  }

  return (
    <div className="SimilarRecepieCard">
      {similarRecepieList.map((recepiInfo) => {
        return (
          <PreviewCard
            key={recepiInfo.id}
            id={recepiInfo.id}
            name={recepiInfo.title}
            isSearchPage={false}
          />
        );
      })}
    </div>
  );
}

export default SimilarRecepieCard;
