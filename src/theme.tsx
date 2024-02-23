import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000", // Change to your desired primary color
    },
    secondary: {
      main: "#ff4081", // Change to your desired secondary color
    },
  },
  typography: {
    fontFamily: "MadeTommyRegular, Roboto, sans-serif",
    fontSize: 14, // Change to your desired base font size
  },
});

export default theme;
