import React from "react";
import Header from './../../components/Header/Header';
import ContentContact from './../../components/ContentContact/ContentContact';
import Footer from './../../components/Footer/Footer';
import styled from '@emotion/styled'

const Contact = () => {

    const ContactContainer = styled('div')(({ theme }) => ({
        position: 'relative'
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