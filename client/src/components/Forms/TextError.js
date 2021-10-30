import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import classes from "./Form.module.css";

const TextError = (props) => {
  return (
    <div className={classes.error}>
      <BiErrorCircle className={classes["error-icon"]} />
      {props.children}
    </div>
  );
};

export default TextError;
