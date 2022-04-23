import * as Yup from "yup";

export const ApplyLeaveValidationSchemaForMultiple = Yup.object().shape({
  leaveType: Yup.string().required("Leave Type is Required"),
  fromDate: Yup.date().required("From Date Is Required"),
  toDate: Yup.date().min(
    Yup.ref("fromDate"),
    "end date can't be before start date"
  ),
  reason: Yup.string().required("Leave Type is Required"),
});

export const ApplyLeaveValidationSchemaForSingle = Yup.object().shape({
  leaveType: Yup.string().required("Leave Type is Required"),
  fromDate: Yup.date().required("From Date Is Required"),
  reason: Yup.string().required("Leave Type is Required"),
});
