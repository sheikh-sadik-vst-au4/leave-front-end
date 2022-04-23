import { Link, Typography } from "@material-ui/core";
import React from "react";

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.jploft.com"
        style={{ textDecoration: "none" }}
      >
        Jploft.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
      <span> All rights reserved.</span>
    </Typography>
  );
}

export default Footer;
