import React, { useState, useEffect } from "react";
import "./EquipmentCard.css";
import EquipmentItem from "./EquipmentItem";
import IconButton from "@material-ui/core/IconButton";

function EquipmentCard(props) {
  const [equipmentList, setEquipmentList] = useState([]);
  const [isHide, setIsHide] = useState(true);
  useEffect(() => {
    fetchEquipmentData();
  }, []);

  async function fetchEquipmentData() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${props.id}/equipmentWidget.json?apiKey=a32be79753f4445d842d92a452b17e81`
    );
    const equipmentJSON = await data.json();

    setEquipmentList(equipmentJSON.equipment);
  }

  return (
    <div className="EquipmentCard">
      <div className="hide-btn-container">
        <IconButton
          style={{ color: "#cd0a0a" }}
          onClick={() => {
            setIsHide(!isHide);
          }}
        >
          hide
        </IconButton>
      </div>

      {isHide
        ? equipmentList.map((equipment, index) => {
            return (
              <EquipmentItem
                key={index}
                id={index}
                name={equipment.name}
                imgURL={equipment.image}
              />
            );
          })
        : null}
    </div>
  );
}

export default EquipmentCard;
