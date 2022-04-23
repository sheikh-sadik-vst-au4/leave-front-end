import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  radioLabel: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
}));

const ApplyLeaveForm = ({ formik, leavetype, holidaylist, handleSingle }) => {
  const classes = useStyles();
  const { handleChange, values, touched, errors, handleBlur } = formik;

  function disableRandomDates(date) {
    let datee = null;
    holidaylist.map((data) => {
      if (
        new Date(date).toLocaleDateString() ===
        new Date(data.date).toLocaleDateString()
      ) {
        return (datee = true);
      }
      return datee;
    });

    return datee;
  }
  return (
    <Grid container spacing={3}>
      <Grid sm={12} xs={12} item>
        <FormControl>
          <Grid container spacing={2}>
            <Grid item className={classes.radioLabel}>
              <FormLabel>Days</FormLabel>
            </Grid>
            <Grid item>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
                value={values.single}
                onChange={handleSingle}
              >
                <FormControlLabel
                  value={"1"}
                  name="single"
                  onChange={handleChange}
                  control={<Radio color="primary" />}
                  label="Single Day"
                />
                <FormControlLabel
                  value={"0"}
                  name="single"
                  onChange={handleChange}
                  control={<Radio color="primary" />}
                  label="Multiple Days"
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid sm={12} xs={12} item>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel>Leave Type</InputLabel>
          <Select
            name="leaveType"
            value={values.leaveType}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.leaveType && touched.leaveType}
          >
            {!leavetype
              ? null
              : leavetype.map((item, pos) => {
                  return (
                    <MenuItem value={item._id} key={pos}>
                      {item.name}
                    </MenuItem>
                  );
                })}
          </Select>
          <FormHelperText error>
            {errors.leaveType && touched.leaveType && errors.leaveType}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid sm={values.single === "1" ? 12 : 6} xs={12} item>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            fullWidth
            InputLabelProps={{ shrink:(values.fromDate === ""?false:true) }}
            disableToolbar
            disablePast="true"
            shouldDisableDate={(date) => disableRandomDates(date)}
            id="From-Date"
            name="fromDate"
            label="Leave Start"
            format="dd/MM/yyyy"
            value={values.fromDate?values.fromDate:''}
            onChange={(value) => formik.setFieldValue("fromDate", value)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            onBlur={handleBlur}
            helperText={errors.fromDate && touched.fromDate && errors.fromDate}
            error={errors.fromDate && touched.fromDate}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      {values.single === "0" ? (
        <Grid sm={6} xs={12} item>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disabled={values.single === "1" ? true : false}
              InputLabelProps={{ shrink:(values.toDate === ""?false:true) }}
              fullWidth
              disableToolbar
              shouldDisableDate={(date) => disableRandomDates(date)}
              disablePast="true"
              id="End-Date"
              name="toDate"
              label="Leave End"
              format="dd/MM/yyyy"
              value={values.toDate?values.toDate:''}
              minDate={values.fromDate}
              onChange={(value) => formik.setFieldValue("toDate", value)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              onBlur={handleBlur}
              helperText={errors.toDate && touched.toDate && errors.toDate}
              error={errors.toDate && touched.toDate}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      ) : null}

      <Grid sm={values.single === "1" ? 12 : 6} xs={12} item>
        <FormControl component="fieldset">
          <FormLabel component="legend">Start Day Type</FormLabel>
          <RadioGroup row value={values.fromDateType}>
            {values.single === "1"?
            <FormControlLabel
              value={"1"}
              name="fromDateType"
              onChange={handleChange}
              control={<Radio color="primary" />}
              label="First Half Leave"
            />
            :''}
            <FormControlLabel
              value={"2"}
              name="fromDateType"
              onChange={handleChange}
              control={<Radio color="primary" />}
              label="Second Half Leave"
            />
            <FormControlLabel
              value={"3"}
              name="fromDateType"
              onChange={handleChange}
              control={<Radio color="primary" />}
              label="Full Day Leave"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      {values.single === "0" ? (
        <Grid sm={6} xs={12} item>
          <FormControl component="fieldset">
            <FormLabel component="legend">End Day Type</FormLabel>
            <RadioGroup row value={values.toDateType}>
              <FormControlLabel
                value={"1"}
                name="toDateType"
                onChange={handleChange}
                control={<Radio color="primary" />}
                label="First Half Leave"
              />
              {/* <FormControlLabel
                value="2"
                name="toDateType"
                onChange={handleChange}
                control={<Radio color="primary" />}
                label="Second Half Leave"
              /> */}
              <FormControlLabel
                value={"3"}
                name="toDateType"
                onChange={handleChange}
                control={<Radio color="primary" />}
                label="Full Day Leave"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      ) : null}
      <Grid sm={12} xs={12} item>
        <TextField
          fullWidth
          id="reason"
          name="reason"
          label="Reason"
          value={values.reason}
          onChange={handleChange}
          error={touched.reason && Boolean(errors.reason)}
          helperText={touched.reason && errors.reason}
        />
      </Grid>
    </Grid>
  );
};

export default ApplyLeaveForm;
