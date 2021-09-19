import classes from "./Modal.module.scss";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
