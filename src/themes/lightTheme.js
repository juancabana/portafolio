import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: "light",
    background: '#F0F0F0',
    colorTittle: '#333333',
    fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    colorSubTittle: '#333333',
    colorDescription: '#333333',
    colorContent: '#555555',
    colorContrast: '#007f6eff',
    colorHoverContrast: '#007f6e1a',
    colorCardBackground: '#FFFFFF',
    colorItemHeader: '#000000',
    colorBorder: '#DDDDDD',
  }
});

export default lightTheme;