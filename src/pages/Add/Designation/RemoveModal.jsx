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
import { designationAction } from "../../../_actions";

const validationSchema = yup.object({
  previousId: yup
    .string("Please Select Designation name")
    .required("Designation name is required"),
  currentId: yup
    .string("Please Select Designation name")
    .required("Designation name is required"),
});

const CustomizedDialogs = ({
  open,
  handleClose,
  designationsList,
  previousDesignationId,
  confirmdesignation,
  handleClickdesignation
}) => {
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const filterDesignations = designationsList.filter(
    (designation) => designation._id !== previousDesignationId
  );
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      previousId: previousDesignationId,
      currentId: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(designationAction.removeDesignation(values));
      handleClose();
    },
  });
  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {confirmdesignation === false?
        <React.Fragment>
        <DialogTitle id="form-dialog-title" align="center">
          Confirm selection
        </DialogTitle>
        <DialogContent>
        <p>There are many employees belong to this designation, do you really want to delete it ?  </p>
        </DialogContent>
        <DialogActions>
            <Button type="submit" onClick={handleClickdesignation} color="primary">
              confirm
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </React.Fragment>:
        <React.Fragment>
        <DialogTitle id="form-dialog-title" align="center">
          Select Designation
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel id="designation-select-label">Designation</InputLabel>
              <Select
                labelId="designation-select-label"
                name="currentId"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.currentId && formik.touched.currentId}
              >
                {filterDesignations.map((item, pos) => {
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
          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary">
              change designation
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
