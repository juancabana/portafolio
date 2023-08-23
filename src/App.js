/* eslint-disable react-hooks/exhaustive-deps */
import AppRouter from "./routes/AppRoutes";
import { styled } from "@mui/material/styles";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
// Redux
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Fetch info
import { setEnglish, setSpanish } from "./store/slices/data";
// Store
import { useSelector } from "react-redux/es/hooks/useSelector";
// Themes
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const isDarkMode = useSelector((state) => state.theme.theme);

  const theme = isDarkMode === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    language === "spanish" ? dispatch(setSpanish()) : dispatch(setEnglish());
  }, [language]);

  const AppContainer = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background,
  }));

  return (
    <ThemeProvider theme={theme}>
      <AppContainer className="w-screen">
        <AppRouter />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
