import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
// Redux
import { useDispatch } from "react-redux";
// Store 
import { useSelector } from "react-redux/es/hooks/useSelector";
import { setEnglish } from '../store/slices/language';
import { setSpanish } from '../store/slices/language';
// Theme 
import { useTheme } from '@emotion/react';

const Languages = () => {

    const theme = useTheme();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const languages = ['spanish', 'english'];
    // Dispatcher 
    const dispatch = useDispatch();
    // Language 
    const language = useSelector(state => state.language.language)
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseLanguagesMenu = (language) => {
        setAnchorElUser(null);
        language === 'spanish' ? dispatch(setSpanish()) : dispatch(setEnglish());
    };
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={language === 'english' ? "Change language" : 'Cambiar idioma'}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <TranslateOutlinedIcon style={{ color: theme.palette.colorContrast }} />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px', padding: '0px' }}
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
                    <MenuItem key={language} onClick={() => handleCloseLanguagesMenu(language)} style={{ backgroundColor: theme.palette.colorCardBackground, color: theme.palette.colorItemHeader }}>
                        {/* Se le pone la primera letra en mayuscula */}
                        {language.charAt(0).toUpperCase() + language.slice(1)}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default Languages;