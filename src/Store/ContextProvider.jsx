import React, { useReducer } from "react";
import CartContext from "./cart-context";

const dispatchedstate = {
  item: [],
  amountItem: 0,
};

const cartReducerFunction = (state, action) => {
  return dispatchedstate;
};

const ContextProvider = (props) => {
  const [cartState, DispatchCartAction] = useReducer(
    cartReducerFunction,
    dispatchedstate
  );
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const cartContext = {
    item: cartState.item,
    amountItem: cartState.amountItem,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
