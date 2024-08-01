import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { homeData } from "../../DummyData/data";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

// Styled component for the Drawer with additional animation
const AnimatedDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: drawerWidth,
    transform: "translateX(-100%)",
    transition: "transform 0.5s ease-out, opacity 0.3s ease-out",
    opacity: 0,
    "&.MuiDrawer-paperAnchorDockedLeft": {
      borderRight: 0,
    },
  },
  "& .MuiBackdrop-root": {
    transition: "opacity 0.3s ease-out",
  },
  "&[open] .MuiDrawer-paper": {
    transform: "translateX(0)",
    opacity: 1,
  },
  "&[open] .MuiBackdrop-root": {
    opacity: 1,
  },
}));

// Styled component for ListItemButton to add scale animation
const AnimatedListItemButton = styled(ListItemButton)(({ theme }) => ({
  transition: "transform 0.3s ease-out",
  "&:hover": {
    transform: "scale(2.05)",
  },
}));

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

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {homeData.header.instituteName}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <AnimatedListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </AnimatedListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          >
            {homeData.header.instituteName}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <AnimatedButton key={item} sx={{ color: "#fff" }}>
                {item}
              </AnimatedButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <AnimatedDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          {drawer}
        </AnimatedDrawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        </Typography>
      </Box> */}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
