// src/components/NavBar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { headerData } from "../../dummyData/headerData";
import MailIcon from "@mui/icons-material/Mail";
import ThemeToggle from "../ThemeToggleBtn";
import LanguageSwitcher from "../LanguageSwitcher";


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
    <ButtonComponent
      key={item.url}
      color="inherit"
      component={LinkComponent}
      to={item.url}
    >
      {item.name}
    </ButtonComponent>
  ));
};

const NavBar = ({ handleDrawerToggle }) => {
  return (
    <AppBar component="nav">
      <Toolbar className="bg-primary-700 text-white">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <img
          src={`${process.env.PUBLIC_URL}${headerData.logo}`}
          className="w-7 h-7 mr-2"
          alt="Logo"
        />

        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          className="font-bold"
        >
          {headerData.instituteName}
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {/* <ThemeToggle /> */}
         
        
          {renderNavItems(headerData.navItems, AnimatedButton, Link)}
        </Box>
        <LanguageSwitcher/>
        <Badge badgeContent={1} color="primary">
            <MailIcon color="white" />
          </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
