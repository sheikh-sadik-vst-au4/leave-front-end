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

export default function AddRole({ handleClickOpen, roles }) {
  return (
    <>
      <Card square>
        <CardContent align="center">
          <IconButton onClick={() => handleClickOpen("role")}>
            <AddCircleIcon color="primary" style={{ fontSize: "50px" }} />
          </IconButton>
          <Typography
            variant="h4"
            text
            gutterBottom
            style={{ textTransform: " uppercase" }}
          >
            add role
          </Typography>
        </CardContent>
      </Card>
      <Paper square>
        <List>
          {!roles
            ? []
            : roles.map((item, pos) => {
                return (
                  <>
                    <ListItem>
                      <ListItemText primary={item.name} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
        </List>
      </Paper>
    </>
  );
}
