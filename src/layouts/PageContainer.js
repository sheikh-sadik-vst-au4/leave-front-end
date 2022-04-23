import React from "react";
// import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageheading: {
    fontWeight: 700,
    margin: theme.spacing(2),
    fontSize: "20px",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: theme.spacing(3),
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
  },
}));

const PageContainer = ({ children, pageheading }) => {
  const classes = useStyles();
  // const location = useLocation();

  return (
    <div className="container" data-aos="fade-up">
      <main className={classes.layout}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          className={classes.pageheading}
          color="primary"
        >
          {pageheading}
        </Typography>
        <hr></hr>
        {children}
      </main>
    </div>
  );
};

export default PageContainer;
