import React, { useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Grid from "@material-ui/core/Grid";
import Card from "../../layouts/Card";
import LoadingCard from "../../layouts/LoadingCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  holidayAction,
  leaveAction,
  suddenLeaveAction,
  userActions,
} from "../../_actions";
import { MyCalendar } from "./Calender";

const useStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(5),
    },
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

function UserDashboard(props) {
  const { roleid } = props;
  const classes = useStyle();
  const dispatch = useDispatch();

  const holidays = useSelector((state) =>
    state.holidays && state.holidays.holidaysList
      ? state.holidays.holidaysList
      : []
  );

  const leaves = useSelector((state) =>
    state.leave && state.leave.leaveDetails ? state.leave.leaveDetails : []
  );

  const dashboard = useSelector((state) =>
    state.user && state.user.dashboard ? state.user.dashboard : ""
  );

  const isLoading = useSelector((state) =>
    state.user && state.user.loading ? state.user.loading : false
  );

  useEffect(() => {
    dispatch(holidayAction.getHolidays());
    dispatch(leaveAction.leavedetails("Pending"));
    dispatch(suddenLeaveAction.getAllSuddenLeaves());
    dispatch(userActions.dashboard());
    dispatch(userActions.getUserProfile());
  }, [dispatch]);

  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <Typography variant="h2" color="textPrimary">
            Dashboard
          </Typography>
        </header>
        <Grid container spacing={3}>
          {roleid === "1" ? (
            ""
          ) : (
            <>
              {/* <Card
                number={
                  <Link to="/index/apply-leave">
                    <AddCircleIcon color="primary" style={{ fontSize: 50 }} />
                  </Link>
                }
                carddata={"Apply for Leave"}
              ></Card> */}
              {/* <Card number={dashboard.activeCls} carddata={"Active Cl"} /> */}
              {/* <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={isLoading}
                  className={classes.submit}
                  color="primary"
                  >
                  Sign In
                </Button> */}

              {isLoading === true ? (
                <LoadingCard/>
              ) : (
                <Card number={dashboard.activeCls} carddata={"Active Cl"} />
              )}
              {isLoading === true ? (
                <LoadingCard />
              ) : (
                <Card
                  number={dashboard.totalLeaveTaken}
                  carddata={"Total Leaves"}
                  id={1}
                />
              )}
            </>
          )}
          {roleid === "1" ? (
            <>
            {isLoading === true ? <LoadingCard />: 
            <Card
              number={dashboard.employeePendingLeaves}
              carddata={"Employe pending leaves"}
              id={2}
            />
}
            </>
          ) : roleid === "3"?
          <>
           {isLoading === true ? <LoadingCard />:
           <>
          <Card
            number={dashboard.pendingLeaves}
            carddata={"Pending Leaves"}
            id={2}
          />
          <Card
              number={dashboard.employeePendingLeaves}
              carddata={"Employee pending leaves"}
              id={2}
            />
            </>
           }
          </>:
           roleid === "4" || roleid === "2" ? (

            <>
             {isLoading === true ? <LoadingCard />:
            <Card
              number={dashboard.pendingLeaves}
              carddata={"Pending Leaves"}
              id={2}
            />
             }
            </>
          ) : (
            ""
          )}
        </Grid>
        <br />
        <br />
        <Paper className={classes.paper} square>
          <MyCalendar holidays={holidays} leaves={leaves} />
        </Paper>
      </div>
    </section>
  );
}

export default connect()(UserDashboard);
