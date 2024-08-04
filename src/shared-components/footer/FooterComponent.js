// src/components/Footer.js
import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { footerData } from "../../dummyData/footerData";



const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0),

}));

const iconMap = {
  Facebook: <FacebookIcon />,
  Twitter: <TwitterIcon />,
  Instagram: <InstagramIcon />,
  LinkedIn: <LinkedInIcon />,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {footerData.contact.title}
            </Typography>
            <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
              {footerData.contact.address}
            </Typography>
            <Typography variant="body2">
              Phone: {footerData.contact.phone}
              <br />
              Email: {footerData.contact.email}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {footerData.quickLinks.title}
            </Typography>
            {footerData.quickLinks.links.map((link, index) => (
              <Link key={index} href={link.href} color="inherit" variant="body2" display="block">
                {link.text}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {footerData.socialMedia.title}
            </Typography>
            <Box>
              {footerData.socialMedia.links.map((link, index) => (
                <Link key={index} href={link.href} color="inherit" sx={{ mr: 1 }}>
                  {iconMap[link.icon]}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body2" align="center">
            {footerData.copyright.replace("{year}", currentYear)}
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
