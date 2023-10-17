// import React from "react";
// import { Box, Grid, useMediaQuery } from "@mui/material";
// import CallIcon from "@mui/icons-material/Call";
// import Button from "@mui/material/Button";
// import UnicampLogo from "./Unicamp";
// import { LinkedIn } from "@mui/icons-material";

// const Formation = () => {
//   const matches = useMediaQuery("(min-width:1000px)");
//   //ESTILOS
//   const box = {
//     fontFamily: "Poppins",
//     backgroundColor: "black",
//     display: "flex",
//     justifyContent: "center",
//   };
//   const gridContainer = {
//     p: 5,
//     color: "white",
//     width: matches ? "70%" : "100%",
//   };
//   const detailBox = {
//     paddingLeft: 30,
//     fontSize: 18,
//     borderRadius: 10,
//     borderTopLeftRadius: 0,
//     borderWidth: 1,
//     borderColor: "aqua",
//     borderStyle: "solid",
//     marginTop: 40,
//   };
//   const logoClient = {
//     textAlign: "center",
//     width: matches ? 360 : 240,
//     height: matches ? 195 : 130,
//     borderRadius: 20,
//   };
//   const botaoContato = {
//     backgroundColor: "white",
//     fontFamily: "Poppins",
//     color: "black",
//     marginTop: 5,
//     "&:hover": {
//       color: "#1976d2",
//       backgroundColor: "white",
//     },
//   };

//   return (
//     <>
//       <Box id={"experience"} style={box}>
//         <Grid sx={gridContainer} container spacing={5}>
//           <Grid item xl={6} xs={12}>
//             <h1>
//               {i18n.t("formation.title")}
//               <b style={{ color: "aqua" }}>{i18n.t("formation.unicamp")}</b>
//             </h1>
//             <h2>{/* {i18n.t('formation.subtitle')} */}</h2>
//             <Box style={detailBox}>
//               <h3>{i18n.t("formation.detail1")}</h3>
//               <h3>{i18n.t("formation.detail2")}</h3>
//             </Box>
//           </Grid>
//           <Grid item xl={6} xs={12} sx={{ textAlign: "-webkit-center" }}>
//             <Box>
//               <UnicampLogo style={logoClient} />
//             </Box>
//             <h2 style={{ color: "white" }}>{i18n.t("formation.detail3")}</h2>
//             <Button
//               href={"https://www.linkedin.com/in/gabrielgardini/"}
//               target="blank"
//               sx={botaoContato}
//               size="large"
//               variant="contained"
//               startIcon={<LinkedIn fontSize="large" />}
//               title="conato"
//             >
//               {i18n.t("formation.contact")}
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Formation;
