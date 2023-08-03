import React from "react";
import styled from "@emotion/styled";
import CardSkills from "./CardSkills";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ContentSkills = () => {
  const skillsData = useSelector(state => state.skills.skills)
  const language = useSelector(state => state.language.language)


  const ContentSkillsContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: 'calc(100vh - 50px)',

  }))
  const WrapperContent = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    alignItems: 'center',
    minHeight: 'calc(100vh - 50px)',
    width: '100%',
    padding: '0px 1rem',
    paddingTop: '7rem',

  }))
  const ContentCardSkills = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1000px',
    width: '100%',
    height: '100%',
    minHeight: '200px',
    paddingTop: '3rem',
    gap: '1rem',

  }))

  const TittleSkills = styled('div')(({ theme }) => ({
    maxWidth: '1000px',
    width: '100%',
    height: '1px',
    position: 'relative',
    fontFamily: theme.palette.fontFamily,
    color: theme.palette.colorTittle,
    fontSize: '35px',
    display: 'flex',
    alignItems: 'center',
    '&::after': {
      content: 'close-quote',
      width: '100%',
      height: '100%',
      marginLeft: '20px',
      backgroundColor: theme.palette.colorTittle,
    },

  }))


  return (
    <ContentSkillsContainer>
      <WrapperContent>
        <TittleSkills>{language === 'english' ? 'Skills' : 'Habilidades'}</TittleSkills>
        <ContentCardSkills>
          {
            skillsData.map((skill, index) => (

              <CardSkills key={index} name={skill.name} url={skill.url} level={skill.level} certificates={skill.certificates} description={skill.description} ></CardSkills>
            ))
          }
        </ContentCardSkills>
      </WrapperContent>
    </ContentSkillsContainer>
  );
}

export default ContentSkills;
