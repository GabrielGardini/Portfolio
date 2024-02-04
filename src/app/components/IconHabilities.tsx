"use client";

import Image from "next/image";
import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import reactIcon from "../public/assets/icons/react-svgrepo-com.svg";
import typescriptIcon from "../public/assets/icons/typescript-icon-svgrepo-com.svg";
import nextIcon from "../public/assets/icons/next-js-svgrepo-com.svg";
import htmlIcon from "../public/assets/icons/html-5-svgrepo-com.svg";
import cssIcon from "../public/assets/icons/css-3-svgrepo-com.svg";
import jsIcon from "../public/assets/icons/js-svgrepo-com.svg";
import figmaIcon from "../public/assets/icons/figma-svgrepo-com.svg";
import adobeIcon from "../public/assets/icons/adobe-xd-svgrepo-com.svg";
import gitIcon from "../public/assets/icons/git-svgrepo-com.svg";
import pythonIcon from "../public/assets/icons/python-svgrepo-com.svg";
import expressIcon from "../public/assets/icons/express-svgrepo-com.svg";
import mongoIcon from "../public/assets/icons/mongodb-svgrepo-com.svg";

const IconHabilities = () => {
  const matches = useMediaQuery("(min-width:1000px)");
  const icones = [
    { name: matches ? "React js / Native" : "React js", source: reactIcon },
    { name: "Typescript", source: typescriptIcon },
    { name: "Next js", source: nextIcon },
    { name: "HTML", source: htmlIcon },
    { name: "CSS", source: cssIcon },
    { name: "Javascript", source: jsIcon },
    { name: "Figma", source: figmaIcon },
    { name: "Adobe XD", source: adobeIcon },
    { name: "Git", source: gitIcon },
    { name: "Python", source: pythonIcon },
    { name: "Express", source: expressIcon },
    { name: "Mongo DB", source: mongoIcon },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          fontSize: matches ? 30 : 20,
        }}
      >
        <h1>My Skills</h1>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // p: matches ? 15 : 5,
        }}
      >
        <div style={{ width: matches ? "65%" : "85%" }}>
          <Grid
            container
            className="boxShadow"
            sx={{ p: 3, backgroundColor: "#1A1F2E", borderRadius: 10 }}
          >
            {icones.map((icone) => (
              <Grid
                item
                md={4}
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: 200,
                }}
              >
                <Image
                  src={icone.source}
                  alt={"3D shirt"}
                  width={80}
                  height={80}
                  style={{ borderRadius: 10 }}
                />
                <h3>{icone.name}</h3>
              </Grid>
            ))}
          </Grid>
        </div>
      </Box>
    </>
  );
};

export default IconHabilities;
