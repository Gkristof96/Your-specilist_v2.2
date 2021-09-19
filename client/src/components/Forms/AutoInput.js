import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import style from "./Form.module.scss";
import { Fragment } from "react";

const AutoInput = (props) => {
  const { placeholder, name, items, ...rest } = props;
  const changeHandler = (e) => {
    console.log(e);
    console.log("change");
  };
  return (
    <div className={style["form-control"]}>
      <Field id={name} name={name} {...rest} placeholder={placeholder}>
        {({ field, form: { touched }, meta }) => {
          return (
            <>
              <input {...field} onChange={changeHandler} value={field.value} />
            </>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default AutoInput;
