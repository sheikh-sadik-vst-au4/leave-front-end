import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Textfield from "../../../components/FormsUI/Textfield";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

export default function BasicDetailsForm({
  formik,
  countries,
  states,
  countryId,
}) {
  const { values, touched, errors, handleBlur, handleChange } = formik;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Basic Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Textfield name="name" label="Name" formik={formik} />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Textfield name="email" label="Email" formik={formik} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Textfield name="phoneNo" label="Contact Number" formik={formik} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableFuture="true"
              id="Date-of-Birth"
              name="dob"
              label="Date of Birth"
              format="dd/MM/yyyy"
              value={values.dob}
              onChange={(value) => formik.setFieldValue("dob", value)}
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
          <FormControl fullWidth>
            <InputLabel id="country-select--label">Gender</InputLabel>
            <Select
              labelId="department-select--label"
              id="department-select-"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.gender && touched.gender}
            >
              {["Male", "Female"].map((item, pos) => {
                return (
                  <MenuItem value={item} key={pos}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText error>
              {errors.gender && touched.gender && errors.gender}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Textfield name="addressVal" label="Address line" formik={formik} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Textfield name="city" label="City" formik={formik} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="country-select--label">Country</InputLabel>
            <Select
              labelId="department-select--label"
              id="department-select-"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.country && touched.country}
            >
              {!countries
                ? null
                : countries.map((item, pos) => {
                    return (
                      <MenuItem value={item} key={pos}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
            </Select>
            <FormHelperText error>
              {errors.country && touched.country && errors.country}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Textfield name="pincode" label="Pin Code" formik={formik} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="country-select--label">State</InputLabel>
            <Select
              labelId="department-select--label"
              id="department-select-"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.country && touched.country}
              disabled={countryId ? false : true}
            >
              {!states
                ? null
                : states.map((item, pos) => {
                    return (
                      <MenuItem value={item} key={pos}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
            </Select>
            <FormHelperText error>
              {errors.country && touched.country && errors.country}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
