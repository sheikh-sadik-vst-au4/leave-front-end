import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function index() {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography gutterBottom>Name</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography gutterBottom>Name</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography gutterBottom>Name</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography gutterBottom>Name</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
