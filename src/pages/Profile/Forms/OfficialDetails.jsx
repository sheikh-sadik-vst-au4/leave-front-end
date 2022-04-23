import { Grid, TextField } from "@material-ui/core";
import React from "react";

export default function OfficialDetails({ user }) {
  
  const joining = new Date(user &&user.joiningDate?user.joiningDate:null).toLocaleDateString()
  const probation = new Date(user &&user.probationEnd?user.probationEnd:null).toLocaleDateString()

  return (
    <Grid container spacing={3}>
      {/* <Grid item xs={12}>
        <TextField
          name="role"
          label="Role"
          fullWidth
          disabled
          value={user.role ? user.role.name : "Role"}
        />
      </Grid> */}
      <Grid item xs={12}>
        <TextField
          name="department"
          label="Department"
          fullWidth
          disabled
          value={user && user.department ? user.department.name : "department"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="designation"
          label="Designation"
          fullWidth
          disabled
          value={user && user.designation ? user.designation.name : "designation"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="joiningdate"
          label="Joining Date"
          fullWidth
          disabled
          value={joining ? joining : "joining date"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="probationEnd"
          label="Probation End"
          fullWidth
          disabled
          value={probation ? probation : "probation end"}
        />
      </Grid>
    </Grid>
  );
}
