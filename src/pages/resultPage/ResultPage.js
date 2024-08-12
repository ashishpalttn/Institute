import React from "react";
import { Grid, CardContent, Typography, Container, Avatar, Box } from "@mui/material";
import { resultsData } from "../../dummyData/resultsData";
import { CustomCard } from "../../shared-components/CustomCard";

const ResultsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Exam Results
      </Typography>
      <Grid className="justify-center" container spacing={4}>
        {resultsData.map((result) => (
          <Grid item key={result.id} xs={12} sm={6} md={4}>
            <CustomCard>
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <Avatar 
                    src={result.imgSrc} 
                    alt={result.name} 
                    sx={{ width: 100, height: 100 }} 
                  />
                </Box>
                <Typography variant="h5" component="h2" align="center">
                  {result.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  Roll No: {result.rollNo}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  Grade: {result.grade}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  Percentage: {result.percentage}
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ResultsPage;
