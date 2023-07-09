import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import CardProjects from "../CardProjects/CardProjects";


const ContentProyects = () => {


  const ContentProyects = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '7rem',
    boxSizing: 'border-box'

    // justifyContent: 'center'
  }))
  const WrapperContent = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: '1200px',
    // padding: '0px 12rem',
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

  const projects = [
    {
      url: 'https://github.com/juancabana/ParcialProgWeb',
      title: 'Proyecto del parcial',
      description: 'En este link, puedes aceder al proyecto que corresponde a el examen parcial de la materia "programación en la web", materia dictada por el profeser Denny Villalobos.',
      tecnologies: ['HTML', 'CSS', 'JavaScript']
    },

    {
      url: 'https://github.com/juancabana/ParcialProgWeb',
      title: 'Proyecto del parcial',
      description: 'En este link, puedes aceder al proyecto que corresponde a el examen parcial de la materia "programación en la web", materia dictada por el profeser Denny Villalobos.',
      tecnologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      url: 'https://github.com/juancabana/ParcialProgWeb',
      title: 'Proyecto del parcial',
      description: 'En este link, puedes aceder al proyecto que corresponde a el examen parcial de la materia "programación en la web", materia dictada por el profeser Denny Villalobos.',
      tecnologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      url: 'https://github.com/juancabana/ParcialProgWeb',
      title: 'Proyecto del parcial',
      description: 'En este link, puedes aceder al proyecto que corresponde a el examen parcial de la materia "programación en la web", materia dictada por el profeser Denny Villalobos.',
      tecnologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      url: 'https://github.com/juancabana/ParcialProgWeb',
      title: 'Proyecto del parcial',
      description: 'En este link, puedes aceder al proyecto que corresponde a el examen parcial de la materia "programación en la web", materia dictada por el profeser Denny Villalobos.',
      tecnologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      url: 'https://github.com/juancabana/ParcialProgWeb',
      title: 'Proyecto del parcial',
      description: 'En este link, puedes aceder al proyecto que corresponde a el examen parcial de la materia "programación en la web", materia dictada por el profeser Denny Villalobos.',
      tecnologies: ['HTML', 'CSS', 'JavaScript']
    },
  ]


  return (
    <ContentProyects>
      <WrapperContent>
        <ContentCardsProyects>
          <TittleProjects>Proyects</TittleProjects>
          {projects.map((project, index) => (
            <CardProjects url={project.url} title={project.title} description={project.description} tecnologies={project.tecnologies} />
          ))}


        </ContentCardsProyects>
      </WrapperContent>
    </ContentProyects>
  );
}

export default ContentProyects;
