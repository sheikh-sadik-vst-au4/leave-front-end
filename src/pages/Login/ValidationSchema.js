import * as Yup from "yup";

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Must be atlease 6 character")
    .required("Password is Required"),
});
 
export default LoginValidationSchema