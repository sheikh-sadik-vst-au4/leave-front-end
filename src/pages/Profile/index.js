import React, { useEffect } from "react";
import PageContainer from "../../layouts/PageContainer";
import BankDetails from "./Forms/BankDetails";
import { Helmet } from "react-helmet";
import OfficialDetails from "./Forms/OfficialDetails";
import PersonalDetails from "./Forms/PersonalDetails";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../_actions/";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

const Container = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) =>
    state.user && state.user.loading === false ? state.user.user : {}
  );

  const isLoading = useSelector((state) =>
    state.user && state.user.loading ? state.user.loading : null
  );

  useEffect(() => {
    dispatch(userActions.getUserProfile());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Profile | JPLOFT</title>
      </Helmet>
      <PageContainer pageheading="USER DETAILS">
        {isLoading ? (
          <LinearProgress color="primary" />
        ) : (
          <Grid container spacing={1}>
            <Grid sm={6} item spacing={2}>
              <Grid item sm={6} xs={12}>
                <Typography
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                  color="primary"
                >
                  PERSONAL DETAILS
                </Typography>
              </Grid>
              <Grid sm={12}>
                <Paper className={classes.paper} square>
                  <Grid container spacing={3}>
                    <PersonalDetails user={currentUser} />
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Grid sm={6} item spacing={2}>
              <Grid item sm={6} xs={12}>
                <Typography
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                  color="primary"
                >
                  OFFICIAL DETAILS
                </Typography>
              </Grid>
              <Grid sm={12}>
                <Paper className={classes.paper} square>
                  <OfficialDetails user={currentUser} />
                </Paper>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Typography
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                  color="primary"
                >
                  BANK DETAILS
                </Typography>
              </Grid>
              <Grid sm={12}>
                <Paper className={classes.paper} square>
                  <BankDetails user={currentUser} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        )}
      </PageContainer>
    </>
  );
};

export default Container;
