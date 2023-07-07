import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";


const ContentProyects = () => {


  const ContentProyects = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }))
  const TittleProjects = styled('div')(({ theme }) => ({
    fontFamily: ' monospace',
    color: '#ccd6f6',
    fontSize: '35px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '0px',
    marginBottom: '10px',
    '&::after': {
      content: "close-quote",
      width: '490px',
      height: '1px',
      marginLeft: '20px',
      backgroundColor: '#ccd6f6',
    },
    '&::before': {
      content: "close-quote",
      width: '490px',
      height: '1px',
      marginRight: '20px',
      backgroundColor: '#ccd6f6',
    },
  }))
  const ContentCardsProyects = styled('div')(({ theme }) => ({
    padding: '15px',
    width: 'calc(1200px - 15px)',
    height: 'calc(620px - 15px)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    rowGap: '5px',
    columnGap: '20px',
  }))
  const CardsProyects = styled(Link)(({ theme }) => ({
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#112240',
    cursor: 'pointer',
    padding: '25px',
    paddingTop: '30px',
    height: '220px',
    textDecoration: 'none',
    '&:hover': {
      transform: 'translateY(-7px)',
      transition: 'all 0.25s',
    }
  }))
  const CardsProyectsA = styled('a')(({ theme }) => ({
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#112240',
    cursor: 'pointer',
    padding: '25px',
    paddingTop: '30px',
    height: '220px',
    textDecoration: 'none',
    '&:hover': {
      transform: 'translateY(-7px)',
      transition: 'all 0.25s',
    }
  }))
  const ImgProject = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '80px',
    width: '100%',
  }))
  const SubtittleCard = styled('h3')(({ theme }) => ({
    width: '100%',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '18px',
    fontWeight: '700',
    color: '#ccd6f6',
    margin: '0px',
  }))
  const PCard = styled('p')(({ theme }) => ({
    fontFamily: '"Montserrat", sans-serif',
    color: '#ccd6f6',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.5',
  }))
  const DescriptionCard = styled('div')(({ theme }) => ({
    fontFamily: '"Montserrat", sans-serif',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    color: '#ccd6f6',
    fontSize: '12px',
  }))
  const FolderImg = styled('svg')(({ theme }) => ({
    fill: 'aquamarine',
  }))


  return (
    <ContentProyects>
      <TittleProjects>Proyects</TittleProjects>
      <ContentCardsProyects>
        <CardsProyectsA href="https://github.com/juancabana/ParcialProgWeb" target="_blank" rel="noopener noreferrer">
          <ImgProject>
            <FolderImg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="60"
            >
              <path d="M7.05 40Q5.85 40 4.95 39.075Q4.05 38.15 4.05 37V11Q4.05 9.85 4.95 8.925Q5.85 8 7.05 8H21.05L24.05 11H41.05Q42.2 11 43.125 11.925Q44.05 12.85 44.05 14V37Q44.05 38.15 43.125 39.075Q42.2 40 41.05 40ZM7.05 11V37Q7.05 37 7.05 37Q7.05 37 7.05 37H41.05Q41.05 37 41.05 37Q41.05 37 41.05 37V14Q41.05 14 41.05 14Q41.05 14 41.05 14H22.8L19.8 11H7.05Q7.05 11 7.05 11Q7.05 11 7.05 11ZM7.05 11Q7.05 11 7.05 11Q7.05 11 7.05 11V14Q7.05 14 7.05 14Q7.05 14 7.05 14V37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Z" />
            </FolderImg>
          </ImgProject>
          <SubtittleCard>Proyecto del parcial</SubtittleCard>
          <PCard>
            En este link, puedes aceder al proyecto que corresponde a el
            examen parcial de la materia "programación en la web", materia
            dictada por el profeser Denny Villalobos.
          </PCard>
          <DescriptionCard>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
          </DescriptionCard>
        </CardsProyectsA>

        <CardsProyects to="/parcial">
          {" "}
          <ImgProject>
            <FolderImg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="60"
            >
              <path d="M7.05 40Q5.85 40 4.95 39.075Q4.05 38.15 4.05 37V11Q4.05 9.85 4.95 8.925Q5.85 8 7.05 8H21.05L24.05 11H41.05Q42.2 11 43.125 11.925Q44.05 12.85 44.05 14V37Q44.05 38.15 43.125 39.075Q42.2 40 41.05 40ZM7.05 11V37Q7.05 37 7.05 37Q7.05 37 7.05 37H41.05Q41.05 37 41.05 37Q41.05 37 41.05 37V14Q41.05 14 41.05 14Q41.05 14 41.05 14H22.8L19.8 11H7.05Q7.05 11 7.05 11Q7.05 11 7.05 11ZM7.05 11Q7.05 11 7.05 11Q7.05 11 7.05 11V14Q7.05 14 7.05 14Q7.05 14 7.05 14V37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Z" />
            </FolderImg>
          </ImgProject>
          <SubtittleCard>Lorem, ipsum </SubtittleCard>
          <PCard>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus optio laboriosam omnis ratione ea, recusandae eaque
            obcaecati labore dolores libero distinctio mollitia odio eligendi
            sint, doloremque iusto eius facere. Ad.
          </PCard>
          <DescriptionCard>
            <h4>React</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
          </DescriptionCard>
        </CardsProyects>
        <CardsProyects to="/parcial">
          {" "}
          <ImgProject>
            <FolderImg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="60"
            >
              <path d="M7.05 40Q5.85 40 4.95 39.075Q4.05 38.15 4.05 37V11Q4.05 9.85 4.95 8.925Q5.85 8 7.05 8H21.05L24.05 11H41.05Q42.2 11 43.125 11.925Q44.05 12.85 44.05 14V37Q44.05 38.15 43.125 39.075Q42.2 40 41.05 40ZM7.05 11V37Q7.05 37 7.05 37Q7.05 37 7.05 37H41.05Q41.05 37 41.05 37Q41.05 37 41.05 37V14Q41.05 14 41.05 14Q41.05 14 41.05 14H22.8L19.8 11H7.05Q7.05 11 7.05 11Q7.05 11 7.05 11ZM7.05 11Q7.05 11 7.05 11Q7.05 11 7.05 11V14Q7.05 14 7.05 14Q7.05 14 7.05 14V37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Z" />
            </FolderImg>
          </ImgProject>
          <SubtittleCard>Lorem, ipsum </SubtittleCard>
          <PCard>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus optio laboriosam omnis ratione ea, recusandae eaque
            obcaecati labore dolores libero distinctio mollitia odio eligendi
            sint, doloremque iusto eius facere. Ad.
          </PCard>
          <DescriptionCard>
            <h4>React</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
          </DescriptionCard>
        </CardsProyects>
        <CardsProyects to="/parcial">
          {" "}
          <ImgProject>
            <FolderImg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="60"
            >
              <path d="M7.05 40Q5.85 40 4.95 39.075Q4.05 38.15 4.05 37V11Q4.05 9.85 4.95 8.925Q5.85 8 7.05 8H21.05L24.05 11H41.05Q42.2 11 43.125 11.925Q44.05 12.85 44.05 14V37Q44.05 38.15 43.125 39.075Q42.2 40 41.05 40ZM7.05 11V37Q7.05 37 7.05 37Q7.05 37 7.05 37H41.05Q41.05 37 41.05 37Q41.05 37 41.05 37V14Q41.05 14 41.05 14Q41.05 14 41.05 14H22.8L19.8 11H7.05Q7.05 11 7.05 11Q7.05 11 7.05 11ZM7.05 11Q7.05 11 7.05 11Q7.05 11 7.05 11V14Q7.05 14 7.05 14Q7.05 14 7.05 14V37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Z" />
            </FolderImg>
          </ImgProject>
          <SubtittleCard>Lorem, ipsum </SubtittleCard>
          <PCard>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus optio laboriosam omnis ratione ea, recusandae eaque
            obcaecati labore dolores libero distinctio mollitia odio eligendi
            sint, doloremque iusto eius facere. Ad.
          </PCard>
          <DescriptionCard>
            <h4>React</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
          </DescriptionCard>
        </CardsProyects>
        <CardsProyects to="/parcial">
          {" "}
          <ImgProject>
            <FolderImg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="60"
            >
              <path d="M7.05 40Q5.85 40 4.95 39.075Q4.05 38.15 4.05 37V11Q4.05 9.85 4.95 8.925Q5.85 8 7.05 8H21.05L24.05 11H41.05Q42.2 11 43.125 11.925Q44.05 12.85 44.05 14V37Q44.05 38.15 43.125 39.075Q42.2 40 41.05 40ZM7.05 11V37Q7.05 37 7.05 37Q7.05 37 7.05 37H41.05Q41.05 37 41.05 37Q41.05 37 41.05 37V14Q41.05 14 41.05 14Q41.05 14 41.05 14H22.8L19.8 11H7.05Q7.05 11 7.05 11Q7.05 11 7.05 11ZM7.05 11Q7.05 11 7.05 11Q7.05 11 7.05 11V14Q7.05 14 7.05 14Q7.05 14 7.05 14V37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Z" />
            </FolderImg>
          </ImgProject>
          <SubtittleCard>Lorem, ipsum </SubtittleCard>
          <PCard>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus optio laboriosam omnis ratione ea, recusandae eaque
            obcaecati labore dolores libero distinctio mollitia odio eligendi
            sint, doloremque iusto eius facere. Ad.
          </PCard>
          <DescriptionCard>
            <h4>React</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
          </DescriptionCard>
        </CardsProyects>
        <CardsProyects to="/parcial">
          <ImgProject>
            <FolderImg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="60"
            >
              <path d="M7.05 40Q5.85 40 4.95 39.075Q4.05 38.15 4.05 37V11Q4.05 9.85 4.95 8.925Q5.85 8 7.05 8H21.05L24.05 11H41.05Q42.2 11 43.125 11.925Q44.05 12.85 44.05 14V37Q44.05 38.15 43.125 39.075Q42.2 40 41.05 40ZM7.05 11V37Q7.05 37 7.05 37Q7.05 37 7.05 37H41.05Q41.05 37 41.05 37Q41.05 37 41.05 37V14Q41.05 14 41.05 14Q41.05 14 41.05 14H22.8L19.8 11H7.05Q7.05 11 7.05 11Q7.05 11 7.05 11ZM7.05 11Q7.05 11 7.05 11Q7.05 11 7.05 11V14Q7.05 14 7.05 14Q7.05 14 7.05 14V37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Z" />
            </FolderImg>
          </ImgProject>
          <SubtittleCard>Lorem, ipsum </SubtittleCard>
          <PCard>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus optio laboriosam omnis ratione ea, recusandae eaque
            obcaecati labore dolores libero distinctio mollitia odio eligendi
            sint, doloremque iusto eius facere. Ad.
          </PCard>
          <DescriptionCard>
            <h4>React</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
          </DescriptionCard>
        </CardsProyects>
      </ContentCardsProyects>
    </ContentProyects>
  );
}

export default ContentProyects;
