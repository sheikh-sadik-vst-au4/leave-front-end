import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  Yup.object().shape({
    name: Yup.string()
      .min(2, "Must be atlease 2 character")
      .max(15, "Must be 15 charcter or less")
      .required("First name is Required"),
   
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    phoneNo: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Phone Number is Required"),
    dob: Yup.date().required("Date of Birth is Required"),
    gender: Yup.string().required("Gender is Required"),
    addressVal: Yup.string().required("Address is Required"),
    city: Yup.string().required("City is Required"),
    state: Yup.object().required("State is Required"),
    country: Yup.object().required("Country is Required"),
    pincode: Yup.number("pincode must be a number type").required(
      "Pincode is Required"
    ),
  }),
  Yup.object().shape({
    personalEmail: Yup.string()
      .email("Invalid email address")
      .required("Email or Username is Required"),
    joiningDate: Yup.date().required("Joining Date of Birth is Required"),
    designation: Yup.object().required("Designation is Required"),
    department: Yup.object().required("Department is Required"),
    role: Yup.object().required("Role is Required"),
    ifscCode: Yup.string().required("IFSC is Required"),
    bankName: Yup.string().required("Bank Name is Required"),
    password: Yup.string()
      .min(6, "Must be atlease 6 character")
      .required("password is Required"),
    accountNo: Yup.number("Account No must be a number type")
      .positive("must be positive number")
      .integer("must be number")
      .min(8, "must be eight digits")
      .required("Account Number is Required"),
    reaccountNo: Yup.number("Account No must be a number type")
      .oneOf([Yup.ref("accountNo"), null], "Account Number Must Match")
      .integer("must be number")
      .positive("must be positive number")
      .required("Account Number is Required"),
  }),
];
