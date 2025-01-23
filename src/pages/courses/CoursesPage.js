import React from "react";
import { Box, Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { coursesData } from "../../dummyData/coursesData";
import { CustomCard } from "../../shared-components/CustomCard";
import Heading from "../../shared-components/Heading";


// Example data for courses
export const RenderCourses = () => {
  return (
    <Grid className="justify-center" container spacing={2}>
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
  )
};

export const CoursesPage = () => {
  return (
    <Container className="my-10" maxWidth="lg">

      <Heading level={1} text="Welcome to My Website" align="center" className="text-4xl rounded-3xl bg-primary-700 font-bold text-white-700" icon="📘"/>
      {/* <Heading title='Our Courses' /> */}
      {/* <Heading level={2} text="About Me" align="left" className="text-2xl font-medium text-gray-700 mt-4" />
      <Heading level={3} text="Contact Info" align="right" className="text-lg text-gray-500 italic" /> */}
      <RenderCourses />
    </Container>
  );
};

export default CoursesPage;
