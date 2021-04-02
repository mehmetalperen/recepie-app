import React, { useState, useEffect } from "react";
import "./RecepieSteps.css";
import IconButton from "@material-ui/core/IconButton";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function RecepieSteps(props) {
  const [isDone, setIsDone] = useState(false);
  const [paragraphStyle, setParagraphStyle] = useState({
    textDecoration: "none",
    color: "#56776c",
  });

  useEffect(() => {
    isDone
      ? setParagraphStyle({
          textDecoration: "line-through",
          color: "#464f41",
        })
      : setParagraphStyle({
          textDecoration: "none",
          color: "#56776c",
        });
  }, [isDone]);
  return (
    <div className="RecepieSteps">
      <h3
        className="step-number"
        style={{ color: "#56776c" }}
      >{`${props.stepNumber})`}</h3>
      <p className="instruction" style={paragraphStyle}>
        {props.stepOrder}
      </p>
      <IconButton
        style={{ color: "#56776c" }}
        onClick={() => {
          setIsDone(!isDone);
        }}
      >
        {isDone ? (
          <CheckCircleOutlineIcon style={{ color: "#56776c" }} />
        ) : (
          <RadioButtonUncheckedIcon style={{ color: "#56776c" }} />
        )}
      </IconButton>
    </div>
  );
}

export default RecepieSteps;
