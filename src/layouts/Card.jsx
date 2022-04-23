import React from "react";
import Grid from "@material-ui/core/Grid";

const Card = (props) => {
  const { number, carddata } = props;

  // const HandleCall = (event) => {
  //   if (id === 1) {
  //     return handleAllData();
  //   }
  //   if (id === 2) {
  //     return handlePendingData();
  //   }
  //   if (id === 3) {
  //   }
  //   if (id === 4) {
  //   }
  // };
  
  return (
    <React.Fragment>
      <Grid item xs={12} sm={3} >
        <div className="member">
          <div className="member-img">
            <img src="" className="img-fluid" alt="" />
            <div className="social"></div>
          </div>
          <div className="member-info">
            <h1>{number}</h1>
            <h4>{carddata}</h4>
          </div>
        </div>
      </Grid>
    </React.Fragment>
  );
};
export default Card;
