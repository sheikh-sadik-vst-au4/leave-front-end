import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  RadioGroup,
} from "@material-ui/core";
import { Typography, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

import HolidayForm from "./HolidayForm";
import HolidayList from "./HolidayList";
import UpdateHolidayForm from "./UpdateHolidayForm";
import { holidayAction } from "../../_actions";
import PageContainer from "../../layouts/PageContainer";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import Uploadcsv from "./Uploadcsv";
import { useSnackbar } from "notistack";
import file from "../../assets/example.csv";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import { Radio } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    table: {
      minWidth: 650,
    },
  },
}));

const AddHoliday = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const alert = useSelector((state) => state.alert);
  const [updateFormVisible, setUpdateFormVisible] = useState(false);
  const [isSingle, setIsSingle] = useState("0");
  
  const [singleHoliday, setSingleHoliday] = useState({});

  const holidays = useSelector((state) =>
    state.holidays && state.holidays.holidaysList
      ? state.holidays.holidaysList
      : []
  );

  useEffect(() => {
    dispatch(holidayAction.getHolidays());
  }, [dispatch]);

  useEffect(() => {
    if (alert.status) {
      enqueueSnackbar(alert.message, {
        variant: alert.type,
        autoHideDuration: 3000,
      });
    }
  }, [alert, enqueueSnackbar]);

  const deleteHoliday = (ID) => {
    dispatch(holidayAction.deleteHoliday(ID));
  };

  const handleFormView = (e) => {
    setIsSingle(e.target.value);
  };

  const editHoliday = (ID) => {
    holidays.map((holiday) => {
      if (holiday._id === ID) {
        return setSingleHoliday({ ...holiday });
      }
      return null;
    });
    setUpdateFormVisible(true);
    setIsSingle("0");
  };

  const handleUpdateForm = () => {
    setUpdateFormVisible(false);
  };

  return (
    <>
      <Helmet>
        <title>Add Holiday | JPLOFT</title>
      </Helmet>
      <PageContainer pageheading="HOLIDAY">
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    <Typography
                      gutterBottom
                      style={{ fontWeight: "bold" }}
                      color="primary"
                    >
                      ADD OPTION
                    </Typography>
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="top"
                    value={isSingle}
                    onChange={handleFormView}
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="Add Single"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="Upload Excel File"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Divider />
            <br></br>
            {isSingle === "1" ? (
              <Grid container spacing={2}>
                <Grid item>
                  {/* <Typography
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                    color="primary"
                  >
                    ADD HOLIDAY FROM EXCEL FILE
                  </Typography> */}
                  <Typography
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                    color="primary"
                  >
                    <a
                      href={file}
                      download="example.csv"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Download Sample <GetAppOutlinedIcon />
                    </a>
                  </Typography>
                </Grid>
                <Grid item>
                  <Uploadcsv />
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                <Grid item>
                  {/* <Typography
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                    color="primary"
                  >
                    HOLIDAY FORM
                  </Typography> */}
                </Grid>
                <Grid item>
                  {updateFormVisible && holidays.length !== 0 ? (
                    <UpdateHolidayForm
                      handleUpdateForm={handleUpdateForm}
                      singleHoliday={singleHoliday}
                    />
                  ) : (
                    <HolidayForm />
                  )}
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold" }}
              color="primary"
            >
              LIST
            </Typography>
            {holidays.length !== 0 ? (
              <HolidayList
                holidays={holidays}
                deleteHoliday={deleteHoliday}
                editHoliday={editHoliday}
              />
            ) : (
              <Paper square>
                <Typography
                  variant="h4"
                  align="center"
                  color="secondary"
                  className={classes.paper}
                >
                  NO HOLIDAYS
                </Typography>
              </Paper>
            )}
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default connect()(AddHoliday);
