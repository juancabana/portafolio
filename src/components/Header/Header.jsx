import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
// Switch 
import SwitchTheme from '../Switch/Switch';

// Redux
import { useDispatch } from "react-redux";
// Store 
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setEnglish } from '../../store/slices/language';
import { setSpanish } from '../../store/slices/language';
import { setHeaderItem } from '../../store/slices/header';
// Theme 
import { useTheme } from '@emotion/react';


const languages = ['spanish', 'english'];


function Header() {
  const theme = useTheme();
  // Theme 
  const actualTheme = useSelector(state => state.theme.theme);
  // Item 
  const actualItem = useSelector(state => state.header.header);
  // Language 
  const language = useSelector(state => state.language.language)
  // Dispatcher 
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);




  const pageHome = language === 'english' ? 'home' : 'inicio';
  const pageAbout = language === 'english' ? 'about' : 'sobre mi';
  const pageSkills = language === 'english' ? 'skills' : 'habilidades';
  const pageProjects = language === 'english' ? 'projects' : 'proyectos';
  const pageContact = language === 'english' ? 'contact' : 'contacto';

  const pages = [
    { page: pageHome, route: '' },
    { page: pageAbout, route: 'about' },
    { page: pageSkills, route: 'skills' },
    { page: pageProjects, route: 'projects' },
    { page: pageContact, route: 'contact' }];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLanguagesMenu = (language) => {
    setAnchorElUser(null);
    language === 'spanish' ? dispatch(setSpanish()) : dispatch(setEnglish());
  };

  const ButtonActive = styled(NavLink)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.colorItemHeader,
    display: 'block',
    width: 'auto',
    height: '67px',
    borderBottom: theme
  }));





  return (
    <AppBar position="absolute" style={{ backgroundColor: theme.palette.background, top: '0px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Icono  */}
          <ApiOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ color: theme.palette.colorContrast }} />
          {/* Cabana  */}
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
          {/* Menú responsive */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <NavLink key={page.page} to={`/${page.route}`} style={{ textDecoration: 'none', color: theme.palette.background }}>
                  <MenuItem>
                    {page.page}
                  </MenuItem>
                </NavLink>
              ))}
            </Menu>
          </Box>
          {/* Icono responsive  */}
          <ApiOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          {/* Titulo Responsivo  */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme.palette.colorItemHeader,
              textDecoration: 'none',
            }}
          >
            CABANA
          </Typography>
          {/* Menú */}
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
          <SwitchTheme />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={language === 'english' ? "Change language" : 'Cambiar idioma'}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <TranslateOutlinedIcon style={{ color: theme.palette.colorContrast }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseLanguagesMenu}
            >
              {languages.map((language) => (
                <MenuItem key={language} onClick={() => handleCloseLanguagesMenu(language)}>
                  {/* Se le pone la primera letra en mayuscula */}
                  {language.charAt(0).toUpperCase() + language.slice(1)}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;