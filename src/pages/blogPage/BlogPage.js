import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Container } from "@mui/material";
import { blogData } from "../../dummyData/blogData";
import { CustomCard } from "../../shared-components/CustomCard";

const BlogPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Blog
      </Typography>
      <Grid container spacing={4}>
        {blogData.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <CustomCard>
              <CardMedia
                component="img"
                height="200"
                image={post.imgSrc}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.date} by {post.author}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {post.excerpt}
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogPage;
