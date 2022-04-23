import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userProfileValidationSchema = Yup.object().shape({
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
  state: Yup.string().required("State is Required"),
  country: Yup.string().required("Country is Required"),
  pincode: Yup.number("pincode must be a number type").required(
    "Pincode is Required"
  ),
});
export default userProfileValidationSchema;
