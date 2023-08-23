import styled from "@emotion/styled";
import React from "react";
import CardProjects from "../molecules/CardProjects";
import { useSelector } from "react-redux/es/hooks/useSelector";

const WrapperContent = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    padding: "0px 6rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0px 5rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px 2rem",
  },
}));
const TittleProjects = styled("h1")(({ theme }) => ({
  fontFamily: theme.palette.fontFamily,
  color: theme.palette.colorTittle,
}));

const ContentProyects = () => {
  // Data
  const projectsData = useSelector((state) => state.data.data.projects);
  // Language
  const language = useSelector((state) => state.language.language);

  return (
    <div className="flex w-full h-full flex-col items-center box-border">
      <WrapperContent className="flex flex-col w-full h-full max-w-6xl box-border">
        <TittleProjects className="flex w-full justify-center text-4xl items-center mt-12  text-center font-medium">
          {language === "english"
            ? "Personal Projects"
            : "Proyectos Personales"}
        </TittleProjects>
        <p className="w-full text-center mt-3 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 mb-12">
          {language === "english"
            ? "Here you can see my most outstanding projects"
            : "Aquí puedes ver mis proyectos más destacados"}
        </p>
        <div className="flex px-4 py-0 flex-wrap justify-center gap-4">
          {projectsData.map((project, index) => (
            <CardProjects
              key={index}
              links={project.links}
              title={project.title}
              description={project.description}
              tecnologies={project.tecnologies}
            />
          ))}
        </div>
      </WrapperContent>
    </div>
  );
};

export default ContentProyects;
