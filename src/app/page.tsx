"use client";
import { useEffect } from "react";
import Formation from "./components/Formation";
import Habilities from "./components/Habilities";
import Header from "./components/Headex";
import Initial from "./components/Initial";
import Scripts from "./Scripts";
import HeroCarousel from "./components/HeroCarousel";
import Teste from "./components/Teste";
import { useMediaQuery } from "@mui/material";
import IconHabilities from "./components/IconHabilities";
import Satelite from "./components/Satelite";

export default function Home() {
  const matches3 = useMediaQuery("(min-width:1700px)");

  useEffect(() => {
    Scripts();
  }, []);
  return (
    <>
      <Header />
      <Initial />
      <Formation />
      <div id="experience"></div>
      {/* <Habilities /> */}
      <Satelite />
      <IconHabilities />
      <div id="projects"></div>
      {matches3 ? <Teste /> : <HeroCarousel />}
    </>
  );
}
