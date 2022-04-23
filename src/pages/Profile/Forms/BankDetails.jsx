import { Grid, TextField } from "@material-ui/core";
import React from "react";

export default function BankDetails({ user }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          name="bankName"
          label="Bank Name"
          fullWidth
          disabled
          value={user && user.account ? user.account.bankName : "Bank Name"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="accountNo"
          label="Account Number"
          fullWidth
          disabled
          value={user && user.account ? user.account.accountNo : "Account Number"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="ifscCode"
          label="IFSC"
          fullWidth
          disabled
          value={user && user.account ? user.account.ifscCode : "IFSC"}
        />
      </Grid>
    </Grid>
  );
}
