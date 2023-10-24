"use client";

import React from "react";
import { Box, Button, Card, Divider, Grid, useMediaQuery } from "@mui/material";
import "../experience.css";
import "../habilities.css";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import pingpong from "../public/assets/images/pingpong.png";
import dalle from "../public/assets/images/dalle.png";
import issTracker from "../public/assets/images/iss-tracker.png";
import Todos from "../public/assets/images/Todos.png";
import jacare from "../public/assets/images/jacare.png";
import theOffice from "../public/assets/images/theOffice.png";
import flipstore from "../public/assets/images/flipstore.png";
import pedalarte from "../public/assets/images/pedalarte.png";
import localizador from "../public/assets/images/localizadorDeSalas.png";

const Teste = () => {
  //ESTILOS SOLUTIONS
  const matches = useMediaQuery("(min-width:1000px)");
  const matches2 = useMediaQuery("(min-width:2300px)");
  const matches3 = useMediaQuery("(min-width:1700px)");
  const box = {
    // marginY: 2,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#11141D",
    fontFamily: "Poppins",
    fontSize: matches ? 24 : 18,
    color: "#EFF1F6",
  };

  const gridContainerWhite = {
    p: 5,
    color: "white",
    width: matches ? "70%" : "100%",
  };
  const solutionBoxBlue = {
    fontFamily: "Poppins",
    backgroundColor: "#11141D",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#11141D" }}>
        <Box id={"solucoes"} sx={box}>
          <h1 className="test">My Habilities</h1>
        </Box>
        <Box sx={solutionBoxBlue}>
          <Grid container sx={gridContainerWhite}>
            <Grid
              className="boxShadow"
              sx={{
                backgroundColor: "#1A1F2E",
                borderRadius: 5,
                p: 3,
                fontSize: matches ? 24 : 14,
              }}
              item
              md={5.6}
              xs={12}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
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
                  width={matches2 ? 700 : matches ? 500 : 300}
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
                      width={matches2 ? 700 : matches ? 500 : 300}
                      height={matches2 ? 400 : matches ? 250 : 175}
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
                          ":hover": {
                            backgroundColor: "#EFF1F6",
                            color: "#3D5BA9",
                          },
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
                          ":hover": {
                            backgroundColor: "#EFF1F6",
                            color: "#3D5BA9",
                          },
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
                    <h1>{"Jacaré do SUS"}</h1>
                    <p>
                      {
                        "Created in a game development marathon during the pandemic"
                      }
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
                          ":hover": {
                            backgroundColor: "#EFF1F6",
                            color: "#3D5BA9",
                          },
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
                          ":hover": {
                            backgroundColor: "#EFF1F6",
                            color: "#3D5BA9",
                          },
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
                          ":hover": {
                            backgroundColor: "#EFF1F6",
                            color: "#3D5BA9",
                          },
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
                          ":hover": {
                            backgroundColor: "#EFF1F6",
                            color: "#3D5BA9",
                          },
                        }}
                        variant="contained"
                      >
                        access
                      </Button>
                    </a>
                  </div>
                </Carousel>
              </Box>
            </Grid>
            <Grid item md={0.8} xs={12}>
              <p style={{ color: "#11141D" }}> .</p>
            </Grid>
            <Grid
              className="boxShadow"
              sx={{
                backgroundColor: "#1A1F2E",
                borderRadius: 5,
                p: 3,
                fontSize: matches ? 24 : 14,
              }}
              item
              md={5.6}
              xs={12}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
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
                  width={matches2 ? 700 : matches ? 500 : 300}
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
                      width={matches2 ? 700 : matches ? 500 : 300}
                      height={matches2 ? 400 : matches ? 250 : 175}
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
                          ":hover": {
                            backgroundColor: "#EFF1F6",
                            color: "#3D5BA9",
                          },
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
                          ":hover": {
                            backgroundColor: "#EFF1F6",
                            color: "#3D5BA9",
                          },
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
                          ":hover": {
                            backgroundColor: "#EFF1F6",
                            color: "#3D5BA9",
                          },
                        }}
                        variant="contained"
                      >
                        access
                      </Button>
                    </a>
                  </div>
                </Carousel>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Teste;
