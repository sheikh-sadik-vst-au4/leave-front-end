import React from "react";
import {  Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Loader from '../../layouts/Loader'

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

export default function EmployeeContainer({ handleClickOpen,data }) {
  const classes = useStyles();
   

  const fromdate = data.fromDate?data.fromDate:''
  const fromDate = fromdate.split('T')

  const toDate = data.toDate?data.toDate:''
  const endDate = toDate.split('T')

  const post = data.createdAt?data.createdAt:''
  const postDate = post.split('T')
  
  return (
    <>
    {data?
    <>
     <Grid item sm={2} xs={6}>
         <Typography
           gutterBottom
           style={{ fontWeight: "bold" }}
           color="primary"
         >
           Employee Details
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
               NAME
             </Typography>
           </Grid>
           <Grid item sm={2} xs={6}>
             <Typography gutterBottom>{data.createdBy.name}</Typography>
           </Grid>
           
           <Grid item sm={2} xs={6}>
             <Typography
               gutterBottom
               style={{ fontWeight: "bold" }}
               color="textSecondary"
             >
               GENDER
             </Typography>
           </Grid>
           <Grid item sm={2} xs={6}>
             <Typography gutterBottom>{data.createdBy.gender}</Typography>
           </Grid>
         </Grid>
         <Grid container spacing={2}>
           <Grid item sm={2} xs={6}>
             <Typography
               gutterBottom
               style={{ fontWeight: "bold" }}
               color="textSecondary"
             >
               Contact Number
             </Typography>
           </Grid>
           <Grid item sm={2} xs={6}>
             <Typography gutterBottom>{data.createdBy.phoneNo}</Typography>
           </Grid>
           <Grid item sm={2} xs={6}>
             <Typography
               gutterBottom
               style={{ fontWeight: "bold" }}
               color="textSecondary"
             >
               Email Id
             </Typography>
           </Grid>
           <Grid item sm={3} xs={6}>
             <Typography noWrap={true} gutterBottom>
             {data.createdBy.email}
             </Typography>
           </Grid>
         </Grid>
       </Paper>
      
      <Grid item sm={2} xs={6}>
        <Typography
          gutterBottom
          style={{ fontWeight: "bold" }}
          color="primary"
        >
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
            <Typography gutterBottom>{data.leaveType.name}</Typography>
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
            <Typography gutterBottom>{data.status}</Typography>
          </Grid>

          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Active Cl's
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{data.createdBy.balancedLeaves}</Typography>
          </Grid>

          <Grid item sm={2} xs={6}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="textSecondary"
            >
              Total Days 
            </Typography>
          </Grid>
          <Grid item sm={2} xs={6}>
            <Typography gutterBottom>{data.days}</Typography>
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
              {data.reason}
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
              {data.remark ?data.remark:"" }
            </Typography>
          </Grid>
        </Grid>

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
      <Grid container spacing={2}>
        
       </Grid>
      </>
      :<Loader/>}
      
    </>
  );
}
