import React from "react";
import "./EquipmentItem.css";
//import IconButton from "@material-ui/core/IconButton";

function EquipmentItem() {
  //<-- name, imgURL

  // img --> https://spoonacular.com/cdn/ingredients_100x100/${props.imgURL}
  return (
    <div className="EquipmentItem">
      <img
        src="https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
        alt=""
      />
      <h4 className="equipment-name">Ingredient name</h4>
    </div>
  );
}

export default EquipmentItem;
