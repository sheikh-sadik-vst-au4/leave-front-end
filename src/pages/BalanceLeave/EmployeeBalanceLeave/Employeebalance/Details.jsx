import React from "react";
import {  Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Loader from '../../../../layouts/Loader'

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

export default function Details({ data }) {
  const classes = useStyles();

//   const fromdate = leaveDetail.fromDate ? leaveDetail.fromDate : "";
//   const fromDate = fromdate.split("T");

//   const toDate = leaveDetail.toDate ? leaveDetail.toDate : "";
//   const endDate = toDate.split("T");

//   const post = leaveDetail.createdAt ? leaveDetail.createdAt : "";
//   const postDate = post.split("T");



  return (
    <>
    {!data?<Loader/>:<>
      <Grid item sm={2} xs={6}>
        <Typography gutterBottom style={{ fontWeight: "bold" }} color="primary">
          Balance Leave Details
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
              Date
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{data.date}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Year
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{data.year}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Month
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{data.month}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Leave Added
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{data.leaveAdded}</Typography>
          </Grid>
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
            <Typography gutterBottom>{data.leaveType.name}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Employee
            </Typography>
          </Grid>
          <Grid item sm={10} xs={6}>
            <Typography gutterBottom variant="body2">
              {data.employee}
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
              Created At
            </Typography>
          </Grid>
          <Grid item sm={10} xs={6}>
            <Typography gutterBottom variant="body2">
              {data.createdAt}
            </Typography>
          </Grid>
        </Grid>
        

        
      </Paper>
      </>}
    </>
  );
}
