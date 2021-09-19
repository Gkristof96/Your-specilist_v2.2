import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      type={props.type || "button"}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
