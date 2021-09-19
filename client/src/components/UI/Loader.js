import style from "./Loader.module.scss";

const Loader = (props) => {
  return (
    <div className={`${style["loader-container"]} ${style[`${props.size}`]}`}>
      <img
        src="/images/loader.webp"
        alt="loader"
        className={style[`${props.size}`]}
      />
    </div>
  );
};

Loader.defaultProps = {
  size: "small",
};

export default Loader;
