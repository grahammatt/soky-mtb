import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { conditionsMap } from "../../utils/trailConditions";
import { useStyles } from "./TrailCard.styles";

const TrailCard = ({ trail }) => {
  const condition = conditionsMap[trail.status];
  const classes = useStyles({ color: condition.color });

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon size="lg" icon={["fal", condition.icon]} />
          </Avatar>
        }
        title={trail.name}
        subheader={condition.status}
        titleTypographyProps={{ variant: "h6" }}
        subheaderTypographyProps={{ variant: "subtitle1" }}
      />
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {condition.message}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Last Updated: {trail.updated}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrailCard;
