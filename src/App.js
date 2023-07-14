import AppRouter from "./routes/AppRoutes";
import { styled } from "@mui/material/styles";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
// Redux
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Fetch info
import { setHomeEnglish, setHomeSpanish } from "./store/slices/home";
import { setAboutEnglish, setAboutSpanish } from "./store/slices/about";
import { setSkillsEnglish, setSkillsSpanish } from "./store/slices/skills";
import {
  setProjectsEnglish,
  setProjectsSpanish,
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
    dispatch(setHomeEnglish(data.home));
    dispatch(setAboutEnglish(data.about));
    dispatch(setSkillsEnglish(data.skills));
    dispatch(setProjectsEnglish(data.projects));
  };
  const setInfoSpanish = (data) => {
    dispatch(setHomeSpanish(data.home));
    dispatch(setAboutSpanish(data.about));
    dispatch(setSkillsSpanish(data.skills));
    dispatch(setProjectsSpanish(data.projects));
  };

  const englishMode = async () => {
    setInfoSpanish({ home: {}, about: {}, skills: [], projects: [] });
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
    setInfoEnglish({ home: {}, about: {}, skills: [], projects: [] });
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
