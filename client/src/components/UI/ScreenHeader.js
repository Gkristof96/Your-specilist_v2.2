import classes from "./ScreenHeader.module.css";

const ScreenHeader = (props) => {
  return (
    <div className={`${classes.wrapper} ${classes[`${props.className}`]}`}>
      {props.children}
    </div>
  );
};

export default ScreenHeader;
