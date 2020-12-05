import React, { useState } from "react";
import "./RecepieSteps.css";
import IconButton from "@material-ui/core/IconButton";

function RecepieSteps(props) {
  const [isDone, setIsDone] = useState(false);
  const [paragraphStyle, setParagraphStyle] = useState({
    textDecoration: "none",
  });
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
          isDone
            ? setParagraphStyle({
                textDecoration: "line-through",
              })
            : setParagraphStyle({
                textDecoration: "none",
              });
        }}
      >
        {paragraphStyle.textDecoration === "line-through" ? "❌" : "✅"}
      </IconButton>
    </div>
  );
}

export default RecepieSteps;
