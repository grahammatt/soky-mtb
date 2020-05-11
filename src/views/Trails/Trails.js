import React from "react";
import { Grid } from "@material-ui/core";
import { TrailCard } from "../../components";
import { useSelector } from "react-redux";
//import { useStyles } from "./Trails.styles";

const Trails = () => {
  const { trails } = useSelector((state) => state);
  return (
    <Grid container spacing={2}>
      {trails.map((trail) => (
        <Grid item xs={12} sm={6} md={4}>
          <TrailCard trail={trail} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Trails;
