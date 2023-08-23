import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button, Collapse, List } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@emotion/react";

const WrapperCard = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.colorBorder}`,
  backgroundColor: theme.palette.colorCardBackground,
  boxShadow: theme.palette.boxShadow,
}));
const ImageCard = styled("div")(({ theme }) => ({
  backgroundColor: "#1d3539",
}));

const TittleSkill = styled("h2")(({ theme }) => ({
  color: theme.palette.colorItemHeader,
  fontFamily: theme.palette.fontFamily,
}));
const TittleLevel = styled("h4")(({ theme }) => ({
  color: theme.palette.colorContrast,
  fontFamily: theme.palette.fontFamily,
}));
const Paragraph = styled("p")(({ theme }) => ({
  color: theme.palette.colorContent,
  fontFamily: theme.palette.fontFamily,
}));

const Projectink = styled("a")(({ theme }) => ({
  fontFamily:
    " ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  border: `1px solid ${theme.palette.colorContrast}`,
  color: theme.palette.colorContrast,
  ":hover": {
    backgroundColor: theme.palette.colorHoverContrast,
    transform: "translateY(-4px)",
  },
}));

const CardSkills = ({ name, url, level, certificates, description }) => {
  const Image = styled("div")(({ theme }) => ({
    backgroundImage: `url(${url})`,
  }));

  const theme = useTheme();
  const language = useSelector((state) => state.language.language);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <WrapperCard className="flex box-border p-4 items-center flex-col w-full rounded-lg ">
      <div className="flex w-full">
        <ImageCard className="h-24 w-24 max-h-20 rounded-lg p-1">
          <Image className="w-full h-full bg-cover bg-center box-content rounded-lg"></Image>
        </ImageCard>
        <div className="flex flex-col w-full h-full ml-4">
          <TittleSkill className="m-0 text-2xl font-normal">{name}</TittleSkill>
          <TittleLevel className="mt-1 mb-0 text-sm font-normal">
            {language === "english" ? "Level: " : "Nivel: "}
            {level}
          </TittleLevel>
          <Paragraph className="mt-1 text-base font-normal">
            {description}
          </Paragraph>
        </div>
      </div>
      {certificates && (
        <div className="flex m-0 p-0 w-full">
          <Button
            style={{
              padding: "0px",
              marginTop: "5px",
              fontFamily: theme.palette.fontFamily,
              color: theme.palette.colorSubTittle,
            }}
            onClick={handleClick}
          >
            {language === "english" ? "Certificates" : "Certificados"}{" "}
            {!open ? (
              <KeyboardArrowDownIcon
                style={{ color: theme.palette.colorSubTittle }}
              />
            ) : (
              <KeyboardArrowUpIcon
                style={{ color: theme.palette.colorSubTittle }}
              />
            )}
          </Button>
        </div>
      )}
      {certificates && (
        <Collapse in={open} style={{ width: "100%" }}>
          <List
            component="div"
            disablePadding
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              textAlign: "center",
              marginTop: ".5rem",
            }}
          >
            {certificates.map((certificate, index) => (
              <Projectink
                className="flex items-center justify-center no-underline rounded-sm duration-200"
                style={{ padding: "6px" }}
                key={index}
                target="_blank"
                href={certificate.url}
              >
                {certificate.tittle}
              </Projectink>
            ))}
          </List>
        </Collapse>
      )}
    </WrapperCard>
  );
};

export default CardSkills;
