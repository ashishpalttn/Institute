import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Container } from "@mui/material";
import { galleryData } from "../../dummyData/galleryData";
import { CustomCard } from "../../shared-components/CustomCard";

const GalleryPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Gallery
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {galleryData.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <CustomCard>
              <CardMedia
                component="img"
                image={item.imgSrc}
                alt={item.title}
                sx={{ height: 180 }}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {item.title}
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GalleryPage;
