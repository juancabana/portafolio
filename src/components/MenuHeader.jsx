import React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import {  NavLink } from 'react-router-dom';
// Theme 
import { useTheme } from '@emotion/react';

const MenuHeader = ({ pages }) => {
  const theme = useTheme();

  const ButtonActive = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.colorItemHeader,
    display: 'block',
    width: 'auto',
    height: '67px',
    // Estilos adicionales para el enlace activo
  '&.active': {
    borderBottom: `2px solid ${ theme.palette.colorContrast} `,
  },
  }));

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, rowGap: '3px' }} >
      {pages.map((page) => (
        <ButtonActive
          key={page.page}
          to={`/${page.route}`}
          // activeClassName={ actualTheme === 'dark' ? 'darkActive' : 'lightActive' }
          activeClassName={  'darkActive'}
        >
          <Button sx={{ color: theme.palette.colorItemHeader, display: 'block', width: '100%', height: '100%' }} >
            {page.page}
          </Button>
        </ButtonActive>
      ))}
    </Box>
  );
}

export default MenuHeader;