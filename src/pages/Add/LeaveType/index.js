import React from "react";

import {
  Card,
  CardContent,
  IconButton,
  ListItem,
  List,
  ListItemText,
  Divider,
  Paper,
  Typography,
  ListItemSecondaryAction,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function AddLeaveType({
  handleClickOpen,
  leaveTypes,
  deleteLeaveType,
  editLeaveType,
}) {
  return (
    <React.Fragment>
      <Card square>
        <CardContent align="center">
          <IconButton onClick={() => handleClickOpen("leavetype")}>
            <AddCircleIcon color="primary" style={{ fontSize: "50px" }} />
          </IconButton>
          <Typography
            variant="h4"
            text
            gutterBottom
            style={{ textTransform: " uppercase" }}
          >
            add Leave Type
          </Typography>
        </CardContent>
      </Card>
      <Paper square>
        <List>
          {!leaveTypes
            ? []
            : leaveTypes.map((item, pos) => {
                return (
                  <>
                    <ListItem key={pos}>
                      <ListItemText primary={item.name} />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="edit"
                          onClick={() => {
                            editLeaveType(item._id);
                          }}
                        >
                          <EditIcon color="primary" />
                        </IconButton>
                        {/* <IconButton
                          edge="end"
                          color="secondary"
                          aria-label="delete"
                          value={item._id}
                          onClick={deleteLeaveType}
                        >
                          <DeleteIcon />
                        </IconButton>  */}
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
        </List>
      </Paper>
    </React.Fragment>
  );
}
