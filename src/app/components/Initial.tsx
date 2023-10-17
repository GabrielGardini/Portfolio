"use client"

import React from "react";
import { Box, Divider, Grid, useMediaQuery } from "@mui/material";
import ProfilePicture from "../assets/images/profile-picture.jpg";
import Image from "next/image";

const Initial = () => {
  //ESTILOS DE INITIAL
  const matches = useMediaQuery("(min-width:1200px)");
  const box = {
    fontFamily: "Poppins",
    backgroundColor: "#11141D",
    borderColor:"#3D5BA9",
    display: "flex",
    justifyContent: "center",
    marginTop: matches ? 10 : 5,
  };
  const gridContainer = {
    p: 5,
    // color: "#EFF1F6",
    width: matches ? "70%" : "100%",
  };
  const title = {
    fontSize: 40,
    // color: "white",
  };
  const detailBox = {
    borderWidth: 2,
    borderColor:"#3D5BA9",
    borderStyle: "solid",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    padding: 5,
    backgroundColor: "#1A1F2E",
    // color: "black",
  };
  const animation = {
    borderRadius: matches? 1000: 100,
    width: matches ? 330 : 200,
    height: matches ? 330 : 200,
  };

  return (
    <>
      <Box id="initial" sx={box}>
        <Grid container sx={gridContainer}>
          <Grid item lg={6} xs={12}>
            <h1 style={title}>{"Welcome!"}</h1>
            <Divider sx={{backgroundColor:"white"}} />
            <h2>Get to know about me</h2>
            <Box className="boxShadow" style={detailBox}>
              <h3>My name is Gabriel Gardini and I'm a Full Stack developer and a UX Designer</h3>
              <h3>Passionate about technology and design, I love doing projects like this website in my free time to improve myself.</h3>
              <h3>Here you will find out a little more about me and my projects!</h3>
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
            sx={{
              textAlign: matches ? "-webkit-right" : "center",
              marginTop: matches ? 0 : 5,
            }}
          >
            <div className="profileContainer">

            <div className="profileBox" >
              <div className="profileContent">
              <Image
              className="profilePicture"
              src={ProfilePicture}
              alt={"Profile Picture"}
              // width={300}
              // height={300}
              style={animation}
              />
              </div>
            </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Initial;
