import React from "react";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Carts/Cart";
import ContextProvider from "./Store/ContextProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const cartshownHandler = () => {
    setCartShown(true);
  };

  const cartHideHandler = () => {
    setCartShown(false);
  };

  return (
    <ContextProvider>
      {cartShown && <Cart onHide={cartHideHandler} />}
      <Header onShow={cartshownHandler} />
      <main>
        <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;
