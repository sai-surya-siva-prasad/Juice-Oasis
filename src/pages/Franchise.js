import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle,
  MonetizationOn,
  Store,
  Support,
  Timeline,
  Group,
} from '@mui/icons-material';

const benefits = [
  {
    icon: <Store />,
    title: 'Proven Business Model',
    description: 'Benefit from our established and successful business model',
  },
  {
    icon: <Support />,
    title: 'Complete Support',
    description: 'Comprehensive training and ongoing operational support',
  },
  {
    icon: <MonetizationOn />,
    title: 'High ROI',
    description: 'Attractive returns on investment with multiple revenue streams',
  },
  {
    icon: <Timeline />,
    title: 'Growth Potential',
    description: 'Excellent opportunities for expansion and market growth',
  },
  {
    icon: <Group />,
    title: 'Strong Network',
    description: 'Join a network of successful franchise partners',
  },
];

function Franchise() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Franchise Opportunities
        </Typography>

        {/* Hero Section */}
        <Paper
          sx={{
            p: 4,
            mb: 4,
            background: 'linear-gradient(45deg, #4CAF50 30%, #81C784 90%)',
            color: 'white',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Join Our Success Story
          </Typography>
          <Typography variant="body1" paragraph>
            Start your own Fresh Juice Shop franchise and be part of a growing health-conscious community. We provide complete support to help you establish and run a successful business.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
          >
            Request Franchise Information
          </Button>
        </Paper>

        {/* Benefits Section */}
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Why Choose Our Franchise?
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit) => (
            <Grid item xs={12} md={6} key={benefit.title}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: 'primary.main' }}>
                      {benefit.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={benefit.title}
                      secondary={benefit.description}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Requirements Section */}
        <Paper sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Franchise Requirements
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Initial Investment"
                secondary="$50,000 - $100,000"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Space Requirement"
                secondary="300-500 sq. ft."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Location"
                secondary="High-traffic commercial areas"
              />
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
          >
            Apply Now
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default Franchise; 