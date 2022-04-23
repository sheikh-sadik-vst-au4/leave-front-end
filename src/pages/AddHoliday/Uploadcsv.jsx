import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Button, CircularProgress, Grid, Paper } from "@material-ui/core";
import { holidayAction } from "../../_actions";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

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
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "20%",
    left: "40%",
  },
}));

const Uploadcsv = () => {
  const classes = useStyles();
  // const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) =>
    state.holidays && state.holidays.loading ? state.holidays.loading : false
  );
  // process CSV data
  const processData = (dataString) => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(
      /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
    );

    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(
        /,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/
      );
      if (headers && row.length === headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] === '"') d = d.substring(1, d.length - 1);
            if (d[d.length - 1] === '"') d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }

        // remove the blank rows
        if (Object.values(obj).filter((x) => x).length > 0) {
          list.push(obj);
        }
      }
    }

    // prepare columns list from headers
    // const columns = headers.map((c) => ({
    //   name: c,
    //   selector: c,
    // }));

    setData(list);
    // setColumns(columns);
  };
  // handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      processData(data);
    };
    reader.readAsBinaryString(file);
  };

  const handleAddHoliday = () => {
    if (data.length !== 0) {
      dispatch(
        holidayAction.setMultiHoliday({
          holidays: data,
        })
      );
      setData([]);
    } else {
      alert("choose file please");
    }
  };

  return (
    <>
      <Paper className={classes.paper} square>
        <Grid container spacing={2}>
          <Grid item>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileUpload}
            />
          </Grid>
          <Grid item>
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                component="label"
                color="primary"
                onClick={handleAddHoliday}
                disabled={isLoading}
              >
                Upload File
              </Button>
              {isLoading === true && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Uploadcsv;
