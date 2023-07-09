import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ContentHome = () => {


  const ContentHomeContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a192f',
    width: 'auto',
    height: 'calc(100vh - 50px)',
    padding: '0px 1rem'

  }))

  const TextFirstLine = styled('h2')(({ theme }) => ({
    margin: '0%',
    color: '#ccd6f6',
    fontFamily: '"Quicksand", sans-serif',
    fontWeight: '500',
    fontSize: '25px',
    textAlign: 'center',


    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
      fontSize: '20px',
    },

  }))
  const TextSecondLine = styled('h1')(({ theme }) => ({
    margin: '0%',
    color: '#ccd6f6',
    textAlign: 'center',
    fontFamily: ' monospace',
    fontWeight: '700',
    fontSize: '40px',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  }))
  const TextTrhirdLine = styled('h3')(({ theme }) => ({
    margin: '0%',
    color: '#ccd6f6',
    fontFamily: '"Quicksand", sans-serif',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '20px',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '17px',
    },
  }))
  const ContentPerfil = styled(Link)(({ theme }) => ({
    position: 'relative',
    marginTop: '50px',
    marginBottom: '50px',
    width: '240px',
    height: '240px',
    backgroundImage: `url(${require('./../../assets/img/perfil.jpg')})`,
    borderRadius: '50%',
    backgroundSize: '200px 250px',
    backgroundPosition: `center calc(50% - 3px)`,
    backgroundColor: 'rgba(0, 176, 156, 0.5)',
    filter: 'grayscale(0%)',
    ':hover': {
      width: '250px',
      height: '250px',
      backgroundPosition: `center 50%`,
      transition: 'all 0.1s',
      [theme.breakpoints.down('sm')]: {

        width: '220px',
        height: '220px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2rem',
      fontSize: '20px',
      width: '210px',
      height: '210px',
    },
    
  }))
  const Canva = styled('div')(({ theme }) => ({
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundSize: '200px 250px',
    // backgroundColor: 'rgba(127,255,212, 0.5)',
  }))
  const EmailLink = styled('a')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    borderRadius: '5px',
    fontFamily: ' monospace',
    border: '1px solid aquamarine',
    color: 'aquamarine',
    height: '60px',
    width: '140px',
    marginTop: '2rem',
    ':hover': {
      backgroundColor: 'rgba(100,255,218,0.1)',
      transition: 'all 0.3s',
    }

  }))

  return (
    <ContentHomeContainer>
      <TextFirstLine>Hi, I am Juan David Cabana Trejos</TextFirstLine>
      <TextSecondLine>Web full-stack developer (Node - React).</TextSecondLine>
      <TextTrhirdLine>
        I am passionate about web development, I handle HTML, CSS, JavaScript
        and React technologies.
      </TextTrhirdLine>
      <ContentPerfil to="/about">
        <Canva></Canva>
      </ContentPerfil>
      <TextTrhirdLine>
        Systems engineering student, 8th semester.
      </TextTrhirdLine>
      <EmailLink href="./../../assets/cv/CV Juan Cabana.pdf" download={true}>Download CV</EmailLink>

    </ContentHomeContainer>
  );
}

export default ContentHome;
