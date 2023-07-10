import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: "light",
    // Personaliza los colores de tu tema light aquí
    background: "#FFFFFF",
    colorTittle: "#0A192F",
    colorSubTittle: "#0A192F",
    colorDescription: "#0A192F",
    colorContent: "#2E3A59", // Color de contenido más oscuro
    colorContrast: "#0b786f", // Color de contraste más oscuro
    colorHoverContrast: "#0b786f1a",
    colorCardBackground: "#F3F5F9",
    colorItemHeader: "#0A192F",
  },
});

export default lightTheme;