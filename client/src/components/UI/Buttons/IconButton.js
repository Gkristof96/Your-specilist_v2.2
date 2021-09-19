import style from "./IconButton.module.scss";

const IconButton = (props) => {
  return (
    <div to="" className={style["circle-btn"]} onClick={props.onClick}>
      <span className={style["btn-text"]}>{props.buttonText}</span>
      <div className={style["icon-wrapper"]}>{props.children}</div>
    </div>
  );
};

export default IconButton;
