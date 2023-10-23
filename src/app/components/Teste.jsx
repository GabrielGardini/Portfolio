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
import logo from "../public/assets/images/logoBranca.svg";

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
                    <h1>{"ping pongoooo"}</h1>
                    <p>{"testetetretwetr"}</p>
                    <Image
                      src={pingpong}
                      alt={"pingpong"}
                      width={matches2 ? 700 : matches ? 500 : 300}
                      height={matches2 ? 400 : matches ? 250 : 175}
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
                    <h1>{"ping pongoooo"}</h1>
                    <p>{"testetetretwetr"}</p>
                    <Image
                      src={pingpong}
                      alt={"pingpong"}
                      width={matches2 ? 700 : matches ? 500 : 300}
                      height={matches2 ? 400 : matches ? 250 : 175}
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
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Teste;
