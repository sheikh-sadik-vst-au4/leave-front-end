import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Link,
  Grid,
  Container,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import { useSnackbar } from "notistack";

import useStyles from "./styles";
import LoginForm from "./LoginForm";
import App from "../../helper/Appbasic";
import img from "../../assets/img/logo.svg";
import { authActions } from "../../_actions";
import LoginValidationSchema from "./ValidationSchema";

export default function SignIn() {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const history = useHistory();
  const token = App.getToken();
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const isLoading = useSelector((state) =>
    state.authentication && state.authentication.loading
      ? state.authentication.loading
      : false
  );
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (token) {
      history.push("/index/dashboard");
    } else {
      history.push("/index/login");
    }
  }, [history, token]);

  useEffect(() => {
    if (alert.status) {
      enqueueSnackbar(alert.message, {
        variant: alert.type,
        autoHideDuration: 3000,
      });
    }
  }, [alert, enqueueSnackbar]);

  const handleSubmit = (values) => {
    const { email, password } = values;
    if (email && password) {
      dispatch(authActions.login(values));

      if (loggedIn) {
        const path = "/index/dashboard";
        history.push(path);
      } else {
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | JPLOFT</title>
      </Helmet>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={5} square>
          <div className="card">
            <div className={classes.paper}>
              <Grid container>
                <Grid item xs align="center">
                  <img src={img} alt="logo" />
                </Grid>
              </Grid>
              <Formik
                initialValues={initialValues}
                validationSchema={LoginValidationSchema}
                onSubmit={handleSubmit}
              >
                {(formik) => {
                  return (
                    <Form autoComplete>
                      <div className={classes.form}>
                        <LoginForm formik={formik} />
                        <div className={classes.wrapper}>
                          <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            disabled={isLoading}
                            className={classes.submit}
                            color="primary"
                          >
                            Sign In
                          </Button>
                          {isLoading === true && (
                            <CircularProgress
                              size={24}
                              className={classes.buttonProgress}
                            />
                          )}
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              <Grid container>
                <Grid item xs align="center">
                  <Link href="/index/forget" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </Paper>
      </Container>
    </>
  );
}
