import { Box, CssBaseline, Toolbar } from "@mui/material";
import React from "react";
import Header from "../../shared-components/header/HeaderComponent";
import { Outlet } from "react-router-dom";
import Footer from "../../shared-components/footer/FooterComponent";


export const LandingPage = (props) => {
  return (
    <Box sx={{ display: "block" }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ p: 3 ,display:'block'}}>
        <Toolbar />
        <Outlet/>
      </Box>
      <Box sx={{display:"block",}}><Footer/></Box>
    </Box>
  );
};
