import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: "#0f172a",
    colorTittle: "#e1e8f0",
    fontFamily:
      "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
    colorSubTittle: "#e1e8f0",
    colorDescription: "#ccd6f6",
    colorContent: "#8892b0",
    colorContrast: "#7fffd4",
    colorHoverContrast: "#16333f",
    colorCardBackground: "#171f32",
    colorItemHeader: "#e1e8f0",
    colorBorder: "#348c9c",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
  },
});

export default darkTheme;

