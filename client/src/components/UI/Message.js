import style from "./Message.module.scss";

const Message = (props) => {
  return (
    <div className={`${style["message-container"]} ${style[`${props.type}`]}`}>
      <span className={`${style[`${props.type}`]} ${style[`${props.margin}`]}`}>
        {props.message}
        {props.children}
      </span>
    </div>
  );
};

Message.defaultProps = {
  type: "standard",
  margin: "small",
};

export default Message;
