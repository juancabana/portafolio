import styled from "@emotion/styled";
import React from "react";
import CardProjects from "../CardProjects/CardProjects";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ContentProyects = () => {
  const projectsData = useSelector(state => state.projects.projects)
  const language = useSelector(state => state.language.language)


  const ContentProyects = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '7rem',
    boxSizing: 'border-box'

  }))
  const WrapperContent = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: '1200px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    [theme.breakpoints.down('lg')]: {
      padding: '0px 6rem',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0px 5rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0px 2rem',
    },

  }))
  const TittleProjects = styled('div')(({ theme }) => ({
    // maxWidth: '1000px',
    width: '100%',
    height: '1px',
    position: 'relative',
    fontFamily: ' monospace',
    color: '#ccd6f6',
    fontSize: '35px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3rem',
    '&::after': {
      content: 'close-quote',
      width: '100%',
      height: '100%',
      marginLeft: '20px',
      backgroundColor: '#ccd6f6',
      // background-color: lightgray;
    },
    '&::before': {
      content: 'close-quote',
      width: '100%',
      height: '100%',
      marginRight: '20px',
      backgroundColor: '#ccd6f6',
      // background-color: lightgray;
    },
  }))
  const ContentCardsProyects = styled('div')(({ theme }) => ({
    padding: '15px 0px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem'

  }))


  return (
    <ContentProyects>
      <WrapperContent>
        <ContentCardsProyects>
          <TittleProjects>{language === 'english' ? 'Projects' : 'Proyectos'}</TittleProjects>
          {projectsData.map((project, index) => (
            <CardProjects url={project.url} title={project.title} description={project.description} tecnologies={project.tecnologies} />
          ))}


        </ContentCardsProyects>
      </WrapperContent>
    </ContentProyects>
  );
}

export default ContentProyects;
