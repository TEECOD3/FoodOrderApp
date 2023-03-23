import classes from "./Checkout.module.css";
import useInput from "../../Hooks/useinput";

const isNotEmpty = (value) => value.trim() !== "";
const numbervalidation = (value) => value.length >= 5;
const Checkout = (props) => {
  const { onaddCrtItems } = props;
  const {
    Error: nameError,
    valueHandler: nameHandler,
    validInput: validnameInput,
    enterdInput: enteredNameInput,
    onBlurHandler: nameblurhandler,
    reset: resetname,
  } = useInput(isNotEmpty);
  const {
    Error: streetError,
    valueHandler: streetHandler,
    validInput: validstreetInput,
    enterdInput: enteredstreetInput,
    onBlurHandler: streetblurhandler,
    reset: resetstreet,
  } = useInput(isNotEmpty);
  const {
    Error: CityError,
    valueHandler: CityHandler,
    validInput: validCityInput,
    enterdInput: enteredCityInput,
    onBlurHandler: cityblurhandler,
    reset: resetcity,
  } = useInput(isNotEmpty);
  const {
    Error: postacodeError,
    valueHandler: postalcodeHandler,
    validInput: validPosterInput,
    enterdInput: enteredPostalInput,
    onBlurHandler: postcodeblurhandler,
    reset: resetpostalcode,
  } = useInput(numbervalidation);

  const confirmHandler = (event) => {
    event.preventDefault();
    if (
      !(
        validPosterInput &&
        validCityInput &&
        validstreetInput &&
        validnameInput
      )
    ) {
      return;
    }

    onaddCrtItems({
      name: enteredNameInput,
      city: enteredCityInput,
      postalCode: enteredPostalInput,
      street: enteredstreetInput,
    });

    resetcity();
    resetname();
    resetpostalcode();
    resetstreet();
  };

  const nameerrorclasses = `${classes.control} ${
    nameError ? classes.invalid : ""
  }`;

  let formisValid = false;
  if (
    validPosterInput &&
    validCityInput &&
    validstreetInput &&
    validnameInput
  ) {
    formisValid = true;
  }

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameerrorclasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          value={enteredNameInput}
          onBlur={nameblurhandler}
        />
        {nameError && (
          <p className={classes.error}>name input must not be empty</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetHandler}
          value={enteredstreetInput}
          onBlur={streetblurhandler}
        />
        {streetError && (
          <p className={classes.error}>street input must not be empty</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalcodeHandler}
          value={enteredPostalInput}
          onBlur={postcodeblurhandler}
        />
        {postacodeError && (
          <p className={classes.error}>postalcode input must not be empty</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={CityHandler}
          value={enteredCityInput}
          onBlur={cityblurhandler}
        />
        {CityError && (
          <p className={classes.error}>cityname input must not be empty</p>
        )}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.oncancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formisValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
