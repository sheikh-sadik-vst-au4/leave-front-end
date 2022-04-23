import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PageContainer from "../../layouts/PageContainer";
import { currentUserValue } from "./initialFormValues";
import editUserValidationSchema from "./validationSchema";
import BankDetails from "./UserForm/BankDetails";
import OfficialDetails from "./UserForm/OfficialDetails";
import PersonalDetails from "./UserForm/PersonalDetails";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { Helmet } from "react-helmet";
import {
  userActions,
  commonAction,
  roleAction,
  departmentAction,
  designationAction,
} from "../../_actions";

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

const Container = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [edit, setEdit] = useState(true);
  const [countryId, setCountryId] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const alert = useSelector((state) => state.alert);
  const currentUser = useSelector((state) =>
    state.user && state.user.user ? state.user.user : null
  );
  const isLoading = useSelector((state) =>
    state.user && state.user.loading ? state.user.loading : false
  );
  const initialValues = currentUserValue(currentUser);
  const roleData = useSelector((state) => (state.role ? state.role.role : []));
  const departmentData = useSelector((state) =>
    state.departments && state.departments.departments
      ? state.departments.departments
      : []
  );
  const designationData = useSelector((state) =>
    state.designations && state.designations.designations
      ? state.designations.designations
      : []
  );
  const countryData = useSelector((state) =>
    state.common ? state.common.country : []
  );

  const stateData = useSelector((state) =>
    state.common ? state.common.states : []
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: editUserValidationSchema,
    onSubmit: (values) => {
      const id = props.match.params.id;
      let updatedUserValue = getCreateUser(values);
      dispatch(userActions.updateUserById(id, updatedUserValue));

      // dispatch(userActions.getUserById(id));

      setEdit(true);
    },
  });

  const handleEdit = () => {
    if (edit === true) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  const handleDeleteUser = () => {
    const id = props.match.params.id;
    dispatch(userActions.deleteUserById(id));
    history.push("/index/employee-list");
  };

  useEffect(() => {
    setCountryId(formik.values.country);
    if (countryId) {
      dispatch(commonAction.getStates(countryId));
    }
  }, [dispatch, formik.values.country, countryId]);

  useEffect(() => {
    dispatch(roleAction.getRoles());
    dispatch(departmentAction.getDepartments());
    dispatch(designationAction.getDesignations());
    dispatch(commonAction.getCountry());
  }, [dispatch ]);

  useEffect(() => {
    if (props.match.params.id) {
      const id = props.match.params.id;
      dispatch(userActions.getUserById(id));
    }
  }, [dispatch, props.match.params.id]);

  useEffect(() => {
    const id = props.match.params.id;
    if (alert.status) {
      enqueueSnackbar(alert.message, {
        variant: alert.type,
        autoHideDuration: 3000,
      });
    }
    dispatch(userActions.getUserById(id));
    
  }, [alert, enqueueSnackbar,dispatch , props.match.params.id]);

  return (
    <>
      <Helmet>
        <title>Update User | JPLOFT</title>
      </Helmet>
      <PageContainer pageheading="EDIT USER DETAILS">
        {isLoading === true ? (
          <LinearProgress />
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              <Grid sm={6} item>
                <Grid item sm={6} xs={12}>
                  <Typography
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                    color="primary"
                  >
                    PERSONAL DETAILS
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                      <PersonalDetails
                        edit={edit}
                        formik={formik}
                        countries={countryData}
                        states={stateData}
                        countryId={countryId}
                      />
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
              <Grid sm={6} item>
                <Grid item sm={6} xs={12}>
                  <Typography
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                    color="primary"
                  >
                    OFFICIAL DETAILS
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Paper className={classes.paper} square>
                    <OfficialDetails
                      formik={formik}
                      edit={edit}
                      roles={roleData}
                      departments={departmentData}
                      designations={designationData}
                    />
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
                <Grid item sm={12}>
                  <Paper className={classes.paper} square>
                    <BankDetails
                      intialValues={initialValues}
                      edit={edit}
                      formik={formik}
                    />
                  </Paper>
                </Grid>
                <Grid item sm={12} align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    className={classes.button}
                    onClick={handleEdit}
                    disabled={!edit}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.button}
                    disabled={edit}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDeleteUser}
                    className={classes.button}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </PageContainer>
    </>
  );
};

export default Container;

const getCreateUser = (values) => {
  let userDetails = {};
  if (values) {
    userDetails = {
      name: values.name,
      gender: values.gender,
      dob: values.dob,
      email: values.email,
      phoneNo: values.phoneNo,
      designation: values.designation,
      department: values.department,
      role: values.role,
      joiningDate: values.joiningDate,
      probationEnd:values.probationEnd,
      personalEmail: values.personalEmail,
      account: {
        accountNo: values.accountNo,
        ifscCode: values.ifscCode,
        bankName: values.bankName,
      },
      address: {
        val: values.addressVal,
        city: values.city,
        pincode: values.pincode,
        state: values.state,
        country: values.country,
      },
    };

    return userDetails;
  }
  return userDetails;
};

// {
//     "name": "employee2_",
//     "gender": "Male",
//     "dob": "1993-02-17T18:30:00.000Z",
//     "email": "employee2_@jploft.in",
//     "phoneNo": "456558888666",
//     "designation": "609d85e1d5e64744f590466c",
//     "department": "609d846248eb3644921745f9",
//     "role": "609d86f1f17c70454004af1c",
//     "joiningDate": "2021-03-03T18:30:00.000Z",
//     "personalEmail": "employee2@gmail.com",
//     "password": "123456789",
//     "account": {
//         "accountNo": "6678678678688",
//         "ifscCode": "IFSC3334545",
//         "bankName": "Test_ bank1"
//     },
//     "address": {
//         "val": "81, mansarovar",
//         "city": "Jaipur",
//         "pincode": "302020",
//         "state": "609faa3bd3fd4869f701b90d",
//         "country": "609faa35d3fd4869f701b328"
//     }
// }
