import classes from "./cart.module.css";
import React from "react";

function cart() {
  const cartItems = [
    {
      id: "c1",
      name: "shsishi",
      amount: 2,
      price: 12.99,
    },
  ];
  return (
    <div>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>38.93</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>close</button>
        <button className={classes.button}>order</button>
      </div>
    </div>
  );
}

export default cart;
