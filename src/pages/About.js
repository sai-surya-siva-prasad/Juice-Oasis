import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

function About() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Paper sx={{ p: 3, mt: 3 }}>
          <Typography variant="body1" paragraph>
            Welcome to Fresh Juice Shop, your destination for healthy and refreshing beverages. We are passionate about providing our customers with the highest quality juices and beverages made from fresh, natural ingredients.
          </Typography>
          <Typography variant="body1" paragraph>
            Our journey began with a simple idea: to make healthy drinking easy and delicious. Today, we're proud to serve a wide variety of fresh juices, smoothies, and healthy breakfast options that not only taste great but also contribute to your well-being.
          </Typography>
          <Typography variant="body1" paragraph>
            Every drink we serve is crafted with care, using only the freshest fruits and vegetables. We believe in transparency and quality, which is why we prepare all our beverages right in front of our customers.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default About; 