import React from "react";
import styled from "@emotion/styled";

const CardProjects = ({ links, title, description, tecnologies }) => {
  const CardsProyects = styled("div")(({ theme }) => ({
    minHeight: "220px",
    width: "330px",
    borderRadius: "5px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px 0px",
    border: `1px solid ${theme.palette.colorTittle}`,
    textDecoration: "none",
  }));
  const ImgProject = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
  }));
  const WrapperTittleCard = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
  }));
  const SubtittleCard = styled("h3")(({ theme }) => ({
    width: "100%",
    fontFamily: theme.palette.fontFamily,
    fontSize: "18px",
    fontWeight: "700",
    color: theme.palette.colorItemHeader,
    margin: "0px",
  }));

  const PCard = styled("p")(({ theme }) => ({
    fontFamily: theme.palette.fontFamily,
    color: theme.palette.colorContent,
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.5",
  }));
  const TecnologiesCard = styled("div")(({ theme }) => ({
    fontFamily: theme.palette.fontFamily,
    width: "100%",
    display: "flex",
    justifyContent: "left",
    color: theme.palette.colorDescription,
    fontSize: "12px",
    margin: "10px",
    gap: "10px",
  }));
  const FolderImg = styled("svg")(({ theme }) => ({
    fill: theme.palette.colorContrast,
  }));
  const WrapperContentCard = styled("div")(({ theme }) => ({
    padding: "1rem",
    paddingTop: "0px",
  }));
  const Hr = styled("hr")(({ theme }) => ({
    color: theme.palette.colorTittle,
  }));
  const WrapperLinks = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "1rem",
  }));
  const Projectink = styled("a")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    borderRadius: "0px",
    fontFamily: theme.palette.fontFamily,
    border: `1px solid ${theme.palette.colorContrast}`,
    color: theme.palette.colorContrast,
    padding: "5px",
    // height: '60px',
    // width: '140px',
    ":hover": {
      backgroundColor: theme.palette.colorHoverContrast,
      transform: "translateY(-4px)",
      transition: "all 0.25s",
    },
  }));

  return (
    <CardsProyects href={links} target="_blank" rel="noopener noreferrer">
      <TecnologiesCard>
        {tecnologies.map((tecnology, index) => (
          <h4 key={index} style={{ margin: "0px" }}>
            {tecnology}
          </h4>
        ))}
      </TecnologiesCard>
      <Hr />
      <WrapperContentCard>
        <WrapperTittleCard>
          <ImgProject>
            <FolderImg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
            >
              <path d="M7.05 40Q5.85 40 4.95 39.075Q4.05 38.15 4.05 37V11Q4.05 9.85 4.95 8.925Q5.85 8 7.05 8H21.05L24.05 11H41.05Q42.2 11 43.125 11.925Q44.05 12.85 44.05 14V37Q44.05 38.15 43.125 39.075Q42.2 40 41.05 40ZM7.05 11V37Q7.05 37 7.05 37Q7.05 37 7.05 37H41.05Q41.05 37 41.05 37Q41.05 37 41.05 37V14Q41.05 14 41.05 14Q41.05 14 41.05 14H22.8L19.8 11H7.05Q7.05 11 7.05 11Q7.05 11 7.05 11ZM7.05 11Q7.05 11 7.05 11Q7.05 11 7.05 11V14Q7.05 14 7.05 14Q7.05 14 7.05 14V37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Z" />
            </FolderImg>
          </ImgProject>
          <SubtittleCard>{title}</SubtittleCard>
        </WrapperTittleCard>
        <PCard>{description}</PCard>
        <WrapperLinks>
          {links.map((link, index) => (
            <Projectink key={index} target="_blank" href={link.url}>
              {link.page}
            </Projectink>
          ))}
        </WrapperLinks>
      </WrapperContentCard>
    </CardsProyects>
  );
};

export default CardProjects;
