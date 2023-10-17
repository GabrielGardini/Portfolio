"use client"
import React from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";
import UnicampLogo from "../assets/images/Logo_Unicamp.jpg";
import { LinkedIn } from "@mui/icons-material";
import Image from "next/image";

const Formation = () => {
  const matches = useMediaQuery("(min-width:1200px)");
  //ESTILOS
  const box = {
    fontFamily: "Poppins",
    backgroundColor: "#11141D",
    display: "flex",
    justifyContent: "center",
  };
  const gridContainer = {
    p: 5,
    color: "#EFF1F6",
    width: matches ? "70%" : "100%",
  };
  const detailBox = {
    paddingLeft: 30,
    fontSize: 18,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderWidth: 1,
    borderColor: "#3D5BA9",
    borderStyle: "solid",
    marginTop: 40,
  };
  const logoClient = {
    // textAlign: "center",
    width: matches ? 360 : 240,
    height: matches ? 195 : 130,
    borderRadius: 20,
  };
  const botaoContato = {
    backgroundColor: "#3D5BA9",
    fontFamily: "Poppins",
    color: "#EFF1F6",
    marginTop: 5,
    "&:hover": {
      color: "#1976d2",
      backgroundColor: "white",
    },
  };

  return (
    <>
      <Box id={"experience"} style={box}>
        <Grid sx={gridContainer} container spacing={5}>
          <Grid item xl={6} xs={12}>
            <h1>
            Studying Computer Science at{" "}
              <b style={{ color: "#3D5BA9" }}>Unicamp</b>
            </h1>
            <h2>{/* {i18n.t('formation.subtitle')} */}</h2>
            <Box style={detailBox} className="boxShadow">
              <h3>Currently in the seventh semester of the course</h3>
              <h3>More than 2 years of experience working with web and mobile development in large companies.</h3>
            </Box>
          </Grid>
          <Grid item xl={6} xs={12} sx={{ textAlign: "-webkit-center" }}>
            <Box>
              <Image src={UnicampLogo} style={logoClient} alt="logo unicamp" />
            </Box>
            <h2 style={{ color: "white" }}>Don't waste time and get in touch!</h2>
            <Button
              href={"https://www.linkedin.com/in/gabrielgardini/"}
              target="blank"
              sx={botaoContato}
              size="large"
              variant="contained"
              startIcon={<LinkedIn fontSize="large" />}
              title="Contact"
            >
              Get in touch!
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Formation;
