import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { admissionData } from "../../dummyData/admissionData";

const AdmissionPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        {admissionData.title}
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        {admissionData.description}
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Admission Steps
        </Typography>
        <List>
          {admissionData.steps.map((step) => (
            <ListItem key={step.id}>
              <ListItemText
                primary={step.title}
                secondary={step.description}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Important Dates
        </Typography>
        <List>
          {admissionData.importantDates.map((date) => (
            <ListItem key={date.id}>
              <ListItemText
                primary={date.event}
                secondary={date.date}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1">
          Email: {admissionData.contactInfo.email}
        </Typography>
        <Typography variant="body1">
          Phone: {admissionData.contactInfo.phone}
        </Typography>
      </Box>
    </Container>
  );
};

export default AdmissionPage;
