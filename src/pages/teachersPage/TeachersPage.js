import React from "react";
import { Container, Grid, Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { teachersData } from "../../dummyData/teachersData";

const TeachersPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Meet Our Teachers
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teachersData.map((teacher) => (
          <Grid item xs={12} sm={6} md={4} key={teacher.id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <Avatar 
                alt={teacher.name} 
                src={teacher.image} 
                sx={{ width: 100, height: 100, mb: 2 }} 
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="h2">
                  {teacher.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {teacher.subject}
                </Typography>
                <Box mt={2}>
                  <Typography variant="body2" color="textSecondary">
                    {teacher.bio}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TeachersPage;
