import React from "react";
import { TextField } from "@material-ui/core";

const TextfieldWrapper = ({ name, label, type, disable, formik }) => {
  const { handleChange, values, touched, errors, handleBlur } = formik;

  return (
    <TextField
      name={name}
      label={label}
      fullWidth
      type={type}
      disabled={disable}
      value={values[name]}
      onChange={handleChange}
      error={errors[name] && touched[name]}
      onBlur={handleBlur}
      helperText={errors[name] && touched[name] && errors[name]}
    />
  );
};

export default TextfieldWrapper;
