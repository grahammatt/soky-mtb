import { red, yellow, green, blue } from "@material-ui/core/colors";

export const conditionsMap = {
  "Good - go ride": {
    status: "Good",
    message: "Go ride",
    color: green["A400"],
    icon: "biking-mountain",
  },
  "Freeze/Thaw - ride early or night when frozen only": {
    status: "Freeze/Thaw",
    message: "Ride early or night, when frozen only",
    color: blue["A700"],
    icon: "snowflakes",
  },
  "Ride with Caution - Some portions of trail still wet": {
    status: "Caution",
    message: "Some portions of trail still wet",
    color: yellow[600],
    icon: "exclamation-triangle",
  },
  "Wet - do not ride": {
    status: "Wet",
    message: "Do not ride",
    color: red[500],
    icon: "cloud-showers",
  },
};
