// src/components/NavBar.js
import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { homePageData } from "../../dummyData/homePageData";

// Styled component for Button with hover and focus effects
const AnimatedButton = styled(Button)(({ theme }) => ({
  transition: "transform 0.3s ease-out, color 0.3s ease-out",
  "&:hover": {
    transform: "scale(1.2)",
    color: theme.palette.primary.light,
  },
  "&:focus": {
    outline: "none",
    transform: "scale(1.2)",
    color: theme.palette.primary.light,
  },
}));
export const renderNavItems = (navItems, ButtonComponent, LinkComponent) => {
  return navItems.map((item) => (
    <ButtonComponent key={item.url} color="inherit" component={LinkComponent} to={item.url}>
      {item.name}
    </ButtonComponent>
  ));
};

const NavBar = ({ handleDrawerToggle }) => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
        >
          {homePageData.header.instituteName}
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {renderNavItems(homePageData.header.navItems, AnimatedButton, Link)}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
