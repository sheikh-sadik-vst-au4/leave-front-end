import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import {
  CircularProgress,
  Button,
  StepLabel,
  Step,
  Stepper,
  Paper,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import {
  userActions,
  commonAction,
  roleAction,
  departmentAction,
  designationAction,
} from "../../_actions";
import BasicDetailsForm from "./Forms/BasicDetailsForm";
import OfficeDetailsForm from "./Forms/OfficeDetailsForm";
import ReviewUserDetails from "./ReviewUserDetails";
import validationSchema from "./validationSchema";
import UserSuccess from "./UserSuccess";
import useStyles from "./styles";

const steps = ["Basic Details", "Office Details", "Review"];

let initialValues = {
  name:"",
  gender: "",
  dob: new Date(),
  email: "",
  phoneNo: "",
  designation: "",
  department: "",
  role: "",
  joiningDate: new Date(),
  personalEmail: "",
  password: "",
  accountNo: "",
  reaccountNo: "",
  ifscCode: "",
  bankName: "",
  addressVal: "",
  city: "",
  pincode: "",
  state: "",
  country: "",
};

export default function CreateUser() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [activeStep, setActiveStep] = useState(0);
  const [countryId, setCountryId] = useState("");

  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const alert = useSelector((state) => state.alert);
  const roleData = useSelector((state) =>
    state.role && state.role.role ? state.role.role : []
  );
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
  const isLoading = useSelector((state) =>
    state.user && state.user.loading ? state.user.loading : false
  );

  useEffect(() => {
    dispatch(roleAction.getRoles());
    dispatch(departmentAction.getDepartments());
    dispatch(designationAction.getDesignations());
    dispatch(commonAction.getCountry());
  }, [dispatch]);

  useEffect(() => {
    if (countryId) {
      dispatch(commonAction.getStates(countryId));
    }
  }, [dispatch, countryId]);

  useEffect(() => {
    if (alert.status) {
      enqueueSnackbar(alert.message, {
        variant: alert.type,
        autoHideDuration: 3000,
      });
    }
    if (alert.type === "success") {
      setActiveStep((activeStep) => activeStep + 1);
    }
  }, [alert, enqueueSnackbar]);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getCreateUser = (values) => {
    let userDetails = {};
    if (values) {
      userDetails = {
        name: values.name,
        gender: values.gender,
        dob: values.dob,
        email: values.email,
        phoneNo: values.phoneNo,
        designation: values.designation._id,
        department: values.department._id,
        role: values.role._id,
        joiningDate: values.joiningDate,
        personalEmail: values.personalEmail,
        password: values.password,
        account: {
          accountNo: values.accountNo,
          ifscCode: values.ifscCode,
          bankName: values.bankName,
        },
        address: {
          val: values.addressVal,
          city: values.city,
          pincode: values.pincode,
          state: values.state._id,
          country: values.country._id,
        },
      };

      return userDetails;
    }
    return userDetails;
  };

  const handleSubmit = (values, actions) => {
    let createUser = getCreateUser(values);
    if (isLastStep) {
      dispatch(userActions.createUser(createUser));
      return alert.type === "success"
        ? setActiveStep(activeStep + 1)
        : actions.setSubmitting(false);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create User | JPLOFT</title>
      </Helmet>
      <main className={classes.layout}>
        <Paper className={classes.paper} square>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <UserSuccess />
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidationSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => {
                setCountryId(formik.values.country._id);
                return (
                  <Form autoComplete="off">
                    {activeStep === 0 ? (
                      <BasicDetailsForm
                        formik={formik}
                        countries={countryData}
                        states={stateData}
                        countryId={countryId}
                      />
                    ) : activeStep === 1 ? (
                      <OfficeDetailsForm
                        formik={formik}
                        roles={roleData}
                        departments={departmentData}
                        designations={designationData}
                      />
                    ) : activeStep === 2 ? (
                      <ReviewUserDetails empDetail={formik.values} />
                    ) : (
                      ""
                    )}

                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <div className={classes.wrapper}>
                        <Button
                          variant="contained"
                          type="submit"
                          disabled={isLoading}
                          className={classes.button}
                          color="primary"
                        >
                          {isLastStep ? "Add Employee" : "Next"}
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
          )}
        </Paper>
      </main>
    </>
  );
}
