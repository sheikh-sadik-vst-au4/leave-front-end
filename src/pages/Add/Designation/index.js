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

export default function AddDesignation({
  handleClickOpen,
  designations,
  deleteDesignation,
  editDesignation,
}) {
  return (
    <React.Fragment>
      <Card square>
        <CardContent align="center">
          <IconButton onClick={() => handleClickOpen("designation")}>
            <AddCircleIcon color="primary" style={{ fontSize: "50px" }} />
          </IconButton>
          <Typography
            variant="h4"
            text
            gutterBottom
            style={{ textTransform: " uppercase" }}
          >
            add designation
          </Typography>
        </CardContent>
      </Card>
      <Paper square>
        <List>
          {!designations
            ? []
            : designations.map((item, pos) => {
                return (
                  <React.Fragment>
                    <ListItem key={pos}>
                      <ListItemText primary={item.name} />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="edit"
                          onClick={() => {
                            editDesignation(item._id);
                          }}
                        >
                          <EditIcon color="primary" />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          color="secondary"
                          onClick={() => deleteDesignation(item._id)}
                        >
                          <DeleteIcon />
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
