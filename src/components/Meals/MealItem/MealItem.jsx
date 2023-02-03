import React from "react";
import classes from "./MealItem.module.css";
import MealItemform from "./MealItemform";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";

function MealItem({ Title, price, Description, id }) {
  const cartctx = useContext(CartContext);

  const onAddAmountItemHandler = (amount) => {
    cartctx.addItem({
      amount: amount,
      price: price,
      name: Title,
      id: id,
    });
  };
  const Price = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{Title}</h3>
        <div className={classes.description}>{Description}</div>
        <div className={classes.price}>{Price}</div>
      </div>
      <div>
        <MealItemform onAdditem={onAddAmountItemHandler} />
      </div>
    </li>
  );
}

export default MealItem;
