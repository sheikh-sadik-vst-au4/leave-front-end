import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AdminFormContainer = ({
  fromDate,
  handleFromDateChange,
  toDate,
  handleToDateChange,
  reason,
  handleReason,
  leaveType,
  handleLeaveType,
  handleOnFormSubmit,
}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleOnFormSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="reason"
            name="reason"
            value={reason}
            onChange={handleReason}
            label="Choose HR"
            fullWidth
            autoComplete="Reason"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="reason"
            name="reason"
            value={reason}
            onChange={handleReason}
            label="Choose Team Head"
            fullWidth
            autoComplete="Reason"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="reason"
            name="reason"
            value={reason}
            onChange={handleReason}
            label="Choose Color of approval"
            fullWidth
            autoComplete="Reason"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="reason"
            name="reason"
            value={reason}
            onChange={handleReason}
            label="Choose Color of pending"
            fullWidth
            autoComplete="Reason"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="reason"
            name="reason"
            value={reason}
            onChange={handleReason}
            label="Choose Color of rejection"
            fullWidth
            autoComplete="Reason"
          />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Apply
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default AdminFormContainer;
