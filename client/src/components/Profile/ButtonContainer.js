import classes from "./ButtonContainer.module.scss";

const ButtonContainer = (props) => {
  return <div className={classes["button-container"]}>{props.children}</div>;
};

export default ButtonContainer;
