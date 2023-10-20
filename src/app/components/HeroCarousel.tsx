"use client"

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import pingpong from "../public/assets/images/pingpong.png"
import dalle from "../public/assets/images/dalle.png"
import issTracker from "../public/assets/images/iss-tracker.png"
import logo from "../public/assets/images/logoBranca.svg"
import { Box } from "@mui/material";
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
  return (
    <Box sx={{p:5, width:"50%"}}>
      <Carousel  className="hero-carousel"
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={false}
        showStatus={false}
      >
         {/* {heroImages.map((image) => (
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
        ))} */}
        <>
          <h1>{"ping pongo"}</h1>
          <p>{"testetetretwetr"}</p>
          <Image
          src={pingpong}
          alt={"pingpong"}
          width={400}
          height={400}
          className="object-contain"
          />
          <button>Acesse</button>
        </>
        <>
          <h1>{"ping pongo"}</h1>
          <p>{"testetetretwetr"}</p>
          <Image
          src={issTracker}
          alt={"pingpong"}
          width={400}
          height={400}
          className="object-contain"
          />
          <button>Acesse</button>
        </>
        <>
          <h1>{"ping pongo"}</h1>
          <p>{"testetetretwetr"}</p>
          <Image
          src={dalle}
          alt={"pingpong"}
          width={400}
          height={400}
          className="object-contain"
          />
          <button>Acesse</button>
        </>
      </Carousel>
    </Box>
  );
};

export default HeroCarousel;



        {/* {heroImages.map((image) => (
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
        ))} */}