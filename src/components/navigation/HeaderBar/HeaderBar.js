import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
//import { useStyles } from "./HeaderBar.styles";

const HeaderBar = () => {
  //const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">SKYMB Trails</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
