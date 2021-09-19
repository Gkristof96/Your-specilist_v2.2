import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import style from "./Form.module.scss";

const TextError = (props) => {
  return (
    <div className={style.error}>
      <BiErrorCircle className={style["error-icon"]} />
      {props.children}
    </div>
  );
};

export default TextError;
