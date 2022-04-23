import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { holidayAction } from "../../_actions";
import { useDispatch } from "react-redux";

import * as yup from "yup";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const validationSchema = yup.object({
  occasion: yup
    .string("Enter Ocassion name")
    .required("Ocassion name is required"),
  date: yup.date().required("Date is required"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const UpdateHolidayForm = ({ handleUpdateForm, singleHoliday }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: singleHoliday,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(holidayAction.updateHoliday(values));
      handleUpdateForm();
    },
  });
  return (
    <Paper className={classes.paper} square>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} justify="right">
          <Grid item sm={12}>
            <TextField
              margin="dense"
              fullWidth
              id="occasion"
              name="occasion"
              label="Occasion Name"
              value={formik.values.occasion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.occasion && Boolean(formik.errors.occasion)}
              helperText={formik.touched.occasion && formik.errors.occasion}
            />
          </Grid>
          <Grid item sm={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                disablePast="true"
                id="Date-of-occasion"
                name="date"
                label="Date of HOliday"
                format="dd/MM/yyyy"
                value={formik.values.date}
                onChange={(value) => formik.setFieldValue("date", value)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid align="right" item>
            <Button type="submit" color="primary" variant="contained">
              Update Holiday
            </Button>
            <Button
              color="primary"
              variant="contained"
              style={{ margin: "5px" }}
              onClick={handleUpdateForm}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UpdateHolidayForm;
