import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { useStyles } from "./HeaderBar.styles";

const TrailCard = ({ trail }) => {
  //const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <FontAwesomeIcon icon={["fad", "biking-mountain"]} />
          </Avatar>
        }
        title={trail.name}
        subheader={trail.status}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          Last Updated: {trail.updated}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrailCard;
