"use client";

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import pingpong from "../public/assets/images/pingpong.png";
import dalle from "../public/assets/images/dalle.png";
import issTracker from "../public/assets/images/iss-tracker.png";
import Todos from "../public/assets/images/Todos.png";
import jacare from "../public/assets/images/jacare.png";
import theOffice from "../public/assets/images/theOffice.png";
import flipstore from "../public/assets/images/flipstore.png";
import pedalarte from "../public/assets/images/pedalarte.png";
import localizador from "../public/assets/images/localizadorDeSalas.png";
import { Box, Button, Divider, useMediaQuery } from "@mui/material";
import "../globals.css";

const HeroCarousel = () => {
  const matches = useMediaQuery("(min-width:1000px)");

  return (
    <>
      <Box
        sx={{
          p: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>My Projects</h1>
      </Box>
      <Box
        sx={{
          // p: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="boxShadow"
          style={{ backgroundColor: "#1A1F2E", padding: 20, borderRadius: 20 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#EFF1F6",
            }}
          >
            <h1>Aplications</h1>
          </Box>
          <Divider
            className="boxShadow"
            sx={{
              backgroundColor: "#EFF1F6",
            }}
          />
          <Carousel
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            showThumbs={false}
            autoPlay
            infiniteLoop
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
              <h1>{"Dall-e Clone"}</h1>
              <p>
                {
                  "Application that generates images using artificial intelligence and saves them in a repository. Created to improve my knowledge about MERN"
                }
              </p>
              <Image
                src={dalle}
                alt={"dalle"}
                width={matches ? 700 : 300}
                height={matches ? 400 : 175}
                style={{ borderRadius: 10 }}
              />
              <a
                target="blank"
                href="https://dalle-clone-delta.vercel.app"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    mb: 15,
                    mt: 3,
                    bgcolor: "#3D5BA9",
                    color: "#EFF1F6",
                    ":hover": { backgroundColor: "#EFF1F6", color: "#3D5BA9" },
                  }}
                  variant="contained"
                >
                  access
                </Button>
              </a>
            </div>
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                mb: 15,
              }}
            >
              <h1>{"Todo List"}</h1>
              <p>
                {
                  "A website where users can create an account and save their to-do list, created to improve knowledge about the MERN Stack"
                }
              </p>
              <Image
                src={Todos}
                alt={"Todos"}
                width={matches ? 700 : 300}
                height={matches ? 400 : 175}
                style={{ borderRadius: 10 }}
              />
              <a
                target="blank"
                href="https://todo-list-one-swart.vercel.app"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    mb: 15,
                    mt: 3,
                    bgcolor: "#3D5BA9",
                    color: "#EFF1F6",
                    ":hover": { backgroundColor: "#EFF1F6", color: "#3D5BA9" },
                  }}
                  variant="contained"
                >
                  access
                </Button>
              </a>
            </div>
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                mb: 15,
              }}
            >
              <h1>{"Jacaré do SUS"}</h1>
              <p>
                {"Created in a game development marathon during the pandemic"}
              </p>
              <Image
                src={jacare}
                alt={"jacaré do sus"}
                width={matches ? 700 : 300}
                height={matches ? 400 : 175}
                style={{ borderRadius: 10 }}
              />
              <a
                target="blank"
                href="https://pvskp.itch.io/jacar-do-sus"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    mb: 15,
                    mt: 3,
                    bgcolor: "#3D5BA9",
                    color: "#EFF1F6",
                    ":hover": { backgroundColor: "#EFF1F6", color: "#3D5BA9" },
                  }}
                  variant="contained"
                >
                  access
                </Button>
              </a>
            </div>
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                mb: 15,
              }}
            >
              <h1>{"ISS Tracker"}</h1>
              <p>
                {
                  "Application that shows where the International Space Station is currently located created to improve my knowledge about consumption and API's."
                }
              </p>
              <Image
                src={issTracker}
                alt={"iss Tracker"}
                width={matches ? 700 : 300}
                height={matches ? 400 : 175}
                style={{ borderRadius: 10 }}
              />
              <a
                target="blank"
                href="https://iss-tracker-j8yq.vercel.app"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    mb: 15,
                    mt: 3,
                    bgcolor: "#3D5BA9",
                    color: "#EFF1F6",
                    ":hover": { backgroundColor: "#EFF1F6", color: "#3D5BA9" },
                  }}
                  variant="contained"
                >
                  access
                </Button>
              </a>
            </div>
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                mb: 15,
              }}
            >
              <h1>{"Ping Pong Game"}</h1>
              <p>{"Ping Pong game created using only javascript."}</p>
              <Image
                src={pingpong}
                alt={"ping pong"}
                width={matches ? 700 : 300}
                height={matches ? 400 : 175}
                style={{ borderRadius: 10 }}
              />
              <a
                target="blank"
                href="https://jogo-ping-pong-peach.vercel.app"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    mb: 15,
                    mt: 3,
                    bgcolor: "#3D5BA9",
                    color: "#EFF1F6",
                    ":hover": { backgroundColor: "#EFF1F6", color: "#3D5BA9" },
                  }}
                  variant="contained"
                >
                  access
                </Button>
              </a>
            </div>
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                mb: 15,
              }}
            >
              <h1>{"The Office Quotes"}</h1>
              <p>
                {
                  "Web application that contains several striking phrases from The Office. Created to improve Api consumption and audio reproduction concepts"
                }
              </p>
              <Image
                src={theOffice}
                alt={"the office"}
                width={matches ? 700 : 300}
                height={matches ? 400 : 175}
                style={{ borderRadius: 10 }}
              />
              <a
                target="blank"
                href="https://the-office-quotes-five.vercel.app"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    mb: 15,
                    mt: 3,
                    bgcolor: "#3D5BA9",
                    color: "#EFF1F6",
                    ":hover": { backgroundColor: "#EFF1F6", color: "#3D5BA9" },
                  }}
                  variant="contained"
                >
                  access
                </Button>
              </a>
            </div>
          </Carousel>
        </div>
      </Box>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#EFF1F6",
            }}
          >
            <h1>Designs</h1>
          </Box>
          <Divider
            className="boxShadow"
            sx={{
              backgroundColor: "#EFF1F6",
            }}
          />
          <Carousel
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            showThumbs={false}
            autoPlay
            infiniteLoop
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
              <h1>{"FlipStore"}</h1>
              <p>
                {
                  "Design in figma of an arcade store app created in my Google ux design certification"
                }
              </p>
              <Image
                src={flipstore}
                alt={"flipstore"}
                width={matches ? 700 : 300}
                height={matches ? 400 : 175}
                style={{ borderRadius: 10 }}
              />
              <a
                target="blank"
                href="https://www.figma.com/proto/ffd4FVKQ0DKPUnrKS3Ty40/Protótipo-de-alta-fidelidade?type=design&node-id=104-2178&t=maPAN1l5aq2uKExp-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=104%3A2178"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    mb: 15,
                    mt: 3,
                    bgcolor: "#3D5BA9",
                    color: "#EFF1F6",
                    ":hover": { backgroundColor: "#EFF1F6", color: "#3D5BA9" },
                  }}
                  variant="contained"
                >
                  access
                </Button>
              </a>
            </div>
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>{"PedalArte"}</h1>
              <p>
                {
                  "Design in Adobe XD of a custom bike shop website created in my Google UX design certification"
                }
              </p>
              <Image
                src={pedalarte}
                alt={"pedalarte"}
                width={matches ? 700 : 300}
                height={matches ? 400 : 175}
                style={{ borderRadius: 10 }}
              />
              <a
                target="blank"
                href="https://xd.adobe.com/view/430f9661-16d3-4f84-acdb-050273c66cdd-165c/?fullscreen"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    mb: 15,
                    mt: 3,
                    bgcolor: "#3D5BA9",
                    color: "#EFF1F6",
                    ":hover": { backgroundColor: "#EFF1F6", color: "#3D5BA9" },
                  }}
                  variant="contained"
                >
                  access
                </Button>
              </a>
            </div>
            <div
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <h1>{"Unicamp classroom finder"}</h1>
              <p>
                {
                  "Design created in Adobe XD for a classroom locator application at the State University of Campinas"
                }
              </p>
              <Image
                src={localizador}
                alt={"Localizador de salas"}
                width={matches ? 700 : 300}
                height={matches ? 400 : 175}
                style={{ borderRadius: 10 }}
              />
              <a
                target="blank"
                href="https://xd.adobe.com/view/00c1b330-d24b-4490-9994-8cca1d2161c8-5592/"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    mb: 15,
                    mt: 3,
                    bgcolor: "#3D5BA9",
                    color: "#EFF1F6",
                    ":hover": { backgroundColor: "#EFF1F6", color: "#3D5BA9" },
                  }}
                  variant="contained"
                >
                  access
                </Button>
              </a>
            </div>
          </Carousel>
        </div>
      </Box>
    </>
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
            <button>access</button>
          </>
        ))} */
}
