import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Footer = () => {

    const language = useSelector(state => state.language.language)

    const Footer = styled('div')(({ theme }) => ({
       
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }))

    const ContentFooter = styled('h5')(({ theme }) => ({
        fontFamily: theme.palette.fontFamily,
        fontWeight: '400',
        color: theme.palette.colorTittle,
        margin: '0px',
    }))

    return (
        <Footer>
            <ContentFooter>{language === 'english' ? 'Copyright © 2023 Juan Cabana | All rights reserved.' : 'Copyright © 2023 Juan Cabana | Todos los derechos reservados.' }</ContentFooter>
        </Footer>
    );

}

export default Footer;
