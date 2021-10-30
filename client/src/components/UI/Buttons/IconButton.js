import classes from "./IconButton.module.css";

const IconButton = (props) => {
  return (
    <div to='' className={classes["circle-btn"]} onClick={props.onClick}>
      <span className={classes["btn-text"]}>{props.buttonText}</span>
      <div className={classes["icon-wrapper"]}>{props.children}</div>
    </div>
  );
};

export default IconButton;
