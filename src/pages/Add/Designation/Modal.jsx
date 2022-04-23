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
import { designationAction } from "../../../_actions";

const validationSchema = yup.object({
  name: yup
    .string("Enter Designation name")
    .required("Designation name is required"),
});

const CustomizedDialogs = ({ openDesignationModal, handleClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: false,
    initialValues: { name: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(designationAction.setDesignation(values));
      handleClose();
    },
  });
  return (
    <div>
      <Dialog
        fullWidth
        open={openDesignationModal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" align="center">
          Add Designation
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <TextField
              margin="dense"
              autoFocus
              fullWidth
              id="name"
              name="name"
              label="Designation Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary">
              ADD designation
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
