import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CardExperience from "../molecules/CardExperience";

const WrapperContentAboutContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: 'calc(100vh - 50px - 69px)',
  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'center',
  boxSizing: 'border-box',

}))
const ContainerContentAbout = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '900px',
  height: '90%',
  boxSizing: 'content-box',

}))
const TittleAbout = styled('h1')(({ theme }) => ({
  // maxWidth: '1000px',
  height: '1px',
  position: 'relative',
  fontFamily: theme.palette.fontFamily,
  color: theme.palette.colorTittle,
  display: 'flex',
  fontWeight: '400',
  alignItems: 'center',
  paddingLeft: '10px',
  margin: '0px',
  marginBottom: '1.5rem',

  // '&::after': {
  //   content: 'close-quote',
  //   width: '100%',
  //   height: '100%',
  //   marginLeft: '20px',
  //   backgroundColor: theme.palette.colorTittle,
  // },

}))
const ParagraphAbout = styled('div')(({ theme }) => ({
  paddingLeft: '50px',
  paddingRight: '20px',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: '20px',
    // textAlign: 'center'
  },
}))
const ContentAboutWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  // gridTemplateColumns: '1.2fr 0.8fr',
  width: '100%',
  height: '70%',

}))
const TextAbout = styled('p')(({ theme }) => ({
  color: theme.palette.colorContent,
  fontFamily: theme.palette.fontFamily,
  marginTop: '.5rem'
}))
const TittleAboutContainer = styled('div')(({ theme }) => ({
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
}))
const LinkContact = styled(Link)(({ theme }) => ({
  padding: '0%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  borderRadius: '5px',
  fontFamily: theme.palette.fontFamily,
  border: `1px solid ${theme.palette.colorContrast}`,
  color: theme.palette.colorContrast,
  height: '60px',
  width: '140px',
  marginBottom: '2rem',
  ':hover': {
    backgroundColor: 'rgba(100,255,218,0.1)',
    transition: 'all 0.3s',
  }

}))
const Strong = styled('strong')(({ theme }) => ({

  fontFamily: theme.palette.fontFamily,
  fontSize: '25px',
  fontWeight: '400',
  color: theme.palette.colorContrast,
}))

const WrapperDataExperience = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column-reverse',
  gap: '1.5rem',
  marginTop: '1rem',
  // paddingRight: '8rem',
  boxSizing: 'content-box',
  // [theme.breakpoints.down('md')]: {
  //   paddingRight: '0rem',
  // },
}))

const ContentAbout = () => {

  const aboutData = useSelector(state => state.data.data.about)
  const language = useSelector(state => state.language.language)
  return (
    <WrapperContentAboutContainer>
      <ContainerContentAbout>
        <TittleAboutContainer>
          {/* <ImageAbout/> */}
          <TittleAbout>{language === 'english' ? 'About me' : 'Sobre mi'}</TittleAbout  >
        </TittleAboutContainer>
        <ContentAboutWrapper>
          <ParagraphAbout>
            <TextAbout>
              {aboutData.about}
            </TextAbout>              <br />

            <Strong>{language === 'english' ? 'Experience' : 'Experiencia'}</Strong> <br />
            <WrapperDataExperience>

              {aboutData.experience.map((experience, index) => (
                <CardExperience key={index} experience={experience} />
              ))}
            </WrapperDataExperience>


            <br />
            <Strong>{language === 'english' ? 'Education' : 'Educación'}</Strong> <br />
            <TextAbout style={{marginTop: '0px'}}>
              {aboutData.education}
            </TextAbout>
            <br />
            <LinkContact to="/contact">{language === 'english' ? 'CONTACT' : 'CONTÁCTAME'}</LinkContact>
          </ParagraphAbout >

        </ContentAboutWrapper>
      </ContainerContentAbout>
    </WrapperContentAboutContainer>
  );
}

export default ContentAbout;
