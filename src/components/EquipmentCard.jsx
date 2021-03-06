import React, { useState, useEffect } from "react";
import "./EquipmentCard.css";
import EquipmentItem from "./EquipmentItem";

function EquipmentCard(props) {
  const [equipmentList, setEquipmentList] = useState([]);
  const [isHide, setIsHide] = useState(true);
  useEffect(() => {
    async function fetchEquipmentData() {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${props.id}/equipmentWidget.json?apiKey=a32be79753f4445d842d92a452b17e81`
      );
      const equipmentJSON = await data.json();

      setEquipmentList(equipmentJSON.equipment);
    }
    fetchEquipmentData();
  }, [props.id]);

  return (
    <div className="EquipmentCard">
      <div className="hide-btn-container">
        <h4
          style={{ color: "#cd0a0a" }}
          onClick={() => {
            setIsHide(!isHide);
          }}
        >
          {isHide ? "Equipments" : "Hide"}
        </h4>
      </div>

      {!isHide
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
