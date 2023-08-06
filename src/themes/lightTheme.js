import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: "light",
    background: "#fff",
    colorTittle: "rgba(13, 88, 85)",
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    colorSubTittle: "#6b7c93",
    colorDescription: "#4a5568",
    colorContent: "#2e4057",
    colorContrast: "#1c2331",
    colorHoverContrast: "#d0d8e3",
    colorCardBackground: "#f2f5f8",
    colorItemHeader: "#2e4057",
    colorBorder: "#8fa1b3",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  }
  
});

export default lightTheme;
