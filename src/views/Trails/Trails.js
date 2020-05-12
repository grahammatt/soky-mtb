import React from "react";
import { Grid } from "@material-ui/core";
import { TrailCard } from "../../components";
import { useSelector } from "react-redux";
import { useStyles } from "./Trails.styles";

const Trails = () => {
  const classes = useStyles();
  const { trails } = useSelector((state) => state);
  return (
    <Grid container spacing={2} className={classes.root}>
      {trails.map((trail) => (
        <Grid key={trails.name} item xs={12} sm={6} md={4}>
          <TrailCard trail={trail} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Trails;
