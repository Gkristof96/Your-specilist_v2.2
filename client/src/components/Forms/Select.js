import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import style from "./Form.module.scss";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className={style["form-control"]}>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
