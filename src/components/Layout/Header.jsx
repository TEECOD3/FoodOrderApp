import React from "react";
import mealsImage from "../../../src/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header({ onShow }) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table filled with delicious meals" />
      </div>
    </React.Fragment>
  );
}

export default Header;
