const dispatchedstate = {
  item: [],
  totalAmountItem: 0,
};

const CartReducerFunction = (state, action) => {
  if (action.type === "ADD_MEAL_ITEM") {
    const existingItemIndex = state.item.findIndex(
      (item) => item.id === action.value.id
    );
    const existingCartItem = state.item[existingItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.value.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingItemIndex] = updatedItem;
      console.log(updatedItems);
    } else {
      updatedItems = state.item.concat(action.value);
    }
    const updatedAmountOfItem =
      state.totalAmountItem + action.value.amount * action.value.price;
    console.log(updatedAmountOfItem);
    return {
      item: updatedItems,
      totalAmountItem: updatedAmountOfItem,
    };
  }

  if (action.type === "REMOVE_MEAL_ITEM") {
    const updatedItems = state.item.filter(
      (item) => item.id !== action.value.id
    );
    const updatedAmountOfItem =
      state.totalAmountItem + action.value.amount * action.value.price;
    return {
      item: updatedItems,
      totalAmountItem: updatedAmountOfItem,
    };
  }
  return dispatchedstate;
};

export default CartReducerFunction;
