import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
// Components
import TittleHeader from "../atoms/TittleHeader";
import ResponsiveTittleHeader from "../atoms/ResponsiveTittleHeader";
import ResponsiveMenu from "../molecules/ResponsiveMenu";
import MenuHeader from "../molecules/MenuHeader";
import Languages from "../atoms/Languages";
// Switch
import SwitchTheme from "../atoms/Switch";
// Store
import { useSelector } from "react-redux/es/hooks/useSelector";
// Theme
import { useTheme } from "@emotion/react";

function Header() {
  const theme = useTheme();
  // Language
  const language = useSelector((state) => state.language.language);

  const pageHome = language === "english" ? "home" : "inicio";
  const pageAbout = language === "english" ? "about" : "sobre mi";
  const pageSkills = language === "english" ? "skills" : "habilidades";
  const pageProjects = language === "english" ? "projects" : "proyectos";
  const pageContact = language === "english" ? "contact" : "contacto";

  const pages = [
    { page: pageHome, route: "" },
    { page: pageAbout, route: "about" },
    { page: pageProjects, route: "projects" },
    { page: pageSkills, route: "skills" },
    { page: pageContact, route: "contact" },
  ];

  return (
    <AppBar
      style={{
        backgroundColor: theme.palette.background,
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Icono  */}
          <ApiOutlinedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            style={{ color: theme.palette.colorContrast }}
          />
          {/* Cabana  */}
          <TittleHeader />
          {/* Menú responsive */}
          <ResponsiveMenu pages={pages} />
          {/* Icono responsive  */}
          <ApiOutlinedIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          {/* Titulo Responsivo  */}
          <ResponsiveTittleHeader />
          {/* Menú */}
          <MenuHeader pages={pages} />
          {/* Set Language  */}
          <Languages />
          {/* Set Theme  */}
          <SwitchTheme />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
