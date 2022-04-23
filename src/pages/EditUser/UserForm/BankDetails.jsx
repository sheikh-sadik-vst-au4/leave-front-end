import React from "react";
import { Grid } from "@material-ui/core";
import Textfield from "../../../components/FormsUI/Textfield";

export default function BankDetails({ formik, edit }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Textfield
          name="bankName"
          label="Bank Name"
          formik={formik}
          disable={edit}
        />
      </Grid>
      <Grid item xs={12}>
        <Textfield
          name="accountNo"
          label="Account Number"
          formik={formik}
          disable={edit}
        />
      </Grid>
      <Grid item xs={12}>
        <Textfield
          name="ifscCode"
          label="IFSC"
          formik={formik}
          disable={edit}
        />
      </Grid>
    </Grid>
  );
}
