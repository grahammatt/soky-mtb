import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { HeaderBar } from "./components";
import { useDispatch } from "react-redux";
import { getTrailData } from "./utils/kymbaScraper.js";
import { theme, useStyles } from "./App.styles";
import { Trails } from "./views";
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //run once, on component mount
  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getTrailData(dispatch);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <HeaderBar />
        <div className={classes.toolbar} />
        <Trails />
      </div>
    </ThemeProvider>
  );
};

export default App;
