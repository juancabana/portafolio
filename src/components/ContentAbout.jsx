import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ContentAbout = () => {

  const aboutData = useSelector(state => state.about.about)
  const language = useSelector(state => state.language.language)

  const WrapperContentAboutContainer = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7rem',
    boxSizing: 'border-box',
    [theme.breakpoints.down('lg')]: {
      marginTop: '50px',    
    },
  }))
  const ContainerContentAbout = styled('div')(({theme}) => ({
    maxWidth: '1400px',
    height: '90%',
    padding: '1rem',
    
  }))
  const TittleAbout = styled('h1')(({theme}) => ({
    maxWidth: '1000px',
    width: '56%',
    height: '1px',
    position: 'relative',
    fontFamily: ' monospace',
    color: theme.palette.colorTittle,
    fontSize: '35px',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    paddingLeft: '50px',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
    '&::after': {
      content: 'close-quote',
      width: '100%',
      height: '100%',
      marginLeft: '20px',
      backgroundColor: theme.palette.colorTittle,
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
    color: theme.palette.colorContent,
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
    backgroundImage: `url(${require('./../assets/img/verticalImage.jpg')})`,
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
    border: `1px solid ${theme.palette.colorContrast}`,
    color: theme.palette.colorContrast,
    height: '60px',
    width: '140px',
    ':hover': {
      backgroundColor: 'rgba(100,255,218,0.1)',
      transition: 'all 0.3s',
    }
  }))
  const Strong = styled('strong')(({theme}) => ({
    fontSize: '20px',
    fontWeight: '400',
    color: theme.palette.colorContrast,
  }))

  return (
    <WrapperContentAboutContainer>
      <ContainerContentAbout>
        <TittleAbout>{language === 'english' ? 'About me' : 'Sobre mi'}</TittleAbout  >
        <ContentAbout>
          <ParagraphAbout>
            <TextAbout>
              {aboutData.about} <br /> <br />
              <Strong>{language === 'english' ? 'Experience': 'Experiencia'}</Strong> <br />
              {aboutData.experience}<br /> <br />
              <Strong>{language === 'english' ? 'Education' : 'Educación'}</Strong> <br />
              {aboutData.education}
            </TextAbout>
        <LinkContact to="/contact">{language === 'english' ? 'CONTACT' : 'CONTÁCTAME'}</LinkContact>
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
