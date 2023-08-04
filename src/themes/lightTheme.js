import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: "light",
    background: "#F6FAFD",
    colorTittle: "#333333",
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    colorSubTittle: "#333333",
    colorDescription: "#333333",
    colorContent: "#555555",
    colorContrast: "#007f6eff",
    colorHoverContrast: "#007f6e1a",
    colorCardBackground: "#FFFFFF",
    colorItemHeader: "#000000",
    colorBorder: "#DEDFD2",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
});

export default lightTheme;
