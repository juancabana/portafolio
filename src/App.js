import AppRouter from "./routes/AppRoutes";
import { styled } from "@mui/material/styles";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
// Redux
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Fetch info 
import { fetchHomeEnglish } from "./store/slices/home";
import { fetchAboutEnglish } from "./store/slices/about";
import { fetchSkillsEnglish } from "./store/slices/skills";
import { fetchProjectsEnglish } from "./store/slices/projects";

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


  
  useEffect(() => {
    dispatch(fetchHomeEnglish());
    dispatch(fetchAboutEnglish());
    dispatch(fetchSkillsEnglish());
    dispatch(fetchProjectsEnglish());
  }, [])

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
