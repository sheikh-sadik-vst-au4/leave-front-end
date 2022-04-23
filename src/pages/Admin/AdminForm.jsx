import React, { useState } from "react";
import AdminFromContainer from "./AdminFormContainer";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formheading: {
    fontWeight: 700,
    marginBottom: "5px",
    fontSize: "20px",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

const AdminForm = () => {
  const classes = useStyles();
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [reason, setReason] = useState("");
  const [leaveType, setLeaveType] = useState("");

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  const handleReason = (event) => {
    setReason(event.target.value);
  };

  const handleLeaveType = (event) => {
    setLeaveType(event.target.value);
  };

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    if (Date.parse(toDate) < Date.parse(fromDate)) {
      return "error";
    }
    // const leaveDetails = {
    //   fromDate,
    //   toDate,
    //   reason,
    //   leaveType,
    // };
  };

  return (
    <div className="container" data-aos="fade-up">
      <header className="section-header">
        <Link to="/index/dashboard" style={{ textDecoration: "none" }}>
          <ArrowBackIcon color="primary" />
        </Link>
      </header>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={1} square>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            className={classes.formheading}
            color="primary"
          >
            APPLY HERE
          </Typography>
          <hr></hr>
          <AdminFromContainer
            fromDate={fromDate}
            handleFromDateChange={handleFromDateChange}
            toDate={toDate}
            handleToDateChange={handleToDateChange}
            reason={reason}
            handleReason={handleReason}
            leaveType={leaveType}
            handleLeaveType={handleLeaveType}
            handleOnFormSubmit={handleOnFormSubmit}
          />{" "}
        </Paper>
      </main>
    </div>
  );
};

export default AdminForm;
