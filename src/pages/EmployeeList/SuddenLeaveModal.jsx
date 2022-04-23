import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import { suddenLeaveAction } from "../../_actions";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Radio } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(4, 0, 1, 0),
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const validationSchema = yup.object({
  leaveType: yup.string().required("Please Select leaveType its required"),
  dayType: yup.string().required("dayType is required"),
  leavesReduced: yup
    .number()
    .positive()
    .min(0)
    .required("leavesReduced is required"),
  date: yup.date().required("Date is required"),
});

export default function SuddenLeaveModal({ open, handleClose, name, Id }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    leaveType: "",
    leavesReduced: "",
    employeeName: name,
    employee: Id,
    dayType: "3",
    date: new Date(),
  };

  const leaveTypes = useSelector((state) =>
    state.leaveTypes ? state.leaveTypes : []
  );

  const isLoading = useSelector((state) =>
    state.suddenLeave ? state.suddenLeave.loading : false
  );

  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (alert.status) {
      enqueueSnackbar(alert.message, {
        variant: alert.type,
        autoHideDuration: 3000,
      });
      handleClose();
    }
  }, [alert, enqueueSnackbar, handleClose]);

  const handleSubmit = (values) => {
    const request = {
      leaveType: values.leaveType,
      leavesReduced: values.leavesReduced,
      employee: values.employee,
      dayType: parseInt(values.dayType),
      date: values.date,
    };
    dispatch(suddenLeaveAction.createSuddenLeave(request));
  };
  const classes = useStyles();

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Mark Sudden Leave
        </DialogTitle>
        <DialogContent dividers>
          <Formik
            enableReinitialize="true"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item sm={12} xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Leave Type</InputLabel>
                        <Select
                          name="leaveType"
                          value={formik.values.leaveType}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.errors.leaveType && formik.touched.leaveType
                          }
                        >
                          {!leaveTypes
                            ? null
                            : leaveTypes.map((item, pos) => {
                                return (
                                  <MenuItem value={item._id} key={pos}>
                                    {item.name}
                                  </MenuItem>
                                );
                              })}
                        </Select>
                        <FormHelperText error>
                          {formik.errors.leaveType &&
                            formik.touched.leaveType &&
                            formik.errors.leaveType}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        name="employeeName"
                        type="text"
                        label="User"
                        value={formik.values.employeeName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.employeeName &&
                          Boolean(formik.errors.employeeName)
                        }
                        helperText={
                          formik.touched.employeeName &&
                          formik.errors.employeeName
                        }
                        disabled
                      />
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          fullWidth
                          disablePast="true"
                          name="date"
                          label="Date of Leave"
                          format="dd/MM/yyyy"
                          value={formik.values.date}
                          onChange={(value) =>
                            formik.setFieldValue("date", value)
                          }
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                          onBlur={formik.handleBlur}
                          error={
                            formik.touched.date && Boolean(formik.errors.date)
                          }
                          helperText={formik.touched.date && formik.errors.date}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>
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
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        name="leavesReduced"
                        type="number"
                        label="leaves Reduced"
                        value={formik.values.leavesReduced}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.leavesReduced &&
                          Boolean(formik.errors.leavesReduced)
                        }
                        helperText={
                          formik.touched.leavesReduced &&
                          formik.errors.leavesReduced
                        }
                      />
                    </Grid>
                  </Grid>
                  <Grid container justify="flex-end" spacing={2}>
                    <Grid item>
                      <div className={classes.wrapper}>
                        <Button
                          variant="contained"
                          type="submit"
                          disabled={isLoading}
                          className={classes.submit}
                          color="primary"
                        >
                          Add Sudden Leave
                        </Button>
                        {isLoading === true && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
