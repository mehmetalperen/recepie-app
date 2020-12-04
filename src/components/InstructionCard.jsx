import React from "react";
import "./InstructionCard.css";
import RecepieSteps from "./RecepieSteps";
//import IconButton from "@material-ui/core/IconButton";

function InstructionCard() {
  return (
    <div className="InstructionCard">
      <h1 className="total-steps">Total steps: ##</h1>
      <RecepieSteps />
      <RecepieSteps />
      <RecepieSteps />
      <RecepieSteps />
      <RecepieSteps />
      <RecepieSteps />
      <RecepieSteps />
      <RecepieSteps />
    </div>
  );
}

export default InstructionCard;
