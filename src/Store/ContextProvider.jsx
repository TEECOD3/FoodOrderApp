import React, { useReducer } from "react";
import CartContext from "./cart-context";
import CartReducerFunction from "./reducer";

const dispatchedstate = {
  item: [],
  totalAmountItem: 0,
};
//COMPONENT FUNCTION STARTS HERE
const ContextProvider = (props) => {
  const [cartState, DispatchCartAction] = useReducer(
    CartReducerFunction,
    dispatchedstate
  );
  const addItemToCartHandler = (item) => {
    DispatchCartAction({ type: "ADD_MEAL_ITEM", value: item });
  };
  const removeItemFromCartHandler = (id) => {
    DispatchCartAction({ type: "REMOVE_MEAL_ITEM", value: id });
  };

  const cartContext = {
    item: cartState.item,
    totalAmountItem: cartState.totalAmountItem,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
