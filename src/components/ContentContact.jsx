import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ContentContactContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 69px - 50px)',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  [theme.breakpoints.down('md')]: {
    height: 'calc(100vh - 64px - 50px)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 56px - 50px)',
  },
}))

const WrapperContact = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '35%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '0px 2rem'
  },
}))
const SubtitleContact = styled('h3')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: '400',
  fontFamily: theme.palette.fontFamily,
  color: theme.palette.colorContrast,
}))
const H1Contact = styled('h1')(({ theme }) => ({
  fontSize: '50px',
  fontFamily: theme.palette.fontFamily,
  color: theme.palette.colorTittle,
  marginBottom: '0%',
}))
const PContact = styled('p')(({ theme }) => ({
  fontFamily: theme.palette.fontFamily,
  color: theme.palette.colorContent,
  textAlign: 'center',
  marginBottom: '50px',
}))
const EmailLink = styled('a')(({ theme }) => ({
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
  ':hover': {
    backgroundColor: theme.palette.colorHoverContrast,
    transition: 'all 0.3s',
  }

}))

const ContentContact = () => {
  const language = useSelector(state => state.language.language)

  return (
    <ContentContactContainer>
      <WrapperContact>
        <SubtitleContact>{language === 'english' ? 'Contact me' : 'Contáctame'}</SubtitleContact>
        <H1Contact>{language === 'english' ? 'Get in touch' : 'Contactar'}</H1Contact>
        <PContact>
          {language === 'english' ? 'Here you can contact me, I am open to new opportunities in front-end, but always willing to learn.' : 'Aquí te puedes contactar comigo, estoy abierto a nuevas oportunidades en front-end, pero siempre dispuesto a aprender.'}
        </PContact>
        <EmailLink
          className="email-link"
          href="mailto:juand.cabanat@unac.edu.co?subject=Contacto con Juan Cabana"
          rel="noopener noreferrer"
          target="_blank"
        >
          {language === 'english' ? 'Send email' : 'Enviar email'}
        </EmailLink>
      </WrapperContact>
    </ContentContactContainer>
  );
}

export default ContentContact;
