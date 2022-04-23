import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flex: "1 0 auto",
  },
}));

export default function CustumCard({ label, handleClickOpen }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} square>
      <CardContent className={classes.content} align="center">
        <Button onclick={handleClickOpen}>abc</Button>
        <IconButton>
          <AddCircleIcon color="primary" style={{ fontSize: "50px" }} />
        </IconButton>
        <Typography
          variant="h6"
          text
          gutterBottom
          style={{ textTransform: " uppercase" }}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
}
