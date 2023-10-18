"use client"

import React from "react";
import { Box, Card, Grid, useMediaQuery } from "@mui/material";
import "../experience.css";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Habilities = () => {
  //ESTILOS SOLUTIONS
  const matches = useMediaQuery("(min-width:1000px)");
  const box = {
    // marginY: 2,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#11141D",
    fontFamily: "Poppins",
    fontSize: matches ? 24 : 18,
    color:"#EFF1F6",
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
        <Box id={"solucoes"} data-anime={"center"} sx={box}>
          <h1 className="test">
            My Habilities
          </h1>
        </Box>
        <Box sx={solutionBoxBlue}>
          <Grid container sx={gridContainerWhite}>
            <Grid
              data-anime={"center"}
              className="boxShadow"
              sx={{ backgroundColor: "#1A1F2E", borderRadius: 5, p: 3, fontSize: matches? 24 : 14 }}
              item
              md={5.6}
              xs={12}
            >
              <Box sx={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems:"center" }}>
                <h3 style={{fontSize:30}}>FrontEnd</h3>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
           
              </Box>
              
            </Grid>
            <Grid item md={0.8} xs={12}>
              <p style={{ color: "#11141D" }}> .</p>
            </Grid>
            <Grid
              data-anime={"center"}
              className="boxShadow"
              sx={{ backgroundColor: "#1A1F2E", borderRadius: 5, p: 3, fontSize: matches? 24 : 14 }}
              item
              md={5.6}
              xs={12}
            >
             <Box sx={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems:"center" }}>
                <h3 style={{fontSize:30}}>FrontEnd</h3>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#9EA6B9"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#D69B23"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
                <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-around", width:matches?"60%":"90%"}}>
                  <WorkspacePremiumIcon sx={{color:"#915511"}}/>
                  <h3>Typescript</h3>
                  <h3> Advanced</h3>
                </Box>
           
              </Box>
              
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Habilities;