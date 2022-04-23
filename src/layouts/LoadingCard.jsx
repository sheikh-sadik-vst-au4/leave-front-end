import React from "react";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(5),
    },
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));

const Card = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <Grid item xs={12} sm={3}>
        <div className="member" style={{ minHeight: "135px" , textAlign:"centre" }}>
          <div className="member-img">
            <img src="" className="img-fluid" alt="" />
            <div className="social"></div>
          </div>
          <div className="member-info">
            <div className={classes.wrapper}>
              <CircularProgress size={24} className={classes.buttonProgress} />
            </div>
          </div>
        </div>
      </Grid>
    </React.Fragment>
  );
};
export default Card;
