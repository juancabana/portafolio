import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ContentHomeContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background,
}));

const TextFirstLine = styled("h2")(({ theme }) => ({
  color: theme.palette.colorSubTittle,
  fontFamily: theme.palette.fontFamily,
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
    fontSize: "20px",
  },
}));
const TextSecondLine = styled("h1")(({ theme }) => ({
  color: theme.palette.colorTittle,
  fontFamily: theme.palette.fontFamily,
}));
const TextTrhirdLine = styled("h3")(({ theme }) => ({
  color: theme.palette.colorDescription,
  fontFamily: theme.palette.fontFamily,
  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
  },
}));

const EmailLink = styled("a")(({ theme }) => ({
  fontFamily: theme.palette.fontFamily,
  border: `1px solid ${theme.palette.colorContrast}`,
  color: theme.palette.colorContrast,
  ":hover": {
    backgroundColor: theme.palette.colorHoverContrast,
  },
}));

const ContentHome = () => {
  const ContentPerfil = styled(Link)(({ theme }) => ({
    backgroundImage: `url(${homeData.urlImageHome})`,
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      fontSize: "20px",
      width: "210px",
      height: "210px",
    },
  }));

  // Data
  const homeData = useSelector((state) => state.data.data.home);
  // Language
  const language = useSelector((state) => state.language.language);

  return (
    <ContentHomeContainer className="flex flex-col justify-center items-center px-4 grow box-border relative">
      <TextFirstLine className="m-0 font-medium text-2xl text-center">
        {homeData.firstLine}
      </TextFirstLine>
      <TextSecondLine className="m-0 text-center font-bold mt-4 text-3xl  sm:text-5xl">
        {homeData.secondLine}
      </TextSecondLine>
      <TextTrhirdLine className="m-0 text-center font-light text-xl mt-4">
        {homeData.thirdLine}
      </TextTrhirdLine>
      <ContentPerfil
        className="relative mt-12 mb-12 w-60 h-60 rounded-full bg-cover bg-right bg-purple-900 hover:w-64 hover:h-64 hover:duration-75 duration-100"
        to="/about"
      ></ContentPerfil>
      <TextTrhirdLine className="m-0 text-center font-light text-xl mt-4">
        {homeData.fourthLine}
      </TextTrhirdLine>
      <EmailLink
        className="flex items-center justify-center no-underline text-center rounded-md h-16 w-36 mt-8 duration-200 "
        href={homeData.linkCV}
        download={true}
      >
        {language === "english" ? "Download CV" : "Descargar CV"}
      </EmailLink>
    </ContentHomeContainer>
  );
};

export default ContentHome;
