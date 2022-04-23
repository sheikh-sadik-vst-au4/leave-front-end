import React from "react";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  FormHelperText,
  Button,
} from "@material-ui/core";
// import {
//   FormControl,
//   Button,
//   InputLabel,
//   Select,
//   FormHelperText,
//   MenuItem,
// } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { departmentAction } from "../../../_actions";

const validationSchema = yup.object({
  previousId: yup
    .string("Please Select Department name")
    .required("Department name is required"),
  currentId: yup
    .string("Please Select Department name")
    .required("Department name is required"),
});

const CustomizedDialogs = ({
  open,
  handleClose,
  departmentsList,
  previousDepartmentId,
  handleClick,
  confirm,
}) => {
  const dispatch = useDispatch();
  const filterDepartments = departmentsList.filter(
    (department) => department._id !== previousDepartmentId
  );
  
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      previousId: previousDepartmentId,
      currentId: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(departmentAction.removeDepartment(values));
      handleClose();
    },
  });

  


  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        
      >
        
        {confirm === false?
        <React.Fragment>
        <DialogTitle id="form-dialog-title" align="center">
          Confirm selection
        </DialogTitle>
        <DialogContent>
         <p>There are many employees belong to this deparment, do you really want to delete it ? </p>
        </DialogContent>
        <DialogActions>
            <Button type="submit" onClick={handleClick} color="primary">
              confirm
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </React.Fragment>:
        <React.Fragment>
        <DialogTitle id="form-dialog-title" align="center">
          Select Department
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel id="department-select--label">Department</InputLabel>
              <Select
                labelId="department-select--label"
                name="currentId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.currentId && formik.touched.currentId}
              >
                {filterDepartments.map((item, pos) => {
                  return (
                    <MenuItem value={item._id} key={pos}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText error>
                {formik.errors.currentId &&
                  formik.touched.currentId &&
                  formik.errors.currentId}
              </FormHelperText>
            </FormControl>

            {/* <TextField
              margin="dense"
              autoFocus
              fullWidth
              id="name"
              name="name"
              label="Department Name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            /> */}
          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary">
              change department
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </form>
        
        </React.Fragment>
      }
      </Dialog>
    </div>
  );
};

export default CustomizedDialogs;
