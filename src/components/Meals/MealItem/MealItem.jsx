import React from "react";
import classes from "./MealItem.module.css";
import MealItemform from "./MealItemform";

function MealItem({ Title, price, Description }) {
  const Price = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{Title}</h3>
        <div className={classes.description}>{Description}</div>
        <div className={classes.price}>{Price}</div>
      </div>
      <div>
        <MealItemform />
      </div>
    </li>
  );
}

export default MealItem;
