import React from "react";
import styled from "@emotion/styled";
// Theme
import { useTheme } from "@emotion/react";

const CardProjects = ({ links, title, description, tecnologies }) => {
  const theme = useTheme();

  const Projectink = styled("a")(({ theme }) => ({
    ":hover": {
      backgroundColor: theme.palette.colorHoverContrast,
      transform: "translateY(-4px)",
    },
  }));

  return (
    <div
      className="font-medium rounded"
      style={{
        height: "300px",
        width: "330px",
        border: `1px solid ${theme.palette.colorTittle}`,
      }}
      href={links}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="flex w-full justify-start text-xs p-3 gap-3"
        style={{
          fontFamily: theme.palette.fontFamily,
          color: theme.palette.colorDescription,
        }}
      >
        {tecnologies.map((tecnology, index) => (
          <h4 key={index} style={{ margin: "0px" }}>
            {tecnology}
          </h4>
        ))}
      </div>
      <hr style={{ color: theme.palette.colorTittle }} />
      <div className="block p-4 pt-3  w-auto box-border">
        <div className="flex items-center">
          <div className="flex items-center">
            <svg
              style={{ fill: theme.palette.colorContrast }}
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
            >
              <path d="M7.05 40Q5.85 40 4.95 39.075Q4.05 38.15 4.05 37V11Q4.05 9.85 4.95 8.925Q5.85 8 7.05 8H21.05L24.05 11H41.05Q42.2 11 43.125 11.925Q44.05 12.85 44.05 14V37Q44.05 38.15 43.125 39.075Q42.2 40 41.05 40ZM7.05 11V37Q7.05 37 7.05 37Q7.05 37 7.05 37H41.05Q41.05 37 41.05 37Q41.05 37 41.05 37V14Q41.05 14 41.05 14Q41.05 14 41.05 14H22.8L19.8 11H7.05Q7.05 11 7.05 11Q7.05 11 7.05 11ZM7.05 11Q7.05 11 7.05 11Q7.05 11 7.05 11V14Q7.05 14 7.05 14Q7.05 14 7.05 14V37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Z" />
            </svg>
          </div>
          <h3
            className="w-full text-lg font-bold m-0"
            style={{
              fontFamily: theme.palette.fontFamily,
              color: theme.palette.colorItemHeader,
            }}
          >
            {title}
          </h3>
        </div>
        <p
          className="text-sm font-normal leading-5 mt-3"
          style={{
            fontFamily: theme.palette.fontFamily,
            color: theme.palette.colorContent,
          }}
        >
          {description}
        </p>
        <div className="flex gap-4 mt-4">
          {links.map((link, index) => (
            <Projectink
              className="flex items-center justify-center no-underline rounded p-1 px-3 duration-200"
              style={{
                fontFamily: theme.palette.fontFamily,
                border: `1px solid ${theme.palette.colorContrast}`,
                color: theme.palette.colorContrast,
                ":hover": {
                  backgroundColor: theme.palette.colorHoverContrast,
                  transform: "translateY(-4px)",
                  transition: "all 0.25s",
                },
              }}
              key={index}
              target="_blank"
              href={link.url}
            >
              {link.page}
            </Projectink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
