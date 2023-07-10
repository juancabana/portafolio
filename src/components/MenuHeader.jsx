import React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
// Redux
import { useDispatch } from "react-redux";
import { setHeaderItem } from '../store/slices/header';
// Store 
import { useSelector } from "react-redux/es/hooks/useSelector";
// Theme 
import { useTheme } from '@emotion/react';

const MenuHeader = ({ pages }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  // Item 
  const actualItem = useSelector(state => state.header.header);
  // Theme 
  const actualTheme = useSelector(state => state.theme.theme);


  const ButtonActive = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.colorItemHeader,
    display: 'block',
    width: 'auto',
    height: '67px',
    borderBottom: theme
  }));

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, rowGap: '3px' }} >
      {pages.map((page, index) => (
        <ButtonActive
          key={page.page}
          to={`/${page.route}`}
          onClick={() => { dispatch(setHeaderItem(page.page)) }}
          className={actualItem === page.page ? actualTheme === 'dark' ? 'darkActive' : 'lightActive' : ''}
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