import classes from "./cart.module.css";
import React from "react";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../Store/cart-context";

function Cart({ onHide }) {
  const cartcontext = useContext(CartContext);

  const totalAmount = `$${cartcontext.totalAmountItem.toFixed(2)}`;
  const hasItem = cartcontext.item.length > 0;

  const onRemoveHandler = (id) => {
    cartcontext.removeItemFromCart(id);
  };
  const onAddHandler = (item) => {
    cartcontext.addItemToCart({ ...item, amount: 1 });
  };

  return (
    <Modal className={classes.modalcolor} onClick={onHide}>
      <ul className={classes["cart-items"]}>
        {cartcontext.item.map((item) => (
          <CartItem
            onRemove={onRemoveHandler.bind(null, item.id)}
            onAdd={onAddHandler.bind(null, item)}
            name={item.name}
            amount={item.amount}
            price={item.price}
            key={item.id}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHide}>
          close
        </button>
        {hasItem && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
