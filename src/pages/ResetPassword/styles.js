import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(5, 5, 5, 5),
    padding: theme.spacing(5, 3, 5, 3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2, 0),
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "32%",
    left: "42%",
  },
}));
