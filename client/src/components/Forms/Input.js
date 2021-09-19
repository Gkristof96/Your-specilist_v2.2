import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import style from "./Form.module.scss";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className={style["form-control"]}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
