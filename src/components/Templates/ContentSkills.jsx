import React from "react";
import styled from "@emotion/styled";
import CardSkills from "../molecules/CardSkills";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TittleSkills = styled("div")(({ theme }) => ({
  color: theme.palette.colorTittle,
}));

const ContentSkills = () => {
  const skillsData = useSelector((state) => state.data.data.skills);
  const language = useSelector((state) => state.language.language);

  return (
    <div className="flex items-center justify-center w-full mb-4 px-4">
      <div className="flex flex-col box-border items-center min-h-full w-full px-0 py-4">
        <TittleSkills className="flex max-w-3xl mt-8 text-4xl font-family font-medium">
          {language === "english" ? "Skills" : "Habilidades"}
        </TittleSkills>
        <p className="text-center mt-3 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
          {language === "english"
            ? "Here you can see some of my featured skills"
            : "Aquí puedes ver algunas de mis habilidades destacadas"}
        </p>

        <div
          className="flex flex-col max-w-3xl w-full h-full mt-5 gap-3"
          style={{ minHeight: "200px" }}
        >
          {skillsData.map((skill, index) => (
            <CardSkills
              key={index}
              name={skill.name}
              url={skill.url}
              level={skill.level}
              certificates={skill.certificates}
              description={skill.description}
            ></CardSkills>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSkills;
