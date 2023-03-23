import classes from "./cart.module.css";
import React from "react";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import CartContext from "../../Store/cart-context";
import useHttp from "../../Hooks/use-Http";
import ClockLoader from "react-spinners/ClockLoader";

function Cart({ onHide }) {
  const [showCheckoutForm, setCheckoutForm] = useState(false);

  const { sendrequest, Error, isLoading, submitted } = useHttp();
  const cartcontext = useContext(CartContext);

  const totalAmount = `$${cartcontext.totalAmountItem.toFixed(2)}`;
  const hasItem = cartcontext.item.length > 0;

  const onRemoveHandler = (id) => {
    cartcontext.removeItemFromCart(id);
  };
  const onAddHandler = (item) => {
    cartcontext.addItemToCart({ ...item, amount: 1 });
  };

  const onaddCrtItems = (items) => {
    sendrequest({
      url: "https://foodorderapp-d2403-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      body: {
        userData: items,
        OrderedItems: cartcontext.item,
      },
    });
    cartcontext.clearcart();
  };
  const orderHandler = () => {
    setCheckoutForm(true);
  };

  const oncancelHanlder = () => {
    setCheckoutForm(false);
  };

  const availableOrder = (
    <div className="">
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
      {showCheckoutForm && hasItem && (
        <Checkout oncancel={oncancelHanlder} onaddCrtItems={onaddCrtItems} />
      )}
      {!showCheckoutForm && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={onHide}>
            close
          </button>
          {hasItem && (
            <button className={classes.button} onClick={orderHandler}>
              order
            </button>
          )}
        </div>
      )}
    </div>
  );

  const currentlysending = (
    <>
      <ClockLoader loading={isLoading} color="orange" size={120} />
      <p>food is currently being ordered</p>
    </>
  );

  const orderdeliveredContent = (
    <>
      <p>food is sucesfully ordered 🍿✨✨</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHide}>
          close
        </button>
      </div>
    </>
  );

  return (
    <Modal className={classes.modalcolor} onClick={onHide}>
      {!isLoading && !submitted && availableOrder}
      {isLoading && currentlysending}
      {submitted && orderdeliveredContent}
    </Modal>
  );
}

export default Cart;
