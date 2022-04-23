import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch } from "react-redux";
import { extraworkAction } from "../../_actions";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

// const validationSchema = yup.object({
//   occasion: yup
//     .string("Enter Ocassion name")
//     .required("Ocassion name is required"),
//   date: yup.date().required("Date is required"),
// });

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

const ExtraWorkForm = ({ userList, name, Id }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const initialValues = {
    employeeId: Id,
    employeeName: name,
    dayType: "",
    date: new Date(),
  };

  const formik = useFormik({
    initialValues: initialValues,

    // validationSchema: validationSchema,

    onSubmit: (values) => {
      const data = getdetails(values);

      dispatch(extraworkAction.applyextrawork(data));
    },
  });
  return (
    <Paper className={classes.paper} square>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} justify="right">
          <Grid item sm={12}>
          <Grid item sm={12} xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Day</FormLabel>
                        <RadioGroup
                          row
                          aria-label="position"
                          name="position"
                          defaultValue="top"
                          value={formik.values.dayType}
                        >
                          <FormControlLabel
                            value={"1"}
                            name="dayType"
                            onChange={formik.handleChange}
                            control={<Radio color="primary" />}
                            label="First Half Leave"
                          />
                          <FormControlLabel
                            value={"2"}
                            name="dayType"
                            onChange={formik.handleChange}
                            control={<Radio color="primary" />}
                            label="Second Half Leave"
                          />
                          <FormControlLabel
                            value={"3"}
                            name="dayType"
                            onChange={formik.handleChange}
                            control={<Radio color="primary" />}
                            label="Full Day Leave"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
            
          </Grid>
          <Grid item sm={12}>
            <Grid item sm={12}>
              <TextField
                margin="dense"
                fullWidth
                name="employeeName"
                label="employeeName"
                value={formik.values.employeeName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.employeeName &&
                  Boolean(formik.errors.employeeName)
                }
                helperText={
                  formik.touched.employeeName && formik.errors.employeeName
                }
              />
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                fullWidth
                disablePast="true"
                name="date"
                label="Date of Work"
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
              Add Extra Work
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ExtraWorkForm;

const getdetails = (values) => {
  let details = {};
  if (values) {
    details = {
      employee: values.employeeId,
      dayType: parseInt(values.dayType, 10),
      date: values.date,
    };
    return details;
  }
  return details;
};
