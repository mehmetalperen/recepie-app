import React, { useState, useEffect } from "react";
import "./IngredientItem.css";
import IconButton from "@material-ui/core/IconButton";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
function IngredientItem(props) {
  const [metricAmount, setMetricAmount] = useState({ value: "", unit: "" });
  const [USamount, setUSamount] = useState({ value: "", unit: "" });
  const [isMetric, setIsMetric] = useState(true);

  useEffect(() => {
    setMetricAmount({
      unit: props.metricAmount.unit,
      value: props.metricAmount.value.toFixed(1),
    });
    setUSamount({
      unit: props.USamount.unit,
      value: props.USamount.value.toFixed(1),
    });
  }, []);

  const [isClosed, setIsClosed] = useState(false);
  const [blur, setBlur] = useState("blur(0px)");

  useEffect(() => {
    isClosed ? setBlur("blur(8px)") : setBlur("blur(0px)");
  }, [isClosed]);

  return (
    <div className="IngredientItem">
      <div className="ingredient-item-container" style={{ filter: blur }}>
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
      </div>
      <IconButton
        onClick={() => {
          setIsClosed(!isClosed);
        }}
      >
        {isClosed ? (
          <CheckCircleOutlineIcon style={{ color: "green" }} />
        ) : (
          <RadioButtonUncheckedIcon style={{ color: "#cd0a0a" }} />
        )}
      </IconButton>
    </div>
  );
}

export default IngredientItem;
