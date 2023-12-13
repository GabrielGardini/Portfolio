import React from "react";
import "./Satelite.css";
import { useMediaQuery } from "@mui/material";

const Satelite = () => {
  const matches = useMediaQuery("(min-width:750px)");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: matches ? 30 : 18,
        }}
      >
        <div
          style={{
            marginTop: 10,
            width: "60%",
            textAlign: "center",
          }}
        >
          <h1>When it comes to me, the sky is the limit</h1>
          <h1>Let&apos;s work together!</h1>
        </div>
      </div>
      <div class="body">
        <div class="planet">
          <div class="satellite"></div>
        </div>
      </div>
    </>
  );
};

export default Satelite;
