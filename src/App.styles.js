import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      "Quicksand",
      "-apple-system",
      "BlinkMacSystemFont",
      "Arial",
      "sans-serif",
    ].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#444444",
    },
    secondary: {
      main: "#b2ff59",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "capitalize",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.25)",
        },
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: "none",
      },
    },
  },
});
