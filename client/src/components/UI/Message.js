import classes from "./Message.module.scss";

const Message = (props) => {
  return (
    <div className={`${classes["message-container"]} ${classes[`${props.type}`]}`}>
      <span className={`${classes[`${props.type}`]} ${classes[`${props.margin}`]}`}>
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
