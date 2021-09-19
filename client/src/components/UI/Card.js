import style from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={style.content}>
      <div
        className={`${style.container} 
          ${style[`${props.alignment}`]} 
          ${style[`${props.padding}`]}`}
      >
        {props.children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  alignment: "horizontal",
  padding: "large-padding",
};

export default Card;
