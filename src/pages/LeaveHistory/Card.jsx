import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 260,
    maxHeight: 115,
  },
});

export default function LinkCard({ cardHeading, getLeavesByStatus, color }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      square
      onClick={() => {
        getLeavesByStatus(cardHeading);
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            style={{
              textTransform: "uppercase",
              color: color,
              fontWeight: "700",
              fontSize: "20px",
            }}
            variant="h5"
            align="center"
          >
            {cardHeading}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
