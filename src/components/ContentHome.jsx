import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";


const ContentHome = () => {
  // Data 
  const homeData = useSelector(state => state.home.home)
  // Language 
  const language = useSelector(state => state.language.language)

  const ContentHomeContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background,
    width: 'auto',
    height: 'calc(100vh - 69px - 50px)',
    padding: '0px 1rem',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      height: 'calc(100vh - 64px - 50px)',
    },
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 56px - 50px)',
    },
  }))

  const TextFirstLine = styled('h2')(({ theme }) => ({
    margin: '0%',
    color: theme.palette.colorSubTittle,
    fontFamily: theme.palette.fontFamily,
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
    color: theme.palette.colorTittle,
    textAlign: 'center',
    fontFamily: theme.palette.fontFamily,
    fontWeight: '700',
    fontSize: '40px',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  }))
  const TextTrhirdLine = styled('h3')(({ theme }) => ({
    margin: '0%',
    color: theme.palette.colorDescription,
    fontFamily: theme.palette.fontFamily,
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
    backgroundImage: `url(${homeData.urlImageHome})`,
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
    // position: 'absolute',
    // width: '200px',
    // height: '200px',
    borderRadius: '50%',
    backgroundSize: '200px 250px',
  }))
  const EmailLink = styled('a')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '5px',
    fontFamily: theme.palette.fontFamily,
    border: `1px solid ${theme.palette.colorContrast}`,
    color: theme.palette.colorContrast,
    height: '60px',
    width: '140px',
    marginTop: '2rem',
    ':hover': {
      backgroundColor: theme.palette.colorHoverContrast,
      transition: 'all 0.3s',
    }

  }))
  return (
    <ContentHomeContainer>
      <TextFirstLine>{homeData.firstLine}</TextFirstLine>
      <TextSecondLine>{homeData.secondLine}</TextSecondLine>
      <TextTrhirdLine>{homeData.thirdLine}</TextTrhirdLine>
      <ContentPerfil to="/about">
        <Canva></Canva>
      </ContentPerfil>
      <TextTrhirdLine>{homeData.fourthLine}</TextTrhirdLine>
      <EmailLink href={homeData.linkCV} download={true}>{language === 'english' ? 'Download CV' : 'Descargar CV'}</EmailLink>

    </ContentHomeContainer>
  );
}

export default ContentHome;
