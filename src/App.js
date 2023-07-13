import AppRouter from "./routes/AppRoutes";
import { styled } from "@mui/material/styles";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
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
import { getDataEnglish, getDataSpanish } from "./services/index.services";

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const isDarkMode = useSelector((state) => state.theme.theme);

  const theme = isDarkMode === "dark" ? darkTheme : lightTheme;

  const setInfoEnglish = (data) => {
    dispatch(fetchHomeEnglish(data.home));
    dispatch(fetchAboutEnglish(data.about));
    dispatch(fetchSkillsEnglish(data.skills));
    dispatch(fetchProjectsEnglish(data.projects));
  };
  const setInfoSpanish = (data) => {
    dispatch(fetchHomeSpanish(data.home));
    dispatch(fetchAboutSpanish(data.about));
    dispatch(fetchSkillsSpanish(data.skills));
    dispatch(fetchProjectsSpanish(data.projects));
  };

  const englishMode = async () => {
    const dataString = localStorage.getItem("dataEnglish");
    const data = JSON.parse(dataString);
    if (dataString) {
      setInfoEnglish(data);
    } else {
      await getDataEnglish();
      englishMode();
    }
  };

  const spanishMode = async () => {
    const dataString = localStorage.getItem("dataSpanish");
    const data = JSON.parse(dataString);
    if (dataString) {
      setInfoSpanish(data);
    } else {
      await getDataSpanish();
      spanishMode();
    }
  };

  useEffect(() => {
    language === "spanish" ? spanishMode() : englishMode();
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
