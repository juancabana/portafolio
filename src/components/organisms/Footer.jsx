import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux/es/hooks/useSelector";

const FooterWrapper = styled("div")(({ theme }) => ({
  height: "50px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background,
}));

const ContentFooter = styled("h5")(({ theme }) => ({
  fontWeight: "400",
  color: theme.palette.colorTittle,
  margin: "0px",
  padding: "0px 2rem",
}));

const Footer = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <FooterWrapper>
      <ContentFooter className="font-family text-center text-sm">
        {language === "english"
          ? "Copyright © 2023 Juan Cabana | All rights reserved."
          : "Copyright © 2023 Juan Cabana | Todos los derechos reservados."}
      </ContentFooter>
    </FooterWrapper>
  );
};

export default Footer;
