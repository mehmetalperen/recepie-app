import React, { useState, useEffect } from "react";
import "./InstructionCard.css";
import RecepieSteps from "./RecepieSteps";
//import IconButton from "@material-ui/core/IconButton";

function InstructionCard(props) {
  const [recepieStepsList, setRecepieStepsList] = useState([]);
  useEffect(() => {
    async function fetchSummaryData() {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${props.id}/analyzedInstructions?apiKey=a32be79753f4445d842d92a452b17e81`
      );
      const stepsJSON = await data.json();
      if (stepsJSON.length > 0) {
        setRecepieStepsList(stepsJSON[0].steps);
      }
    }
    fetchSummaryData();
  }, [props.id]);

  return (
    <div className="InstructionCard">
      {recepieStepsList.length > 0 ? (
        <h1 style={{ color: "#464f41" }} className="total-steps">
          Total steps: {recepieStepsList.length}
        </h1>
      ) : (
        <h1 style={{ color: "#464f41" }}>NO INSTRUCTIONS FOR THIS RECEPIE</h1>
      )}

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
