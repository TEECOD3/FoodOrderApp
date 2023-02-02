import classes from "./cart.module.css";
import React from "react";
import Modal from "../UI/Modal";

function Cart() {
  const cartItems = [
    {
      id: "c1",
      name: "Amala",
      amount: 2,
      price: 12.99,
    },
  ];
  return (
    <Modal className={classes.modalcolor}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>38.93</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>close</button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
}

export default Cart;
