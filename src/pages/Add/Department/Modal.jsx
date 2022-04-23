import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { departmentAction } from "../../../_actions";

const validationSchema = yup.object({
  name: yup
    .string("Enter Department name")
    .required("Department name is required"),
});

const CustomizedDialogs = ({ openDepartmentModal, handleClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { name: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(departmentAction.setDepartment(values));
      handleClose();
    },
  });
  return (
    <div>
      <Dialog
        fullWidth
        open={openDepartmentModal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" align="center">
          Add Department
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <TextField
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
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary">
              ADD department
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CustomizedDialogs;
