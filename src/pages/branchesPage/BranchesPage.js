import React from "react";
import { Grid, Card, CardContent, Typography, Container } from "@mui/material";
import { branchesData } from "../../dummyData/branchesData";
import '../../animations.css';

export default function BranchesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Branches
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {branchesData.map((branch, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              className="transition-transform duration-500 hover:scale-105 hover:shadow-xl"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                "&:hover": {
                  transform: 'scale(1.00)',
                  boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {branch.city}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {branch.address}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {branch.phone}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {branch.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
