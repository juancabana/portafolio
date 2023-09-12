import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ContentHomeContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background,
}));

const TextFirstLine = styled("h2")(({ theme }) => ({
  color: theme.palette.colorSubTittle,
  [theme.breakpoints.down("sm")]: {
    marginTop: "2rem",
    fontSize: "20px",
  },
}));
const TextSecondLine = styled("h1")(({ theme }) => ({
  color: theme.palette.colorTittle,
}));
const TextTrhirdLine = styled("h3")(({ theme }) => ({
  color: theme.palette.colorDescription,
  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
  },
}));

const EmailLink = styled("a")(({ theme }) => ({
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
    <ContentHomeContainer className="flex flex-col justify-center items-center px-4 grow box-border relative ">
      <TextFirstLine className="m-0 font-medium text-2xl text-center font-family previewItem animate-fade-down">
        {homeData.firstLine}
      </TextFirstLine>
      <TextSecondLine className="m-0 text-center font-family font-bold mt-4 text-3xl sm:text-5xl animate-fade-down">
        {homeData.secondLine}
      </TextSecondLine>
      <TextTrhirdLine className="m-0 text-center font-family font-light text-xl mt-4 animate-fade-down">
        {homeData.thirdLine}
      </TextTrhirdLine>
      <ContentPerfil
        className="animate-fade relative mt-12 mb-12 w-60 h-60 rounded-full bg-contain bg-center bg-purple-900 hover:w-64 hover:h-64 hover:duration-75 duration-200"
        to="/about"
      ></ContentPerfil>
      <TextTrhirdLine className="m-0 text-center font-family font-light text-xl mt-4 animate-fade-up">
        {homeData.fourthLine}
      </TextTrhirdLine>
      <EmailLink
        className="flex items-center font-family justify-center no-underline text-center rounded-md h-16 w-36 mt-8 duration-200 animate-fade-up"
        href={homeData.linkCV}
        download={true}
        title="CV"
      >
        {language === "english" ? "Download CV" : "Descargar CV"}
      </EmailLink>
    </ContentHomeContainer>
  );
};

export default ContentHome;
