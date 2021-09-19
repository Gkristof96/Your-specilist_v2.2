import classes from "./ScreenHeader.module.scss";

const ScreenHeader = (props) => {
  return (
    <div className={`${classes.background} ${classes[`${props.className}`]}`}>
      {props.children}
    </div>
  );
};

export default ScreenHeader;
