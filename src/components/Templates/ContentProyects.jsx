import styled from "@emotion/styled";
import React from "react";
import CardProjects from "../molecules/CardProjects";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ContentProyectsWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: 'calc(100vh - 50px)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
const TittleProjects = styled('h1')(({ theme }) => ({
  width: '100%',
  justifyContent: 'center',
  height: '1px',
  position: 'relative',
  fontFamily: theme.palette.fontFamily,
  color: theme.palette.colorTittle,
  fontSize: '35px',
  display: 'flex',
  alignItems: 'center',
  marginTop: '3rem',
  marginBottom: '3rem',
  textAlign: 'center',
  fontWeight: '500',
}))
const ContentCardsProyects = styled('div')(({ theme }) => ({
  padding: '15px 0px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1rem'

}))

const ContentProyects = () => {
  // Data 
  const projectsData = useSelector(state => state.data.data.projects)
  // Language 
  const language = useSelector(state => state.language.language)

  return (
    <ContentProyectsWrapper>
      <WrapperContent>
        <ContentCardsProyects>
          <TittleProjects>{language === 'english' ? 'Personal Projects' : 'Proyectos Personales'}</TittleProjects>
          {projectsData.map((project, index) => (
            <CardProjects key={index} links={project.links} title={project.title} description={project.description} tecnologies={project.tecnologies} />
          ))}
        </ContentCardsProyects>
      </WrapperContent>
    </ContentProyectsWrapper>
  );
}

export default ContentProyects;
