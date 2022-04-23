import { Grid } from "@material-ui/core";
import React from "react";
import Textfield from "../../components/FormsUI/Textfield";

export default function LoginForm({ formik }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Textfield name="email" label="Email" formik={formik} />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Textfield
          name="password"
          label="Password"
          type="password"
          formik={formik}
        />
      </Grid>
    </Grid>
  );
}
