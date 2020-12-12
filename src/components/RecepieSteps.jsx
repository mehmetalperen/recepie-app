import React, { useState, useEffect } from "react";
import "./RecepieSteps.css";
import IconButton from "@material-ui/core/IconButton";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function RecepieSteps(props) {
  const [isDone, setIsDone] = useState(false);
  const [paragraphStyle, setParagraphStyle] = useState({
    textDecoration: "none",
  });

  useEffect(() => {
    isDone
      ? setParagraphStyle({
          textDecoration: "line-through",
        })
      : setParagraphStyle({
          textDecoration: "none",
        });
  }, [isDone]);
  return (
    <div className="RecepieSteps">
      <h3 className="step-number">{`${props.stepNumber})`}</h3>
      <p className="instruction" style={paragraphStyle}>
        {props.stepOrder}
      </p>
      <IconButton
        style={{ color: "#cd0a0a" }}
        onClick={() => {
          setIsDone(!isDone);
        }}
      >
        {isDone ? (
          <CheckCircleOutlineIcon style={{ color: "green" }} />
        ) : (
          <RadioButtonUncheckedIcon style={{ color: "#cd0a0a" }} />
        )}
      </IconButton>
    </div>
  );
}

export default RecepieSteps;
