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
    width: '100%',
    height: 'calc(100vh - 69px - 50px)',
  }))

  const TittleSkills = styled('div')(({ theme }) => ({
    fontFamily: '"Roboto Mono", monospace',
    color: '#ccd6f6',
    fontSize: '35px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '0px',
    marginBottom: '10px',
    '&::after': {
      content: 'close-quote',
      width: '450px',
      height: '1px',
      marginLeft: '20px',
      backgroundColor: '#ccd6f6',
    },
    '&::before': {
      content: 'close-quote',
      width: '450px',
      height: '1px',
      marginRight: '20px',
      backgroundColor: '#ccd6f6',
    }
  }))

  const ContentCardSkills = styled('div')(({ theme }) => ({
    width: '1000px',
    height: '620px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '15px',
  }))

  const Cards = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    paddingLeft: '10px',
    paddingRight: '10px',
  }))

  const ImgCard = styled('img')(({ theme }) => ({
    height: '90px',
    width: '90px',
    backgroundSize: 'cover',
  }))
  const PSkills = styled('p')(({ theme }) => ({
    color: '#8892b0',
    textAlign: 'center',
    fontFamily: '"Montserrat", sans-serif',
  }))

  return (
    <ContentSkillsContainer>
      <TittleSkills>Skills</TittleSkills>

      <ContentCardSkills>
        <Cards>
          <ImgCard src={Img1}>
          </ImgCard>
          <PSkills>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            eveniet perspiciatis, unde praesentium, exercitationem dolorum
            possimus dicta animi quasi labore quae! Rem facilis possimus,
            corporis ut ullam ab. Enim, suscipit.
          </PSkills>
        </Cards>
        <Cards>

          <ImgCard src={Img2}></ImgCard>
          <PSkills>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            eveunde b. Enim, suscipit.
          </PSkills>
        </Cards>
        <Cards>
        <ImgCard src={Img3}></ImgCard>
          <PSkills>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            eveniet perspiciatis, unde praesentium, exercitationem dolorum
            possimus dicta animi quasi labore quae! Rem facilis possimus,
            corporis ut ullam ab. Enim, suscipit.
          </PSkills>
        </Cards>
        <Cards>
        <ImgCard src={Img4}></ImgCard>
          <PSkills>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            eveniet perspiciatis, unde praesentium, exercitationem dolorum
            possimus dicta animi quasi labore quae! Rem facilis possimus,
            corporis ut ullam ab. Enim, suscipit.
          </PSkills>
        </Cards>
        <Cards>
          {" "}
          <ImgCard src={Img5}></ImgCard>
          <PSkills>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            eveniet perspiciatis, unde praesentium, exercitationem dolorum
            possimus dicta animi quasi labore quae! Rem facilis possimus,
            corporis ut ullam ab. Enim, suscipit.
          </PSkills>
        </Cards>
        <Cards>
          {" "}
          <ImgCard src={Img6}></ImgCard>
          <PSkills>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            eveniet perspiciatis, unde praesentium, exercitationem dolorum
            possimus dicta animi quasi labore quae! Rem facilis possimus,
            corporis ut ullam ab. Enim, suscipit.
          </PSkills>
        </Cards>
      </ContentCardSkills>
    </ContentSkillsContainer>
  );
}

export default ContentSkills;
