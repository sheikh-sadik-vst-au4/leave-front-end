import React from "react";
import Typography from "@material-ui/core/Typography";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

export default function Review({ empDetail }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Name</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {`${empDetail.firstName} ${empDetail.lastName}`}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography gutterBottom>E-mail</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.email}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Contact Number</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.phoneNo}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Date of Birth</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.dob.toLocaleDateString()}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Gender</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.gender}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Address</Typography>
            </TableCell>
            <TableCell>
              <Typography
                gutterBottom
                color="textSecondary"
                variant="subtitle2"
              >
                {` ${empDetail.addressVal},${empDetail.city},${empDetail.state.name},${empDetail.country.name} ${empDetail.pincode}`}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Department</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.department.name}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Designation</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.designation.name}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Role</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.role.name}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Date of Joining</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.joiningDate.toLocaleDateString()}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Username</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.personalEmail}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Password</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.password}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Bank Account Number</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.accountNo}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>Bank Name</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.bankName}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography gutterBottom>IFSC</Typography>
            </TableCell>
            <TableCell>
              <Typography gutterBottom color="textSecondary">
                {empDetail.ifscCode}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
