import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: '#030303',
    colorTittle: '#ccd6f6',
    fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    colorSubTittle: '#ccd6f6',
    colorDescription: '#ccd6f6',
    colorContent: '#8892b0',
    colorContrast: '#7fffd4',
    colorHoverContrast: '#64ffda1a',
    colorCardBackground: '#001026',
    colorItemHeader: '#FFFFFF',
    colorBorder: '#0c2242'
  },
});

export default darkTheme;