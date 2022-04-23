import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Textfield from "../../../components/FormsUI/Textfield";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function OfficeDetailsForm({
  formik,
  designations,
  departments,
  roles,
}) {
  const { handleChange, values, touched, errors, handleBlur } = formik;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Department Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="department-select--label">Department</InputLabel>
            <Select
              labelId="department-select--label"
              id="department-select-"
              name="department"
              value={values.department}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.department && touched.department}
            >
              {departments.map((item, pos) => {
                return (
                  <MenuItem value={item} key={pos}>
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
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="designation-select--label">Designation</InputLabel>
            <Select
              labelId="designation-select--label"
              id="designation-select-"
              name="designation"
              value={values.designation}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.designation && touched.designation}
            >
              {designations.map((item, pos) => {
                return (
                  <MenuItem value={item} key={pos}>
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
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="role-select--label">Role</InputLabel>
            <Select
              labelId="role-select--label"
              id="role-select-"
              name="role"
              value={values.role}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.role && touched.role}
            >
              {roles.map((item, pos) => {
                return (
                  <MenuItem value={item} key={pos}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText error>
              {errors.role && touched.role && errors.role}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              id="Date-of-Joining"
              label="Date of Joining"
              format="dd/MM/yyyy"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              name="joiningDate"
              value={values.joiningDate}
              onChange={(value) => formik.setFieldValue("joiningDate", value)}
              onBlur={handleBlur}
              helperText={
                errors.joiningDate && touched.joiningDate && errors.joiningDate
              }
              error={errors.joiningDate && touched.joiningDate}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield name="personalEmail" label="User Name" formik={formik} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield
            name="password"
            label="Password"
            type="password"
            formik={formik}
          />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom style={{ marginTop: "40px" }}>
        Bank Account Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Textfield
            name="accountNo"
            label="Bank Account Number"
            formik={formik}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield
            name="reaccountNo"
            label="Re-enter Account Number"
            formik={formik}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield name="ifscCode" label="IFSC" formik={formik} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Textfield name="bankName" label="Bank Name" formik={formik} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
