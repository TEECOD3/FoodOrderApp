import React, { useReducer } from "react";
import CartContext from "./cart-context";
import CartReducerFunction from "./reducer";

const initialstate = {
  item: [],
  totalAmountItem: 0,
};
//COMPONENT FUNCTION STARTS HERE
const ContextProvider = (props) => {
  const { children } = props;
  const [cartState, DispatchCartAction] = useReducer(
    CartReducerFunction,
    initialstate
  );
  const addItemToCartHandler = (item) => {
    DispatchCartAction({ type: "ADD_MEAL_ITEM", value: item });
  };
  const removeItemFromCartHandler = (id) => {
    DispatchCartAction({ type: "REMOVE_MEAL_ITEM", value: id });
  };

  const clearcart = () => {
    DispatchCartAction({ type: "CLEAR" });
  };
  const cartContext = {
    item: cartState.item,
    totalAmountItem: cartState.totalAmountItem,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    clearcart: clearcart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default ContextProvider;
