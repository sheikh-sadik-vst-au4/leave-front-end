// import React from "react";
// import * as yup from "yup";
// import { useFormik } from "formik";

// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Button,
//   TextField,
//   Grid,
//   Paper,
//   FormControl,
//   Select,
//   InputLabel,
//   FormHelperText,
//   MenuItem,
// } from "@material-ui/core";
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormLabel from "@material-ui/core/FormLabel";

// const validationSchema = yup.object({
//   leaveType: yup
//     .string("Enter leaveType name")
//     .required("leaveType name is required"),

//   dayType: yup.string("Enter dayType name").required("dayType is required"),
//   leavesReduced: yup
//     .number()
//     .positive()
//     .min(0)
//     .required("leavesReduced is required"),
//   date: yup.date().required("Date is required"),
// });

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       marginTop: theme.spacing(2),
//       marginBottom: theme.spacing(6),
//       padding: theme.spacing(3),
//     },
//   },
// }));

// const SuddenLeaveForm = ({ leaveTypes, userList, name, Id }) => {
//   const classes = useStyles();
//   const initialValues = {
//     leaveType: "",
//     employeeId: Id,
//     employeeName: name,
//     dayType: "",
//     leavesReduced: "",
//     date: new Date(),
//   };

//   const formik = useFormik({
//     initialValues: initialValues,

//     validationSchema: validationSchema,
//     enableReinitialize: true,
//     onSubmit: (values) => {
//       const request = {
//         leaveType: values.leaveType,
//         employee: values.employeeId,

//         dayType: values.dayType,
//         leavesReduced: values.leavesReduced,
//         date: values.Date,
//       };
//       alert(JSON.stringify(request));
//       // dispatch(suddenLeaveAction.createSuddenLeave(values));
//     },
//   });

//   return (
//     <Paper className={classes.paper} square>
//       <form onSubmit={formik.handleSubmit}>
//         <Grid container spacing={2} justify="right">
//           <Grid item sm={12}>
//             <FormControl fullWidth>
//               <InputLabel>Leave Type</InputLabel>
//               <Select
//                 name="leaveType"
//                 value={formik.values.leaveType}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.errors.leaveType && formik.touched.leaveType}
//               >
//                 {!leaveTypes
//                   ? null
//                   : leaveTypes.map((item, pos) => {
//                       return (
//                         <MenuItem value={item._id} key={pos}>
//                           {item.name}
//                         </MenuItem>
//                       );
//                     })}
//               </Select>
//               <FormHelperText error>
//                 {formik.errors.leaveType &&
//                   formik.touched.leaveType &&
//                   formik.errors.leaveType}
//               </FormHelperText>
//             </FormControl>
//           </Grid>

//           <Grid item sm={12}>
//             {/* <FormControl fullWidth>
//               <InputLabel>User</InputLabel>
//               <Select
//                 name="employee"

//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.errors.employee && formik.touched.employee}
//               >
//                 {!userList
//                   ? null
//                   : userList.map((item, pos) => {
//                       return (
//                         <MenuItem value={item._id} key={pos}>
//                           {item.name}
//                         </MenuItem>
//                       );
//                     })}
//               </Select>
//               <FormHelperText error>
//                 {formik.errors.employee &&
//                   formik.touched.employee &&
//                   formik.errors.employee}
//               </FormHelperText>
//             </FormControl> */}

//             <TextField
//               fullWidth
//               name="employeeName"
//               type="text"
//               label="User"
//               value={formik.values.employeeName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.employeeName &&
//                 Boolean(formik.errors.employeeName)
//               }
//               helperText={
//                 formik.touched.employeeName && formik.errors.employeeName
//               }
//               disabled
//             />
//           </Grid>

//           <Grid item sm={6}>
//             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//               <KeyboardDatePicker
//                 fullWidth
//                 disablePast="true"
//                 name="date"
//                 label="Date of Leave"
//                 format="dd/MM/yyyy"
//                 value={formik.values.date}
//                 onChange={(value) => formik.setFieldValue("date", value)}
//                 KeyboardButtonProps={{
//                   "aria-label": "change date",
//                 }}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.date && Boolean(formik.errors.date)}
//                 helperText={formik.touched.date && formik.errors.date}
//               />
//             </MuiPickersUtilsProvider>
//           </Grid>
//           <Grid item sm={6}>
//             <FormControl fullWidth>
//               <FormControl component="fieldset">
//                 <FormLabel component="legend">Day</FormLabel>
//                 <RadioGroup
//                   row
//                   aria-label="position"
//                   name="position"
//                   defaultValue="top"
//                   value={formik.dayType}
//                 >
//                   <FormControlLabel
//                     value={"1"}
//                     name="fromDateType"
//                     onChange={formik.handleChange}
//                     control={<Radio color="primary" />}
//                     label="First Half Leave"
//                   />
//                   <FormControlLabel
//                     value={"2"}
//                     name="fromDateType"
//                     onChange={formik.handleChange}
//                     control={<Radio color="primary" />}
//                     label="Second Half Leave"
//                   />
//                   <FormControlLabel
//                     value={"3"}
//                     name="fromDateType"
//                     onChange={formik.handleChange}
//                     control={<Radio color="primary" />}
//                     label="Full Day Leave"
//                   />
//                 </RadioGroup>
//               </FormControl>

//               {/* <Select
//                 name="dayType"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.errors.dayType && formik.touched.dayType}
//               >
//                 {[
//                   { name: "First Half Day", value: 1 },
//                   { name: "Second Half Day", value: 2 },
//                   { name: "Full Day", value: 3 },
//                 ].map((item, pos) => {
//                   return (
//                     <MenuItem value={item.value} key={pos}>
//                       {item.name}
//                     </MenuItem>
//                   );
//                 })}
//               </Select> */}
//               <FormHelperText error>
//                 {formik.errors.dayType &&
//                   formik.touched.dayType &&
//                   formik.errors.dayType}
//               </FormHelperText>
//             </FormControl>
//           </Grid>

//           <Grid item sm={12}>
//             <TextField
//               fullWidth
//               name="leavesReduced"
//               type="number"
//               label="leaves Reduced"
//               value={formik.values.leavesReduced}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.leavesReduced &&
//                 Boolean(formik.errors.leavesReduced)
//               }
//               helperText={
//                 formik.touched.leavesReduced && formik.errors.leavesReduced
//               }
//             />
//           </Grid>
//           <Grid align="right" item>
//             <Button type="submit" color="primary" variant="contained">
//               Add
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Paper>
//   );
// };

// export default SuddenLeaveForm;
