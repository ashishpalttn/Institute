// src/components/DrawerContent.js
import React from "react";
import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { homePageData } from "../../dummyData/headerData";
import { renderNavItems } from "./NavBar";

// Styled component for ListItemButton to add scale animation
const AnimatedListItemButton = styled(ListItemButton)(({ theme }) => ({
  transition: "transform 0.3s ease-out",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));

const DrawerContent = ({ handleDrawerToggle }) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {homePageData.header.instituteName}
      </Typography>
      <Divider />
      <List>
        {renderNavItems(homePageData.header.navItems, AnimatedListItemButton, Link)}
      </List>
    </Box>
  );
};

export default DrawerContent;
