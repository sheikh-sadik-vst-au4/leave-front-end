import React , {useEffect} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
//import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch , useSelector} from "react-redux";
import { leaveAction } from "../../_actions";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from '@material-ui/core/FormLabel';
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import { useFormik } from "formik";
import {
  FormControl,
  FormHelperText,
  Grid,
  // InputLabel,
  // MenuItem,
  // Select,
} from "@material-ui/core";

const validationSchema = yup.object({
  status: yup.string("Salect Status").required("status is required"),
  remark: yup.string("Enter remark").required("remark is required"),
});

const CustomizedDialogs = (props) => {
  const {  handleClose, Id } = props;
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const alert = useSelector((state)=>state.alert ? state.alert:'')
  
  useEffect(() => {
    if (alert.status) {
      enqueueSnackbar(alert.message, {
        variant: alert.type,
        autoHideDuration: 3000,
      });
    }
  }, [alert, enqueueSnackbar]);

  useEffect(() => {
    if (alert.status === 200) {
     history.push("/index/dashboard/employee")
    }
  }, [alert, enqueueSnackbar,history]);


  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      status: "Approved",
      remark: "",
      sandwitch: "true",
      paidLeaves: "",
      nonPaidLeaves: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let createUser = getCreateUser(values);
      dispatch(leaveAction.leaveActions(Id, createUser));
      
      handleClose();
    },
  });
  return (
    <div>
      <DialogTitle align="center">Take Action</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="position"
                value={formik.values.status}
                defaultValue="top"
              >
                <FormControlLabel
                  name="status"
                  value="Approved"
                  onChange={formik.handleChange}
                  control={<Radio color="primary" />}
                  label="Approve"
                />
                <FormControlLabel
                  name="status"
                  value="Rejected"
                  onChange={formik.handleChange}
                  control={<Radio color="primary" />}
                  label="Reject"
                />
              </RadioGroup>
            </FormControl>
            {/* <Grid item sm={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    name="status"
                    label="Status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.status && formik.touched.status}
                  >
                  
                    <MenuItem value={"Approved"}>Approved</MenuItem>
                    <MenuItem value={"Rejected"}>Rejected</MenuItem>
                  </Select>
                  <FormHelperText error>
                    {formik.errors.status &&
                      formik.touched.status &&
                      formik.errors.status}
                  </FormHelperText>
                </FormControl>
              </Grid> */}
            

            {formik.values.status === "Rejected" ? (
              <Grid item sm={12}>
              <TextField
               
                multiline
                fullWidth
                color="primary"
                label="Remark"
                name="remark"
            
                value={formik.values.remark}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.status && formik.touched.status}
                helperText={
                  formik.errors.status &&
                  formik.touched.status &&
                  formik.errors.status
                }
              />
            </Grid>
            ) : (
              <>
                <Grid item sm={12}>
                  <br/>
                  <FormControl  fullWidth>
                <FormLabel component="legend">Mark Sandwitch</FormLabel>
              <RadioGroup
                row
                aria-label="position"
                name="position"

                value={formik.values.sandwitch}
                defaultValue="top"
              >
                <FormControlLabel
                  name="sandwitch"
                  value={"true"}
                  onChange={formik.handleChange}
                  control={<Radio color="primary" />}
                  label="Yes"
                />
                <FormControlLabel
                  name="sandwitch"
                  value={"false"}
                  onChange={formik.handleChange}
                  control={<Radio color="primary" />}
                  label="NO"
                />
              </RadioGroup>
            
                    {/* <Select
                      name="sandwitch"
                      label="sandwitch"
                      value={formik.values.sandwitch}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.errors.sandwitch && formik.touched.sandwitch
                      }
                    >
                      <MenuItem value={true}>true</MenuItem>
                      <MenuItem value={false}>False</MenuItem>
                    </Select> */}
                    <FormHelperText error>
                      {formik.errors.sandwitch &&
                        formik.touched.sandwitch &&
                        formik.errors.sandwitch}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item sm={12}>
                
                  <TextField
                   
                  type="number"
                    fullWidth
                    color="primary"
                    label="Number of Paid Leaves"
                    name="paidLeaves"
                    
                    value={formik.values.paidLeaves}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.status && formik.touched.status}
                    helperText={
                      formik.errors.status &&
                      formik.touched.status &&
                      formik.errors.status
                    }
                  />
                </Grid>
                <Grid item sm={12}>
                  <br/>
                  <TextField
                   type='Number'
                
                    fullWidth
                    color="primary"
                    label="Number of Non Paid Leaves"
                    name="nonPaidLeaves"
                    
                    value={formik.values.nonPaidLeaves}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.status && formik.touched.status}
                    helperText={
                      formik.errors.status &&
                      formik.touched.status &&
                      formik.errors.status
                    }
                  />
                </Grid>
                <Grid item sm={12}>
              <TextField
                
                multiline
                fullWidth
                color="primary"
                label="Remark"
                name="remark"
                
                value={formik.values.remark}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.status && formik.touched.status}
                helperText={
                  formik.errors.status &&
                  formik.touched.status &&
                  formik.errors.status
                }
              />
            </Grid>
              </>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            Update
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </form>
    </div>
  );
};

export default CustomizedDialogs;

const getCreateUser = (values) => {
  let userDetails = {};
  if (values) {
    userDetails = {
      status: values.status,
      remark: values.remark,
      paidLeaves: parseInt(values.paidLeaves),
      nonPaidLeaves: parseInt(values.nonPaidLeaves),
      sandwitch: values.sandwitch === "true"?true:false,
    };
    return userDetails;
  }
  return userDetails;
};
