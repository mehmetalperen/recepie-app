import React, { useState, useEffect } from "react";
import "./IngredientItem.css";
import IconButton from "@material-ui/core/IconButton";

function IngredientItem(props) {
  const [metricAmount, setMetricAmount] = useState({ value: "", unit: "" });
  const [USamount, setUSamount] = useState({ value: "", unit: "" });
  const [isMetric, setIsMetric] = useState(true);

  useEffect(() => {
    setMetricAmount(props.metricAmount);
    setUSamount(props.USamount);
  }, []);

  const [isClosed, setIsClosed] = useState(false);
  const [blur, setBlur] = useState("blur(0px)");

  return (
    <div className="IngredientItem" style={{ filter: blur }}>
      {props.imgURL !== "no.jpg" ? (
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${props.imgURL}`}
          alt="ingredient-img"
        />
      ) : null}
      <h4 className="item-name">{props.name}</h4>
      <IconButton
        style={{ color: "#f6cd61" }}
        onClick={() => {
          USamount.unit === metricAmount.unit
            ? alert(`Can't change the unit for this item`)
            : setIsMetric(!isMetric);
        }}
      >
        {isMetric
          ? `${metricAmount.value}/${metricAmount.unit}`
          : `${USamount.value}/${USamount.unit}`}
      </IconButton>
      <IconButton
        style={{ color: "#cd0a0a" }}
        onClick={() => {
          setIsClosed(!isClosed);
          isClosed ? setBlur("blur(8px)") : setBlur("blur(0px)");
        }}
      >
        {blur === "blur(0px)" ? "✅" : "❌"}
      </IconButton>
    </div>
  );
}

export default IngredientItem;
