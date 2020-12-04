import React from "react";
import "./RecepieSteps.css";
//import IconButton from "@material-ui/core/IconButton";

function RecepieSteps() {
  //props --> steps, and stepNumber
  return (
    <div className="RecepieSteps">
      <h3 className="step-number">{`${44})`}</h3>
      <p className="instruction">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum
        quae nihil earum maiores! Beatae impedit voluptas, obcaecati aspernatur
        minima, magnam odio, ratione fugiat pariatur aliquid est. Suscipit,
        ratione eos.
      </p>
      <button>X</button>
    </div>
  );
}

export default RecepieSteps;
