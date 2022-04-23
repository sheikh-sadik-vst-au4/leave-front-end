import React , {useEffect} from "react";
// import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { LinearProgress } from "@material-ui/core";
import DataTable from "react-data-table-component";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { leaveAction } from "../../_actions";

const sortIcon = <ArrowDownward />;

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

export default function TableLayout(props) {
  const [open, setOpen] = React.useState(false);

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { LeaveHistoryData } = props;
  const alert = useSelector((state)=>state.alert?state.alert:'')
  const dispatch = useDispatch();
  const history = useHistory()
  useEffect(() => {
    
    if(alert.type=== "success"){
      if(props.value === 0){
      dispatch(leaveAction.leavedetails("Pending"));
      }else if (props.value === 1){
        dispatch(leaveAction.leavedetails("Approved"));
      }else if (props.value === 2){
        dispatch(leaveAction.leavedetails("Rejected"));
      }
    }
  }, [alert, dispatch]);
  const deleteLeaveById = (id) => {
    
    dispatch(leaveAction.deleteLeave(id));
    
    
  };
   
  const heading = [
    {
      name: "Sr. No",
      wrap: true,
      sortable: true,
      cell: (row, index) => index + 1,
    },

    {
      name: "Leave Type",
      selector: "leaveType.name",
      wrap: true,
      sortable: true,
    },
    {
      name: "Start Date",
      wrap: true,
      sortable: true,
      center: true,
      cell: (LeaveHistoryData) =>
        new Date(LeaveHistoryData.fromDate).toLocaleDateString(),
    },
    {
      name: "End Date",
      wrap: true,
      sortable: true,
      center: true,
      cell: (LeaveHistoryData) => {
        let blank = "-";
        if (LeaveHistoryData.toDate) {
          return new Date(LeaveHistoryData.toDate).toLocaleDateString();
        } else {
          return blank;
        }
      },
    },
    {
      name: "No. of Days",
      selector: "days",
      wrap: true,
      sortable: true,
      center: true,
    },
    {
      name: " ",
      selector: "_id",
      right: true,
      cell: (LeaveHistoryData) => (
        <Link to={"/index/leave-history/" + LeaveHistoryData._id}>
          <ChevronRightIcon />
        </Link>
      ),
    },
    {
      name: " ",
      selector: "_id",
      right: true,
      cell: (LeaveHistoryData) => (
        <>
        <Button onClick={handleClickOpen} >
          <DeleteOutlineIcon />
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure want to delete ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={e => deleteLeaveById(LeaveHistoryData._id)} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </>
      ),
    },
  ];

  // const classes = useStyles();

  return (
    <>
      {!LeaveHistoryData ? (
        <LinearProgress color="primary" />
      ) : (
        <DataTable
          columns={heading}
          data={LeaveHistoryData}
          defaultSortField="leaveType.name"
          pagination
          paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
          noHeader={true}
          sortIcon={sortIcon}
          ignoreRowClick={true}
          onRowClicked={e => history.push("/index/leave-history/" + e._id)}
          striped={true}
          highlightOnHover={true}
          responsive={true}
        />
      )}
    </>
  );
}
