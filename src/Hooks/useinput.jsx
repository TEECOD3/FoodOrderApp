import { useState } from "react";

const useInput = (validationfunc) => {
  const [enterdInput, setEnteredInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const validInput = validationfunc(enterdInput);
  const Error = !validInput && inputIsTouched;

  const valueHandler = (event) => {
    const enteredValue = event.target.value;
    setEnteredInput(enteredValue);
  };

  const onBlurHandler = (event) => {
    setInputIsTouched(true);
  };
  const reset = () => {
    setEnteredInput("");
    setInputIsTouched(false);
  };

  return {
    Error,
    valueHandler,
    onBlurHandler,
    validInput,
    enterdInput,
    reset,
  };
};

export default useInput;
