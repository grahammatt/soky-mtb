import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { HeaderBar } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { getTrailData } from "./utils/kymbaScraper.js";
import { theme } from "./App.styles";

const App = () => {
  const { trails } = useSelector((state) => state);
  const dispatch = useDispatch();

  //run once, on component mount
  useEffect(() => {
    getTrailData(dispatch);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderBar />
      {JSON.stringify(trails)}
    </ThemeProvider>
  );
};

export default App;
