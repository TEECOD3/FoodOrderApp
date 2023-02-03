import React from "react";
import Input from "../../UI/input";
import classes from "./MealItemform.module.css";
import { useRef, useState } from "react";

function MealItemform({ onAdditem }) {
  const [validform, SetFormValidity] = useState(true);
  const inputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmouuntToNumber = +enteredAmount;
    if (
      enteredAmouuntToNumber.trim() === 0 ||
      enteredAmouuntToNumber < 1 ||
      enteredAmouuntToNumber > 5
    ) {
      SetFormValidity(false);
      return;
    }
    onAdditem(enteredAmouuntToNumber);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label="Amount"
        ref={inputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
      {!validform && <h1>invalid input</h1>}
    </form>
  );
}

export default MealItemform;
