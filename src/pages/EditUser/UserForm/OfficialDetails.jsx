import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  
} from "@material-ui/core";
import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function OfficialDetails({
  formik,
  edit,
  roles,
  departments,
  designations,
}) {
  const { values, touched, errors, handleBlur, handleChange } = formik;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {/* <FormControl fullWidth>
          <InputLabel>Role</InputLabel>
          <Select
            name="role"
            value={values && values.role ? values.role : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.role && touched.role}
            disabled={edit}
          >
            {!roles
              ? null
              : roles.map((item, pos) => {
                  return (
                    <MenuItem value={item._id} key={pos}>
                      {item.name}
                    </MenuItem>
                  );
                })}
          </Select>
          <FormHelperText error>
            {errors.role && touched.role && errors.role}
          </FormHelperText>
        </FormControl> */}
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Department</InputLabel>
          <Select
            name="department"
            value={values && values.department ? values.department : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.department && touched.department}
            disabled={edit}
          >
            {!departments
              ? null
              : departments.map((item, pos) => {
                  return (
                    <MenuItem value={item._id} key={pos}>
                      {item.name}
                    </MenuItem>
                  );
                })}
          </Select>
          <FormHelperText error>
            {errors.department && touched.department && errors.department}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Designation</InputLabel>
          <Select
            name="designation"
            value={values && values.designation ? values.designation : ""}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.designations && touched.designations}
            disabled={edit}
          >
            {!designations
              ? null
              : designations.map((item, pos) => {
                  return (
                    <MenuItem value={item._id} key={pos}>
                      {item.name}
                    </MenuItem>
                  );
                })}
          </Select>
          <FormHelperText error>
            {errors.designation && touched.designation && errors.designation}
          </FormHelperText>
        </FormControl>
      </Grid>
     
      <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disabled={edit}
              fullWidth
              disableFuture="true"
              id="Date-of-Birth"
              name="joiningDate"
              label="joiningDate"
              format="dd/MM/yyyy"
              value={values.joiningDate}
              onChange={(value) => formik.setFieldValue("joiningDate", value)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              onBlur={handleBlur}
              helperText={errors.dob && touched.dob && errors.dob}
              error={errors.dob && touched.dob}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disabled={edit}
              fullWidth
              disableFuture="true"
              id="Date-of-Birth"
              name="probationEnd"
              label="probationEnd"
              format="dd/MM/yyyy"
              value={values.probationEnd}
              onChange={(value) => formik.setFieldValue("probationEnd", value)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              onBlur={handleBlur}
              helperText={errors.dob && touched.dob && errors.dob}
              error={errors.dob && touched.dob}
            />
          </MuiPickersUtilsProvider>
        </Grid>
    </Grid>
  );
}
