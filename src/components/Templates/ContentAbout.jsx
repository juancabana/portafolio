import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CardExperience from "../molecules/CardExperience";

const TittleAbout = styled("h1")(({ theme }) => ({
  color: theme.palette.colorTittle,
}));
const TextAbout = styled("p")(({ theme }) => ({
  color: theme.palette.colorContent,
}));
const TittleAboutContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginTop: "2rem",
  },
}));
const LinkContact = styled(Link)(({ theme }) => ({
  border: `1px solid ${theme.palette.colorContrast}`,
  color: theme.palette.colorContrast,
  ":hover": {
    backgroundColor: "rgba(100,255,218,0.1)",
  },
}));
const Strong = styled("strong")(({ theme }) => ({
  color: theme.palette.colorContrast,
}));

const ContentAbout = () => {
  const aboutData = useSelector((state) => state.data.data.about);
  const language = useSelector((state) => state.language.language);
  return (
    <div className="flex justify-center">
      <div className="w-full p-4" style={{ maxWidth: "800px" }}>
        <TittleAboutContainer className="flex mt-14 content-center animate-fade">
          <TittleAbout className="w-full sm:text-4xl font-family text-3xl mb-4 font-medium">
            {language === "english" ? "About me" : "Sobre mi"}
          </TittleAbout>
        </TittleAboutContainer>
        <div className="w-full">
          <div className="flex flex-col items-center">
            <TextAbout className="mt-2 leading-snug font-family animate-fade">
              {aboutData.about}
            </TextAbout>{" "}
            <br />
            <Strong className="text-2xl font-normal font-family animate-fade">
              {language === "english" ? "Experience" : "Experiencia"}
            </Strong>{" "}
            <br />
            <div className="flex flex-col gap-6 mt-4 box-content">
              {aboutData.experience.map((experience, index) => (
                <CardExperience
                  key={index}
                  position={index}
                  experience={experience}
                />
              ))}
            </div>
            <br />
            <Strong className="text-2xl font-normal font-family animate-fade-up">
              {language === "english" ? "Education" : "Educación"}
            </Strong>{" "}
            <br />
            <TextAbout className="font-family animate-fade-up">
              {aboutData.education}
            </TextAbout>
            <br />
            <LinkContact
              className="p-0 flex font-family items-center justify-center no-underline rounded-md h-16 w-36 mb-8 duration-200 animate-fade-up"
              to="/contact"
            >
              {language === "english" ? "CONTACT" : "CONTÁCTAME"}
            </LinkContact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAbout;
