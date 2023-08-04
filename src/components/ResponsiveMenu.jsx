import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@emotion/react';


const ResponsiveMenu = ({ pages }) => {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon style={{color: theme.palette.colorTittle}} />
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
                    <Link key={page.page} to={`#/${page.route}`} style={{ textDecoration: 'none', color: theme.palette.background }}>
                        <MenuItem style={{backgroundColor: theme.palette.colorCardBackground, color: theme.palette.colorItemHeader}}>
                            { page.page.toUpperCase() }
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </Box>
    );
}

export default ResponsiveMenu;