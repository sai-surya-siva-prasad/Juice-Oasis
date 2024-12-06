import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
} from '@mui/icons-material';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Phone color="primary" />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
    },
    {
      icon: <Email color="primary" />,
      title: 'Email',
      details: ['info@juiceshop.com', 'support@juiceshop.com'],
    },
    {
      icon: <LocationOn color="primary" />,
      title: 'Location',
      details: ['123 Juice Street', 'Healthy City, HC 12345'],
    },
    {
      icon: <AccessTime color="primary" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 8:00 PM', 'Weekend: 9:00 AM - 6:00 PM'],
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              {contactInfo.map((info) => (
                <Paper key={info.title} sx={{ p: 2 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    {info.icon}
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {info.title}
                      </Typography>
                      {info.details.map((detail, index) => (
                        <Typography key={index} variant="body2" color="text.secondary">
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Paper sx={{ mt: 4, p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Our Location
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: '300px',
              bgcolor: 'grey.200',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography color="text.secondary">
              Map will be integrated here
            </Typography>
          </Box>
        </Paper>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Thank you for your message! We'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Contact; 