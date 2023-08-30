import React from "react";
import Typography from "@mui/material/Typography";
// Theme
import { useTheme } from "@emotion/react";

const ResponsiveTittleHeader = () => {
  const theme = useTheme();

  return (
    <Typography
      className="font-family-main"
      translate="no"
      variant="h5"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: theme.palette.colorItemHeader,
        textDecoration: "none",
      }}
    >
      CABANA
    </Typography>
  );
};

export default ResponsiveTittleHeader;
