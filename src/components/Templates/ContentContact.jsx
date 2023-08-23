import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
// Theme
import { useTheme } from "@emotion/react";

const WrapperContact = styled("div")(({ theme }) => ({
  width: "33%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "0px 2rem",
  },
}));

const PContact = styled("p")(({ theme }) => ({
  fontFamily: theme.palette.fontFamily,
  color: theme.palette.colorContent,
  textAlign: "center",
  marginBottom: "50px",
}));
const EmailLink = styled("a")(({ theme }) => ({
  ":hover": {
    backgroundColor: theme.palette.colorHoverContrast,
    transition: "all 0.3s",
  },
}));

const ContentContact = () => {
  const theme = useTheme();
  const language = useSelector((state) => state.language.language);

  return (
    <div className="flex w-full grow text-center items-center justify-center ">
      <WrapperContact className="flex flex-col justify-center items-center h-full">
        <h3
          className="text-base font-normal"
          style={{
            fontFamily: theme.palette.fontFamily,
            color: theme.palette.colorContrast,
          }}
        >
          {language === "english" ? "Contact me" : "Contáctame"}
        </h3>
        <h1
          className="text-5xl mt-11 mb-6 font-bold"
          style={{
            fontFamily: theme.palette.fontFamily,
            color: theme.palette.colorTittle,
          }}
        >
          {language === "english" ? "Get in touch" : "Contactar"}
        </h1>
        <PContact>
          {language === "english"
            ? "Here you can contact me, I am open to new opportunities in front-end, but always willing to learn."
            : "Aquí te puedes contactar comigo, estoy abierto a nuevas oportunidades en front-end, pero siempre dispuesto a aprender."}
        </PContact>
        <EmailLink
          className="p-0 flex items-center justify-center no-underline rounded-md h-16 w-36 mb-8 duration-200 "
          style={{
            fontFamily: theme.palette.fontFamily,
            border: `1px solid ${theme.palette.colorContrast}`,
            color: theme.palette.colorContrast,
          }}
          href="mailto:juand.cabanat@unac.edu.co?subject=Contacto con Juan Cabana"
          rel="noopener noreferrer"
          target="_blank"
        >
          {language === "english" ? "Send email" : "Enviar email"}
        </EmailLink>
      </WrapperContact>
    </div>
  );
};

export default ContentContact;
