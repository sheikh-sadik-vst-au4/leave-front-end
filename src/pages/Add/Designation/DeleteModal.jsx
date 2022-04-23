import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function DeleteDialog({
  open,
  handleClose,
  deleteDesignationById,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this designation?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={deleteDesignationById} color="primary">
            confirm
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
