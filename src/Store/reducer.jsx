const initialstate = {
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
    } else {
      updatedItems = state.item.concat(action.value);
    }
    const updatedAmountOfItem =
      state.totalAmountItem + action.value.amount * action.value.price;

    return {
      item: updatedItems,
      totalAmountItem: updatedAmountOfItem,
    };
  }

  if (action.type === "REMOVE_MEAL_ITEM") {
    const existingItemIndex = state.item.findIndex(
      (item) => item.id === action.value
    );
    const existingItem = state.item[existingItemIndex];
    const updatedTotalAmount = state.totalAmountItem - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.item.filter((item) => item.id !== action.value);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.item];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      item: updatedItems,
      totalAmountItem: updatedTotalAmount,
    };
  }

  return initialstate;
};

export default CartReducerFunction;
