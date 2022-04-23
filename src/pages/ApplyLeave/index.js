import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";

import { useDispatch, useSelector } from "react-redux";
import { leaveTypeAction } from "../../_actions";
import { leaveAction , holidayAction } from "../../_actions";

import { Grid, Paper, Button, CircularProgress } from "@material-ui/core";
import { Formik, Form } from "formik";


import ApplyLeaveForm from "./ApplyLeaveForm";
import PageContainer from "../../layouts/PageContainer";
import { useSnackbar } from "notistack";
import {
  ApplyLeaveValidationSchemaForMultiple,
  ApplyLeaveValidationSchemaForSingle,
} from "./validationSchema";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3),
    },
  },
  submit: {
    margin: theme.spacing(4, 0, 1, 0),
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "91%",
  },
}));

const initialValuesForMultiple = {
  leaveType: "",
  fromDate: "",
  toDate:"",
  reason: "",
  single: "0",
  fromDateType: "3",
  toDateType: "3",
};

const initialValuesForSingle = {
  leaveType: "",
  fromDate: "",
  reason: "",
  single: "1",
  fromDateType: "3",
};

const getdetail = (values) => {
  let leaveDetails = {};
  if (values.single === "0") {
    leaveDetails = {
      leaveType: values.leaveType,
      fromDate: values.fromDate,
      toDate: values.toDate,
      reason: values.reason,
      single: parseInt(values.single, 10),
      fromDateType: parseInt(values.fromDateType),
      toDateType: parseInt(values.toDateType),
    };
    return leaveDetails;
  } else {
    leaveDetails = {
      leaveType: values.leaveType,
      fromDate: values.fromDate,
      reason: values.reason,
      single: parseInt(values.single, 10),
      fromDateType: parseInt(values.fromDateType),
    };
    return leaveDetails;
  }
};

const FormContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const alert = useSelector((state) => state.alert);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isSingle, setIsSingle] = useState("1");

  useEffect(() => {
    dispatch(leaveTypeAction.getLeaveType());
    dispatch(holidayAction.getHolidays());
  }, [dispatch]);

  useEffect(() => {
    if (alert.status) {
      enqueueSnackbar(alert.message, {
        variant: alert.type,
        autoHideDuration: 3000,
      });
    }
  }, [alert, enqueueSnackbar]);

  useEffect(() => {
    if (alert.type === "success") {
      history.push("/index/leave-history")
      
    }
  }, [alert]);

  const leavetype = useSelector((state) =>
    state.leaveTypes ? state.leaveTypes : []
  );

  const isLoading = useSelector((state) =>
    state.leave ? state.leave.loading : false
  );

  const handleSingle = (event) => {
    setIsSingle(event.target.value);
  };

  const holidaylist = useSelector((state) =>
    state.holidays && state.holidays.holidaysList
      ? state.holidays.holidaysList
      : []
  );

  const handleSubmit = (values, actions) => {
    
    const applyleavedetail = getdetail(values);
    dispatch(leaveAction.applyleave(applyleavedetail));
    actions.setSubmitting(false);
    actions.resetForm({ values: "" });
    
  };

  return (
    <>
      <Helmet>
        <title>Apply Leave | JPLOFT</title>
      </Helmet>
      <PageContainer pageheading="APPLY HERE">
        <Grid container spacing={1} justify="center">
          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper} square>
              <Formik
                enableReinitialize="true"
                initialValues={
                  isSingle === "1"
                    ? initialValuesForSingle
                    : initialValuesForMultiple
                }
                onSubmit={handleSubmit}
                validationSchema={
                  isSingle === "1"
                    ? ApplyLeaveValidationSchemaForSingle
                    : ApplyLeaveValidationSchemaForMultiple
                }
              >
                {(formik) => {
                  return (
                    <Form autoComplete="off">
                      <ApplyLeaveForm
                        formik={formik}
                        leavetype={leavetype}
                        holidaylist={holidaylist}
                        handleSingle={handleSingle}
                      />
                      <Grid align="right" item style={{ marginTop: "10px" }}>
                        <div className={classes.wrapper}>
                          <Button
                            variant="contained"
                            type="submit"
                            disabled={isLoading}
                            className={classes.submit}
                            color="primary"
                          >
                            Apply
                          </Button>
                          {isLoading === true && (
                            <CircularProgress
                              size={24}
                              className={classes.buttonProgress}
                            />
                          )}
                        </div>
                      </Grid>
                    </Form>
                  );
                }}
              </Formik>
            </Paper>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default FormContainer;
