"use client"

import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import {
  Fab,
  Modal,
  Slide,
  TextField,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import { Settings } from "@mui/icons-material";

const pages = [
  { title: "Experience", route: "#experience", target: "" },
  { title: "Projects", route: "#projects", target: "" },
  {
    title: "Contact",
    route: "https://www.linkedin.com/in/gabrielgardini/",
    target: "blank",
  },
];

function HideOnScroll(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  //ESTILOS DO HEADER
  const matches = useMediaQuery("(min-width:600px)");
  const matches2 = useMediaQuery("(min-width:900px)");

  const logoText = {
    fontFamily: "Poppins",
    color: "#EFF1F6",
    display: "block",
    fontSize: 24,
    textDecoration: "none",
    margin: 30,
  };
  const box1 = {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    justifyContent: "flex-end",
  };
  const box2 = {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "flex-end",
  };
  const option = {
    color: "#EFF1F6",
    display: "block",
    fontSize: 24,
    textDecoration: "none",
    margin: 30,
  };
  const optionSmall = {
    textDecoration: "none",
    color: "black",
  };



  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);



  const handleOpenNavMenu = (event:any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <HideOnScroll id={"sobre"}>
        <AppBar
          className="gradient"
          sx={{ backgroundColor: "#1A1F2E" }}
          elevation={2}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <h1
                onClick={() =>
                  window[`scrollTo`]({ top: 0, behavior: `smooth` })
                }
                style={logoText}
              >
                Gabriel Gardini
              </h1>
              <Box sx={box1}>
                <IconButton
                  size="large"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.title}>
                      <Typography fontFamily={"Poppins"} textAlign="center">
                        <a
                          href={page.route}
                          target={page.target}
                          style={optionSmall}
                        >
                          {page.title}
                        </a>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={box2}>
                {pages.map((page, index) => (
                  <div key={index}>
                    <Typography fontFamily={"Poppins"} textAlign="center">
                      <a href={page.route} target={page.target} style={option}>
                        {page.title}
                      </a>
                    </Typography>
                  </div>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
export default Header;
