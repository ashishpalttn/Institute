// src/components/NavBar.js
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Badge,
  FormControlLabel,
  Switch,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { headerData } from "../../dummyData/headerData";
import MailIcon from "@mui/icons-material/Mail";
import ThemeToggle from "../ThemeToggleBtn";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageSwitcher from "../LanguageSwitcher";
import { getEventData } from "../../store/event";



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
  const navigate = useNavigate();
  const [liveEventCount, setLiveEventCount] = useState(0);
  useEffect(() => {
    const fetchEventData = async () => {
      const data = await getEventData();
      if (Array.isArray(data)) {
        const count = data.filter(event => event.eventStatus === "live").length;
        setLiveEventCount(count);
      } else {
        console.error("Invalid data:", data);
      }
    };

    fetchEventData(); 
  }, []); 
  
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
          className="font-bold text-theme"
        >
          {headerData.instituteName}
        </Typography>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <ThemeToggle />   
          {renderNavItems(headerData.navItems, AnimatedButton, Link)}
        </Box>
        <LanguageSwitcher/>
        <Badge className="mr-4" onClick={()=>navigate('./event')} badgeContent={1} color="primary">
            <NotificationsIcon color="white" />
          </Badge>
        <Badge onClick={()=>navigate('./event')} badgeContent={liveEventCount} color="primary">
            <EventAvailableIcon color="white" />
          </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
