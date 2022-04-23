import React from "react";
import { Grid, Paper, Typography , Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
  },
}));

export default function LeaveDetails({ leaveDetail , deleteLeaveById  }) {
  const classes = useStyles();

  const fromdate = leaveDetail.fromDate ? leaveDetail.fromDate : "";
  const fromDate = fromdate.split("T");

  const toDate = leaveDetail.toDate ? leaveDetail.toDate : "";
  const endDate = toDate.split("T");

  const post = leaveDetail.createdAt ? leaveDetail.createdAt : "";
  const postDate = post.split("T");

  return (
    <>
      <Grid item sm={2} xs={6}>
        <Typography gutterBottom style={{ fontWeight: "bold" }} color="primary">
          Leave Details
        </Typography>
      </Grid>
      <Paper square className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Leave Type
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{leaveDetail &&leaveDetail.leaveType && leaveDetail.leaveType.name?leaveDetail.leaveType.name:''}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Start Date
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{fromDate[0]}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              End Date
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{endDate[0]}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Posted Date
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{postDate[0]}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Leave Status
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{leaveDetail.status}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Leave Discription
            </Typography>
          </Grid>
          <Grid item sm={10} xs={6}>
            <Typography gutterBottom variant="body2">
              {leaveDetail.reason}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Admin Remark
            </Typography>
          </Grid>
          <Grid item sm={10} xs={6}>
            <Typography gutterBottom variant="body2">
            {leaveDetail.remark ?leaveDetail.remark:"" }
            </Typography>
          </Grid>
        </Grid>
        <Button type="text"  variant="contained" onClick={deleteLeaveById} color="primary">Delete Leave</Button>

        {/* <Grid container spacing={2}>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Admin Action Taken Date
            </Typography>
          </Grid>
          <Grid item sm={10} xs={6}>
            <Typography gutterBottom>01/01/2020</Typography>
          </Grid>
        </Grid> */}
      </Paper>
    </>
  );
}
