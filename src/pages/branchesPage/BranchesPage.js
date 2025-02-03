import React from "react";
import { Grid, Card, CardContent, Typography, Container } from "@mui/material";
import { branchesData } from "../../dummyData/branchesData";
import '../../animations.css';
import { CustomCard } from "../../shared-components/CustomCard";

export default function BranchesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Branches
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {branchesData.map((branch, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
         <CustomCard>
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
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
