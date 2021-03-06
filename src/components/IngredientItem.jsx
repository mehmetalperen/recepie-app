import React, { useState, useEffect } from "react";
import "./IngredientItem.css";
import IconButton from "@material-ui/core/IconButton";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function IngredientItem(props) {
  const [metricAmount] = useState({
    unit: props.metricAmount.unit,
    value: props.metricAmount.value.toFixed(1),
  });
  const [USamount] = useState({
    unit: props.USamount.unit,
    value: props.USamount.value.toFixed(1),
  });
  const [isMetric, setIsMetric] = useState(true);

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
          style={{ color: "#5b8a72", textDecoration: "underline" }}
          onClick={() => {
            USamount.unit === metricAmount.unit
              ? alert(`Only one unit is avaible for this item`)
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
          <CheckCircleOutlineIcon style={{ color: "#5b8a72" }} />
        ) : (
          <RadioButtonUncheckedIcon style={{ color: "#5b8a72" }} />
        )}
      </IconButton>
    </div>
  );
}

export default IngredientItem;
