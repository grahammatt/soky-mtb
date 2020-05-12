import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: `calc(100vw-${theme.spacing(4)})`,
  },
  avatar: {
    backgroundColor: (props) => props.color,
    //color: theme.palette.common.black,
    fontSize: "1.6rem",
    paddingBottom: "5px",
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
