import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";

const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "select":
      return <Select {...rest} />;
    default:
      return null;
  }
};

export default FormControl;
