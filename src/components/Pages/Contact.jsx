import React from "react";
import Header from './../organisms/Header';
import ContentContact from './../Templates/ContentContact';
import Footer from './../organisms/Footer';
import styled from '@emotion/styled'

const Contact = () => {

    const ContactContainer = styled('div')(({ theme }) => ({
        width: '100%',
    }))

    return (
        <ContactContainer>
            <Header />
            <ContentContact />
            <Footer />
        </ContactContainer>
    );
}

export default Contact;