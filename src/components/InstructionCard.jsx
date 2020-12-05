import React, { useState, useEffect } from "react";
import "./InstructionCard.css";
import RecepieSteps from "./RecepieSteps";
//import IconButton from "@material-ui/core/IconButton";

function InstructionCard(props) {
  const [recepieStepsList, setRecepieStepsList] = useState([]);
  useEffect(() => {
    fetchSummaryData();
  }, []);

  async function fetchSummaryData() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${props.id}/analyzedInstructions?apiKey=a32be79753f4445d842d92a452b17e81`
    );
    const stepsJSON = await data.json();
    setRecepieStepsList(stepsJSON[0].steps);
  }

  return (
    <div className="InstructionCard">
      <h1 className="total-steps">Total steps: {recepieStepsList.length}</h1>
      {recepieStepsList.length > 0
        ? recepieStepsList.map((stepInfo, index) => {
            return (
              <RecepieSteps
                key={index}
                stepOrder={stepInfo.step}
                stepNumber={stepInfo.number}
              />
            );
          })
        : null}
    </div>
  );
}

export default InstructionCard;
