import style from "./ErrorModal.module.scss";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import { VscChromeClose } from "react-icons/vsc";

const Backdrop = (props) => {
  const handleClose = () => {
    props.onClose();
  };
  return <div className={style.backdrop} onClick={handleClose} />;
};

const ModalOverlay = (props) => {
  const handleClose = () => {
    props.onClose();
  };
  return (
    <div className={style.modal}>
      {props.children}
      <VscChromeClose className={style.icon} onClick={handleClose} />
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
