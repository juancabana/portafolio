import React from 'react';
import Typography from '@mui/material/Typography';
// Theme 
import { useTheme } from '@emotion/react';

const TittleHeader = () => {
  
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: theme.palette.colorItemHeader,
        textDecoration: 'none',
      }}
    >
      CABANA
    </Typography>
  );
}

export default TittleHeader;