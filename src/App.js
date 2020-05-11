import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { HeaderBar } from "./components";
import { useDispatch } from "react-redux";
import { getTrailData } from "./utils/kymbaScraper.js";
import { theme } from "./App.styles";
import { Trails } from "./views";
const App = () => {
  const dispatch = useDispatch();

  //run once, on component mount
  useEffect(() => {
    getTrailData(dispatch);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderBar />
      <Trails />
    </ThemeProvider>
  );
};

export default App;
