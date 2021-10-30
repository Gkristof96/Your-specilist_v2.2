import classes from "./ScreenContent.module.css";

const ScreenContent = (props) => {
  return (
    <div className={classes.content}>
      <div
        className={`${classes.container} 
          ${classes[`${props.alignment}`]} 
          ${classes[`${props.padding}`]}`}
      >
        {props.children}
      </div>
    </div>
  );
};

ScreenContent.defaultProps = {
  alignment: "horizontal",
  padding: "large-padding",
};

export default ScreenContent;
