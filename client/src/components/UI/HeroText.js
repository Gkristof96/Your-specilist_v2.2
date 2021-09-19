import classes from "./HeroText.module.scss";

const HeroText = (props) => {
  return <div className={classes["text-container"]}>{props.children}</div>;
};

export default HeroText;
