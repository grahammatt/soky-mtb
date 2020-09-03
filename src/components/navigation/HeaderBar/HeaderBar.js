import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { useStyles } from "./HeaderBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { getTrailData } from "../../../utils/kymbaScraper";

const HeaderBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h5">SKYMB Trails</Typography>
        <span className={classes.spacer} />
        <IconButton onClick={() => getTrailData(dispatch)}>
          <FontAwesomeIcon
            className={classes.refresh}
            size="lg"
            icon={["fal", "sync-alt"]}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
