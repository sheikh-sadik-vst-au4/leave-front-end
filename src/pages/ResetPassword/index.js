import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import {
  Grid,
  Paper,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { authActions } from "../../_actions";
import { useSnackbar } from "notistack";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "must be six character")
    .required("Password is Required"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password Must Match")
    .required("Password is Required"),
});

function ResetPassword(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = props.match.params.token;
  const isLoading = useSelector((state) =>
    state.authentication && state.authentication.loading
      ? state.authentication.loading
      : false
  );
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    dispatch(authActions.resetUpdate(token));
  }, [dispatch,token]);

  const updated = useSelector((state) =>
  state.authentication && state.authentication.password ? state.authentication.password.updated : ""
);

const message = useSelector((state) =>
state.authentication && state.authentication.password ? state.authentication.password.msg : ""
);


  useEffect(() => {
    if (alert.status) {
      enqueueSnackbar(alert.message, {
        variant: alert.type,
        autoHideDuration: 3000,
      });
    }
    if (alert.type === "success") {
      setTimeout(() => {
        history.push("/index/login");
      }, 2000);
    }
  }, [alert, enqueueSnackbar, history]);

  useEffect(() => {});

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { password: "", repassword: "", token: token },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = getdetails(values);
      dispatch(authActions.reset(data));
    },
  });

  return (
    <>
      <Helmet>
        <title>Reset Password | JPLOFT</title>
      </Helmet>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Paper square className={classes.paper}>
          {updated === true?
          <>{message}</>:
          <>
          <LockOutlinedIcon style={{ fontSize: 100 }} align="center" />
          <Grid item>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="dense"
                autoFocus
                fullWidth
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                margin="dense"
                fullWidth
                name="repassword"
                label="Confirm Password"
                value={formik.values.repassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.repassword && Boolean(formik.errors.repassword)
                }
                helperText={
                  formik.touched.repassword && formik.errors.repassword
                }
              />
              <div className={classes.wrapper}>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={isLoading}
                  className={classes.submit}
                  color="primary"
                >
                  Reset My Password
                </Button>
                {isLoading === true && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </form>
          </Grid>
          </>
          }
        </Paper>
      </Grid>
    </>
  );
}

export default ResetPassword;

const getdetails = (values) => {
  let details = {};
  if (values) {
    details = {
      password: values.password,

      token: values.token,
    };
    return details;
  }
  return details;
};
