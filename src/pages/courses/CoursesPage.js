import React from "react";
import { Box, Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { coursesData } from "../../dummyData/coursesData";
import { CustomCard } from "../../shared-components/CustomCard";
// Example data for courses


const CoursesPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Our Courses
      </Typography>
      <Grid className="justify-center" container spacing={4}>
        {coursesData.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomCard>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {course.description}
                </Typography>
                <Button variant="contained" color="primary" href={course.link}>
                  Learn More
                </Button>
              </CardContent>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoursesPage;
