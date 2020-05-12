import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderBar.styles";

const HeaderBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h5">SKYMB Trails</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
