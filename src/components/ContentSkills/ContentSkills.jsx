import React from "react";
import styled from "@emotion/styled";
import Img1 from './../../assets/img/css.png'
import Img2 from './../../assets/img/html.png'
import Img3 from './../../assets/img/js.png'
import Img4 from './../../assets/img/react.png'
import Img5 from './../../assets/img/java.png'
import Img6 from './../../assets/img/ux.png'


const ContentSkills = () => {

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
    // height: '100%',
    width: '100%',
    padding: '0px 1rem',
    paddingTop: '7rem',
    // backgroundColor: 'blue',

  }))
  const ContentCardSkills = styled('div')(({ theme }) => ({
    maxWidth: '1000px',
    width: '100%',
    height: '100%',
    minHeight: '200px',
    // gap: '15px',
    // backgroundColor: 'red',
    // margin: '0px 1rem',

  }))

  const TittleSkills = styled('div')(({ theme }) => ({
    maxWidth: '1000px',
    width: '100%',
    height: '1px',

    position: 'relative',
    fontFamily: ' monospace',
    color: '#ccd6f6',
    fontSize: '35px',
    display: 'flex',
    alignItems: 'center',
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




  return (
    <ContentSkillsContainer>
      <WrapperContent>
        <TittleSkills>Skills</TittleSkills>
        <ContentCardSkills>
        </ContentCardSkills>
      </WrapperContent>
    </ContentSkillsContainer>
  );
}

export default ContentSkills;
