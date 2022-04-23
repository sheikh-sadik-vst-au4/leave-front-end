import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
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

export default function EWEData({ data }) {
  const classes = useStyles();

  

  return (
    <>
      <Grid item sm={2} xs={6}>
        <Typography gutterBottom style={{ fontWeight: "bold" }} color="primary">
          Employee Extra Work
        </Typography>
      </Grid>
      {data.map((item)=>
      <Paper square className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Name
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{item.employee.name}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Email
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{item.employee.email}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
             Gender
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{item.employee.gender}</Typography>
          </Grid>

          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              D.O.B
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{new Date(item.employee.dob).toLocaleDateString()}</Typography>
          </Grid>

          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Phone No.
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{item.employee.phoneNo}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Joining Date
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{new Date(item.employee.joiningDate).toLocaleDateString()}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Probation End
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{new Date(item.employee.probationEnd).toLocaleDateString()}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Balanced Leaves
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{item.employee.balancedLeaves}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Leaves Taken
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{item.employee.leavesTaken}</Typography>
          </Grid>
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
            <Typography gutterBottom>{new Date(item.date).toLocaleDateString()}</Typography>
          </Grid>

          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
             DayType
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{item.dayType}</Typography>
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
            <Typography gutterBottom>{item.year}</Typography>
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
            <Typography gutterBottom>{item.month}</Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Day
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{item.day}</Typography>
          </Grid>
          
         
        </Grid>
        
       
        
      </Paper>
      )}
    </>
  );
}
