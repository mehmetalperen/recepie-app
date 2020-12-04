import React from "react";
import "./EquipmentCard.css";
import EquipmentItem from "./EquipmentItem";
//import IconButton from "@material-ui/core/IconButton";

function EquipmentCard() {
  return (
    <div className="EquipmentCard">
      <div className="hide-btn-container">
        <button>hide</button>
      </div>

      {/*make it scrollable if there is more than five ingredienst*/}
      <EquipmentItem />
      <EquipmentItem />
      <EquipmentItem />
      <EquipmentItem />
      <EquipmentItem />
    </div>
  );
}

export default EquipmentCard;
