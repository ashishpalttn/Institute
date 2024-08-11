// src/components/NavBar.js
import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { headerData } from "../../dummyData/headerData";

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
        <img src={`${process.env.PUBLIC_URL}${headerData.logo}`} className="w-8 h-8 mr-2" alt="Logo" />

        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          className="font-bold"
        >
          {headerData.instituteName}
        </Typography>
    
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {renderNavItems(headerData.navItems, AnimatedButton, Link)}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
