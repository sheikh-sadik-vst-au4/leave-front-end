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
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default function AddDepartment({
  handleClickOpen,
  departments,
  deleteDepartment,
  editDepartment,
  
}) {
  return (
    <React.Fragment>
      <Card square>
        <CardContent align="center">
          <IconButton
            onClick={() => {
              handleClickOpen("department");
            }}
          >
            <AddCircleIcon color="primary" style={{ fontSize: "50px" }} />
          </IconButton>
          <Typography
            variant="h4"
            text
            gutterBottom
            style={{ textTransform: " uppercase" }}
          >
            add Department
          </Typography>
        </CardContent>
      </Card>
      <Paper square>
        <List>
          {!departments
            ? []
            : departments.map((item, pos) => {
                return (
                  <React.Fragment>
                    <ListItem>
                      <ListItemText primary={item.name} />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="edit"
                          onClick={() => {
                            editDepartment(item._id);
                          }}
                        >
                          <EditIcon color="primary" />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          name="department"
                          onClick={() => {
                            deleteDepartment(item._id);
                          }}
                        >
                          <DeleteIcon color="secondary" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })}
        </List>
      </Paper>
    </React.Fragment>
  );
}
