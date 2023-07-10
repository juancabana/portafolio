import AppRouter from "./routes/AppRoutes";
import { styled } from "@mui/material/styles";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
// Redux
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Fetch info
import { fetchHomeEnglish, fetchHomeSpanish } from "./store/slices/home";
import { fetchAboutEnglish, fetchAboutSpanish } from "./store/slices/about";
import { fetchSkillsEnglish, fetchSkillsSpanish } from "./store/slices/skills";
import {
  fetchProjectsEnglish,
  fetchProjectsSpanish,
} from "./store/slices/projects";
// Store
import { useSelector } from "react-redux/es/hooks/useSelector";
// Themes 
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 980,
      lg: 1200,
      xl: 1536,
    },
  },
});

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const isDarkMode = useSelector((state) => state.theme.theme);

  const theme = isDarkMode === 'dark' ? darkTheme : lightTheme;
  // const theme = darkTheme;
  // const theme = lightTheme;

  const englishMode = () => {
    dispatch(fetchHomeEnglish());
    dispatch(fetchAboutEnglish());
    dispatch(fetchSkillsEnglish());
    dispatch(fetchProjectsEnglish());
  };
  const spanishhMode = () => {
    dispatch(fetchHomeSpanish());
    dispatch(fetchAboutSpanish());
    dispatch(fetchSkillsSpanish());
    dispatch(fetchProjectsSpanish());
  };

  useEffect(() => {
    language === "spanish" ? spanishhMode() : englishMode();
  }, [language]);

  const AppContainer = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background,
    margin: "0%",
  }));

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <AppRouter />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
