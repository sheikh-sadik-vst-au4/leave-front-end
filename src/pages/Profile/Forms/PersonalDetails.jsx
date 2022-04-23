import { Grid, TextField } from "@material-ui/core";
import React from "react";

export default function PersonalDetails({ user }) {
  // const { name } = user;
  // let userName = "";
  // if (user.name) {
  //   userName = name.split(" ");
  // }
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <TextField
          name="name"
          label="Name"
          fullWidth
          disabled
          value={user && user.name ? user.name : "Name"}
          // value={userName[0]}
        />
      </Grid>
      
      <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          fullWidth
          disabled
          value={user && user.personalEmail ? user.personalEmail : "Email"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="phoneNo"
          label="Contact Number"
          fullWidth
          disabled
          value={user && user.phoneNo ? user.phoneNo : "Contact Number"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="gender"
          label="Gender"
          fullWidth
          disabled
          value={user && user.gender ? user.gender : "Gender"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="dob"
          label="Date of Birth (MM/DD/YYYY)"
          fullWidth
          disabled
          value={
            user && user.dob ? new Date(user.dob).toLocaleDateString() : "Date of Birth"
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="personalEmail"
          label="Username"
          fullWidth
          disabled
          value={user && user.email ? user.email : "Username"}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="addressVal"
          label="Address Line"
          fullWidth
          disabled
          value={user && user.address ? user.address.val : "Address Line"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="city"
          label="City"
          fullWidth
          disabled
          value={user && user.address ? user.address.city : "City"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="state"
          label="State"
          fullWidth
          disabled
          value={user && user.address ? user.address.state.name : "State"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="country"
          label="Country"
          fullWidth
          disabled
          value={user && user.address ? user.address.country.name : "Country"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="pincode"
          label="Pin Code"
          fullWidth
          disabled
          value={user && user.address ? user.address.pincode : "Pin Code"}
        />
      </Grid>
    </React.Fragment>
  );
}
