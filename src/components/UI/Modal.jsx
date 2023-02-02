import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};
const ModalOverlay = ({ children, classname }) => {
  return (
    <div className={classes.modal}>
      <div className={`${classes.content} ${classname}`}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
function Modal({ children, className }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay classname={className}>{children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
