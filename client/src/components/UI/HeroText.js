import style from "./HeroText.module.scss";

const HeroText = (props) => {
  return <div className={style["text-container"]}>{props.children}</div>;
};

export default HeroText;
