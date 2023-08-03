import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: "light",
    background: "#f1feff",
    colorTittle: "#0A192F",
    fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',

    colorSubTittle: "#0A192F",
    colorDescription: "#0A192F",
    colorContent: "#2E3A59",
    colorContrast: "#0b786f",
    colorHoverContrast: "#0b786f1a",
    colorCardBackground: "#c7dad9",
    colorItemHeader: "#0A192F",
  },
});

export default lightTheme;