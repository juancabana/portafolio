import React from "react";
import styled from "@emotion/styled";

const Footer = () => {

    const Footer = styled('div')(({ theme }) => ({
        position: 'absolute',
        bottom: '0px',
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }))

    const ContentFooter = styled('h5')(({ theme }) => ({
        fontFamily: 'monospace',
        fontweight: '300',
        color: '#ccd6f6',
        margin: '0px',
    }))

    return (
        <Footer>
            <ContentFooter>Designed & built by Juan Cabana.</ContentFooter>
        </Footer>
    );

}

export default Footer;
