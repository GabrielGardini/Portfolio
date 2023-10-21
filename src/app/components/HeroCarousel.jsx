"use client";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import pingpong from "../public/assets/images/pingpong.png";
import dalle from "../public/assets/images/dalle.png";
import issTracker from "../public/assets/images/iss-tracker.png";
import logo from "../public/assets/images/logoBranca.svg";
import { Box, Button, useMediaQuery } from "@mui/material";
import "../globals.css";

const heroImages = [
  {
    imgUrl: "pingpong",
    alt: "smartwatch",
    title: "R3elogio top",
    description:
      "Jogo criado em 2016 parqa uma feira da escola. O projeto utiliza React, mern, varioas coisas complicadas e legasi",
  },
  {
    imgUrl: "issTracker",
    alt: "bag",
    title: "R3elogio top",
    description:
      "Jogo criado em 2016 parqa uma feira da escola. O projeto utiliza React, mern, varioas coisas complicadas e legasi",
  },
  {
    imgUrl: "dalle",
    alt: "lamp",
    title: "R3elogio top",
    description:
      "Jogo criado em 2016 parqa uma feira da escola. O projeto utiliza React, mern, varioas coisas complicadas e legasi",
  },
  {
    imgUrl: "logo",
    alt: "logo",
    title: "logo top",
    description:
      "Jogo criado em 2016 parqa uma feira da escola. O projeto utiliza React, mern, varioas coisas complicadas e legasi",
  },
];

const HeroCarousel = () => {
  const matches = useMediaQuery("(min-width:1000px)");

  return (
    <Box
      sx={{
        p: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="boxShadow"
        style={{ backgroundColor: "#1A1F2E", padding: 20, borderRadius: 20 }}
      >
        <Carousel
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          showThumbs={false}
          // autoPlay
          // infiniteLoop
          interval={2000}
          showArrows={false}
          showStatus={false}
          width={matches ? 700 : 300}
        >
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
              mb: 15,
            }}
          >
            <h1>{"ping pongoooo"}</h1>
            <p>{"testetetretwetr"}</p>
            <Image
              src={pingpong}
              alt={"pingpong"}
              width={matches ? 700 : 300}
              height={matches ? 400 : 175}
              style={{ borderRadius: 10 }}
            />
            <Button sx={{ mb: 15, mt: 3 }} variant="contained">
              Acesse
            </Button>
          </div>
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>{"ping pongo"}</h1>
            <p>{"testetetretwetr"}</p>
            <Image
              src={issTracker}
              alt={"pingpong"}
              width={matches ? 700 : 300}
              height={matches ? 400 : 175}
              style={{ borderRadius: 10 }}
            />
            <Button sx={{ mb: 15, mt: 3 }} variant="contained">
              Acesse
            </Button>
          </div>
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <h1>{"ping pongo"}</h1>
            <p>{"testetetretwetr"}</p>
            <Image
              src={dalle}
              alt={"pingpong"}
              width={matches ? 700 : 300}
              height={matches ? 400 : 175}
              style={{ borderRadius: 10 }}
            />
            <Button sx={{ mb: 15, mt: 3 }} variant="contained">
              Acesse
            </Button>
          </div>
        </Carousel>
      </div>
    </Box>
  );
};

export default HeroCarousel;

{
  /* {heroImages.map((image) => (
    <>
    <h1>{image.title}</h1>
    <p>{image.description}</p>
    <Image
    src={image.imgUrl}
    alt={image.alt}
    width={400}
    height={400}
    // className="object-contain"
    key={image.alt}
            />
            <button>Acesse</button>
          </>
        ))} */
}
