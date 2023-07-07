import AppRouter from "./routes/AppRoutes";
import { styled } from "@mui/material/styles";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  const AppContainer = styled("div")(({ theme }) => ({
    backgroundColor: "#0a192f",
    margin: "0%",
  }));

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <AppRouter />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
