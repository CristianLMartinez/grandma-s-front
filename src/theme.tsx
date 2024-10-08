import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#110d0c",
    },
    secondary: {
      main: "#ffffff",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: red.A400,
    },
  },
});

export default theme;
