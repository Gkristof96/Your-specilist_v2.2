import style from "./Backdrop.module.scss";

const Backdrop = (props) => {
  return (
    <div className={style.backdrop} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Backdrop;
