import { Box, CssBaseline, Drawer, Toolbar } from "@mui/material";
import React from "react";
import DrawerAppBar from "../../shared-components/header";
import HomePage from "../homePage/HomePage";
import { Outlet } from "react-router-dom";

export const LandingPage = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DrawerAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {/* <HomePage /> */}
        <Outlet/>
      </Box>
    </Box>
  );
};
