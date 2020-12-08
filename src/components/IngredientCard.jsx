import React, { useState, useEffect } from "react";
import "./IngredientCard.css";
import IngredientItem from "./IngredientItem";
//import IconButton from "@material-ui/core/IconButton";

function IngredientCard(props) {
  const [ingredientList, setIngredientList] = useState([]);
  const [isShowList, setIsShowList] = useState(false);

  useEffect(() => {
    getIngredientListData();
  }, [props.id]);

  useEffect(() => {
    if (ingredientList.length > 0) {
      setIsShowList(true);
    } else {
      setIsShowList(false);
    }
  }, [ingredientList]);

  async function getIngredientListData() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${props.id}/ingredientWidget.json?apiKey=a32be79753f4445d842d92a452b17e81`
    );
    const ingredientsJSON = await data.json();
    setIngredientList(ingredientsJSON.ingredients);
  }

  return (
    <div className="IngredientCard">
      <h3 className="total-ingredient">
        Total ingredienst: {ingredientList.length}
      </h3>
      {isShowList
        ? ingredientList.map((ingredient, index) => {
            return (
              <IngredientItem
                key={index}
                id={index}
                name={ingredient.name}
                imgURL={ingredient.image}
                metricAmount={ingredient.amount.metric}
                USamount={ingredient.amount.us}
              />
            );
          })
        : null}
    </div>
  );
}

export default IngredientCard;
