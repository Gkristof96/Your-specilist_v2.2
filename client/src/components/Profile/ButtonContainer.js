import style from "./ButtonContainer.module.scss";

const ButtonContainer = (props) => {
  return <div className={style["button-container"]}>{props.children}</div>;
};

export default ButtonContainer;
