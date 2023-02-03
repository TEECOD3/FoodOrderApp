import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ onHide }) => {
  return <div className={classes.backdrop} onClick={onHide} />;
};
const ModalOverlay = ({ children, classname }) => {
  return (
    <div className={classes.modal}>
      <div className={`${classes.content} ${classname}`}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
function Modal({ children, className, onClick }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onHide={onClick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay classname={className}>{children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
