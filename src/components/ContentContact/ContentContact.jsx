import styled from "@emotion/styled";
import React from "react";

const ContentContact = () => {

  const ContentContactContainer = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }))

  const WrapperContact = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '35%',
  }))
  const SubtitleContact = styled('h3')(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '400',
    fontFamily: '"Roboto Mono", monospace',
    color: 'aquamarine',
  }))
  const H1Contact = styled('h1')(({ theme }) => ({
    fontSize: '50px',
    fontFamily: '"Montserrat", sans-serif',
    color: '#ccd6f6',
    marginBottom: '0%',
  }))
  const PContact = styled('p')(({ theme }) => ({
    fontFamily: '"Montserrat", sans-serif',
    color: '#ccd6f6',
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
    fontFamily: '"Roboto Mono", monospace',
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
    <ContentContactContainer>
      <WrapperContact>
        <SubtitleContact>Contact me</SubtitleContact>
        <H1Contact>Get in touch</H1Contact>
        <PContact>
          Here you can contact me, I am looking for a job as a front-end web
          developer, but I really like to learn any technology
        </PContact>
        <EmailLink
          className="email-link"
          href="mailto:juand.cabanat@unac.edu.co"
          rel="noopener noreferrer"
          target="_blank"
        >
          Send email
        </EmailLink>
      </WrapperContact>
    </ContentContactContainer>
  );
}

export default ContentContact;
