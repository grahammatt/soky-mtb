import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrailData } from "./utils/kymbaScraper.js";

const App = () => {
  const { trails } = useSelector((state) => state);
  const dispatch = useDispatch();

  //run once, on component mount
  useEffect(() => {
    getTrailData(dispatch);
  }, []);

  return <div>{JSON.stringify(trails)}</div>;
};

export default App;
