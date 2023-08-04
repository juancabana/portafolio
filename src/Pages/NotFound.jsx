import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NotFoundPage = () => {

    const Page404 = styled('section')(({ theme }) => ({
        background: '#ffffff',
        height: '100vh',
        fontFamily: theme.palette.fontFamily,
    }))
    const Container = styled('section')(({ theme }) => ({
        width: '100%,',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }))
    const FourZeroFourBg = styled('div')(({ theme }) => ({
        width: '800px',
        height: '400px',
        backgroundImage: `url(${require('./../assets/img/dribbble_1.gif')})`,
        fontSize: 'cover',
        backgroundPosition: 'center',
    }))
    const Text = styled('div')(({ theme }) => ({
        fontSize: '60px',

    }))
    const Link404 = styled(Link)(({ theme }) => ({
        color: '#ffffff !important',
        padding: '10px 20px',
        background: '#39ac31',
        margin: '20px 0',
        display: 'inline-block',
        textDecoration: 'none',
        fontSize: '25px',

    }))

    return (
        <Page404>
            <Container>
                <FourZeroFourBg>
                </FourZeroFourBg>
                <Text>404 | Page not found</Text>

                <Link404 to="/" >Go to Home</Link404>
            </Container>
        </Page404>

    );
}

export default NotFoundPage;