import style from "./FlatInput.module.scss";

const FlatInput = (props) => {
  return (
    <div className={`${style["flat-input"]} ${props.high && style.high}`}>
      {props.children}
      <label htmlFor="name" className={style["label-name"]}>
        <span className={style["content-name"]}>{props.placeholder}</span>
      </label>
    </div>
  );
};

export default FlatInput;
