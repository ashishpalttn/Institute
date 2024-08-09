// src/components/DrawerContent.js
import React from "react";
import { Box, Typography, Divider, List, ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { homePageData } from "../../dummyData/headerData";
import drawerHeaderImage from '../../assets/drawer-header-image.jpg';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';

const mapIcon = {
  home: <HomeTwoToneIcon/>,
  about: <LeaderboardOutlinedIcon/>,
  contact: <CallTwoToneIcon/>,
  // Add more icons as needed
};

// Styled component for ListItemButton to add scale animation
const AnimatedListItemButton = styled(ListItemButton)(({ theme }) => ({
  transition: "transform 0.3s ease-out",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));
const renderNavItems = (navItems, ButtonComponent, LinkComponent) => {
  return navItems.map((item) => (
    <ButtonComponent key={item.url} color="inherit" component={LinkComponent} to={item.url}>
      <div className="flex gap-2">
      <div >{mapIcon[item.icon]}</div>
      <div>{item.name}</div>
      </div>
    </ButtonComponent>
  ));
};

const DrawerContent = ({ handleDrawerToggle }) => {
  return (
    <Box onClick={handleDrawerToggle} className='w-52' sx={{ textAlign: "center" }}>
      <div><img alt="logo" src ={drawerHeaderImage} className="h-28 flax w-full"></img></div>
        
      <Divider />
      <List>
        {renderNavItems(homePageData.header.navItems, AnimatedListItemButton, Link)}
      </List>
    </Box>
  );
};

export default DrawerContent;
