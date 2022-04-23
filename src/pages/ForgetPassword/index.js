import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import useStyles from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Paper,
  CircularProgress,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { authActions } from "../../_actions";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is Required"),
});

function ForgetPassword() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) =>
    state.authentication && state.authentication.loading
      ? state.authentication.loading
      : false
  );

  const { enqueueSnackbar } = useSnackbar();
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (alert.status) {
      enqueueSnackbar(alert.message, {
        variant: alert.type,
        autoHideDuration: 3000,
      });
    }
  }, [alert, enqueueSnackbar]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { email: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(authActions.forget(values));
    },
  });

  return (
    <>
      <Helmet>
        <title>Forget Password | JPLOFT</title>
      </Helmet>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Paper square className={classes.paper}>
          <LockOutlinedIcon style={{ fontSize: 100 }} align="center" />
          <Typography variant="h2" gutterBottom color="textSecondary">
            Forget Password ?
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            You can reset your password here
          </Typography>
          <Grid item>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                margin="dense"
                autoFocus
                fullWidth
                id="name"
                name="email"
                label="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
        </Paper>
      </Grid>
    </>
  );
}

export default ForgetPassword;
