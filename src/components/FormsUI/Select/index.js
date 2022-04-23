import React from "react";
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@material-ui/core";

const SelectWrapper = ({ name, label, options, formik }) => {
  const { values, touched, errors, handleBlur, handleChange } = formik;

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors[name] && touched[name]}
      >
        {options.map((item, position) => {
          return (
            <MenuItem value={item} key={position}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText error>
        {errors[name] && touched[name] && errors[name]}
      </FormHelperText>
    </FormControl>
  );
};

export default SelectWrapper;
