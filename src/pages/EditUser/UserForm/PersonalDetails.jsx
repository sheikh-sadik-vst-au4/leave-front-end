import { Grid } from "@material-ui/core";
import React from "react";
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

export default function PersonalDetails({
  formik,
  edit,
  countries,
  states,
  countryId,
}) {
  const { values, touched, errors, handleBlur, handleChange } = formik;

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Textfield
            name="name"
            label="Name"
            formik={formik}
            disable={edit}
          />
        </Grid>
        
        <Grid item xs={12} sm={12}>
          <Textfield
            name="personalEmail"
            label="Email"
            formik={formik}
            disable={edit}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Textfield
            name="phoneNo"
            label="Contact Number"
            formik={formik}
            disable={edit}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disabled={edit}
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
            <InputLabel>Gender</InputLabel>
            <Select
              disabled={edit}
              name="gender"
              value={values && values.gender ? values.gender : ""}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.gender && touched.gender}
            >
              {["Male", "Female", "Other"].map((item, pos) => {
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
        <Grid item xs={12} sm={12}>
          <Textfield
            name="email"
            label="Username"
            formik={formik}
            disable={edit}
          />
        </Grid>
        <Grid item xs={12}>
          <Textfield
            name="addressVal"
            label="Address line"
            formik={formik}
            disable={edit}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Textfield name="city" label="City" formik={formik} disable={edit} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select
              defaultValue={values.country}
              disabled={edit}
              name="country"
              value={values && values.country ? values.country : ""}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.country && touched.country}
            >
              {countries
                ? countries.map((item, pos) => {
                    return (
                      <MenuItem value={item._id} key={pos}>
                        {item.name}
                      </MenuItem>
                    );
                  })
                : null}
            </Select>
            <FormHelperText error>
              {errors.country && touched.country && errors.country}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Textfield
            name="pincode"
            label="Pin Code"
            formik={formik}
            disable={edit}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>State</InputLabel>
            <Select
              name="state"
              value={values && values.state ? values.state : ""}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.state && touched.state}
              disabled={countryId ? edit : true}
            >
              {!states
                ? null
                : states.map((item, pos) => {
                    return (
                      <MenuItem value={item._id} key={pos}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
            </Select>
            <FormHelperText error>
              {errors.state && touched.state && errors.state}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}
