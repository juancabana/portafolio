import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const ContentAbout = () => {

  const WrapperContentAboutContainer = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '50px',    
    },
  }))

  const ContainerContentAbout = styled('div')(({theme}) => ({
    maxWidth: '1400px',
    height: '90%',
    padding: '1rem',
    
  }))
  const TittleAbout = styled('h2')(({theme}) => ({
    maxWidth: '1000px',
    width: '56%',
    height: '1px',
    position: 'relative',
    fontFamily: ' monospace',
    color: '#ccd6f6',
    fontSize: '35px',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    paddingLeft: '50px',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
    // marginTop: '0px',
    '&::after': {
      content: 'close-quote',
      width: '100%',
      height: '100%',
      marginLeft: '20px',
      backgroundColor: '#ccd6f6',
      // background-color: lightgray;
    },

  }))

  const ParagraphAbout = styled('div')(({theme}) => ({
    paddingLeft: '50px',
    paddingRight: '20px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: '20px',    
    },
  }))
  const Strong = styled('strong')(({theme}) => ({
    fontSize: '20px',
    fontWeight: '400',
    color: 'aquamarine',
  }))
  const ContentAbout = styled('div')(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    width: '100%',
    height: '70%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  }))
  const TextAbout = styled('p')(({theme}) => ({
    color: '#8892b0',
    fontFamily: '"Montserrat", sans-serif',
    lineHeight: '1.5',
  }))
  const ImageAboutContainer = styled('p')(({theme}) => ({
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
    paddingRight: '50px',
    [theme.breakpoints.down('md')]: {
      paddingRight: '0px',
    },
    
  }))
  const ImageAbout = styled('div')(({theme}) => ({
    width: '450px',
    height: '450px',
    borderRadius: '10px',
    backgroundImage: `url(${require('./../../assets/img/verticalImage.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: `right 30%`,
    [theme.breakpoints.down('lg')]: {
      width: '300px',
    },
    [theme.breakpoints.down('md')]: {
      width: '300px',
      height: '300px',
      borderRadius: '50%'
    },
  }))
  const LinkContact = styled(NavLink)(({ theme }) => ({
    padding: '0%',
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
    ':hover': {
      backgroundColor: 'rgba(100,255,218,0.1)',
      transition: 'all 0.3s',
    }

  }))


  return (
    <WrapperContentAboutContainer>
      <ContainerContentAbout>
        <TittleAbout>About me</TittleAbout  >
        <ContentAbout>
          <ParagraphAbout>
            <TextAbout>
              Frontend and backend web developer, I am a happy, friendly,
              altruistic person, I like teamwork, good camaraderie, responsible,
              always willing and eager to learn new technologies and deepen the
              ones I already know.
              The technologies I handle are HTML, CSS, Javascript and its
              versions of ECMAScript (ES6+), Node.js and its NPM package and
              dependency management system, React.js, typescript, relational
              database fundamentals with MySQL, Express. js, Passport.js, JSON
              Web Token (JWT), and I've mostly used Git and Github for version
              control, although I have some familiarity with Microsoft Azure.
              I have worked under agile development methodologies such as scrum
              and canva. <br /> <br />
              <Strong>Experience</Strong> <br />
              Currently I am in charge of the design, layout and development
              of the new EdSoft platform, I have implemented the front-end of
              the page in React, using several of its libraries for routing
              and page styles, I am in charge of making requests to the API
              which is built in GraphQL, I was in charge of the configuration
              of the front-end architecture of the project. <br /> <br />
              <Strong>Education</Strong> <br />I graduated
              from high school in 2019, where I graduated as the best high
              school graduate, because of that I got a scholarship for a year
              at the Adventist University of Colombia (UNAC), where I am
              currently studying 5th semester of engineering in systems.
              engineering. At the beginning of 2020 I met web development and
              I became passionate about it. passionate about it.
            </TextAbout>
        <LinkContact to="/contact">CONTACT</LinkContact>
          </ParagraphAbout>
          <ImageAboutContainer>
            <ImageAbout></ImageAbout>
          </ImageAboutContainer>
        </ContentAbout>
      </ContainerContentAbout>
    </WrapperContentAboutContainer>
  );
}

export default ContentAbout;
