import style from "./RoundedInput.module.scss";
import { AiOutlineInfoCircle } from "react-icons/ai";

const RoundedInput = (props) => {
  return (
    <label className={style["input-group"]}>
      <div className={style.label}>
        {props.placeholder}
        {props.icon && <AiOutlineInfoCircle className={style.icon} />}
      </div>
      {props.children}
    </label>
  );
};

RoundedInput.defaultProps = {
  icon: false,
};

export default RoundedInput;
