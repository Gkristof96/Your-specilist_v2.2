import classes from "./Loader.module.css";

const Loader = (props) => {
  return (
    <div
      className={`${classes["loader-container"]} ${classes[`${props.size}`]}`}
    >
      <img
        src='/images/loader.webp'
        alt='loader'
        className={classes[`${props.size}`]}
      />
    </div>
  );
};

Loader.defaultProps = {
  size: "small",
};

export default Loader;
