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
import { leaveTypeAction } from "../../../_actions";

const validationSchema = yup.object({
  name: yup
    .string("Enter LeaveType name")
    .required("LeaveType name is required"),
});

const UpdateModal = ({ openLeaveTypeModal, handleClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { name: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(leaveTypeAction.setLeaveType(values));
      handleClose();
    },
  });
  return (
    <div>
      <Dialog
        open={openLeaveTypeModal}
        fullWidth
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Leave Type</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <TextField
              margin="dense"
              autoFocus
              fullWidth
              id="name"
              name="name"
              label="Leave Type Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary">
              Add Leave Type
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

export default UpdateModal;
