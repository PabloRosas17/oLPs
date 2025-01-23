import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#0f0f0f",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: "#f0f0f0",
          fontFamily: "'Roboto', sans-serif",
        },
        ".App": {
          backgroundColor: "#f0f0f0",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  },
});

export default theme;