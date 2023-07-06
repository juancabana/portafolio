import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ContentHome = () => {

  const ContentHomeContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a192f',
    width: '100%',
    height: 'calc(100vh - 70px - 50px)',
  }))

  const TextFirstLine = styled('h2')(({ theme }) => ({
    margin: '0%',
    color: '#ccd6f6',
    fontFamily: '"Quicksand", sans-serif',
    fontWeight: '500',
    fontSize: '25px',

  }))
  const TextSecondLine = styled('h1')(({ theme }) => ({
    margin: '0%',
    color: '#ccd6f6',
    textAlign: 'center',
    fontFamily: '"Roboto Mono", monospace',
    fontWeight: '700',
    fontSize: '40px',
  }))
  const TextTrhirdLine = styled('h3')(({ theme }) => ({
    margin: '0%',
    color: '#ccd6f6',
    fontFamily: '"Quicksand", sans-serif',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '20px',
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
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
    filter: 'grayscale(100%)',
    ':hover': {
      filter: 'grayscale(0%)',

    }
  }))
  const Canva = styled('div')(({ theme }) => ({
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundSize: '200px 250px',
    // backgroundColor: 'rgba(127,255,212, 0.5)',
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
    </ContentHomeContainer>
  );
}

export default ContentHome;
