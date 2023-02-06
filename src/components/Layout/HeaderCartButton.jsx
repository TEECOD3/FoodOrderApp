import React from "react";
import CartIcon from "../Carts/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

function HeaderCartButton({ onClick }) {
  const cartContext = useContext(CartContext);

  const totalNumberOfCart = cartContext.item.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalNumberOfCart}</span>
    </button>
  );
}

export default HeaderCartButton;
