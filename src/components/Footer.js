import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';  // For the headphone icon

function Footer() {
  return (
    <Box sx={{ bgcolor: '#004D40', color: 'white', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {/* About Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              T VANAMM is a registered company with a trademark and product.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <HeadsetMicIcon sx={{ width: 24, height: 24, mr: 1, color: '#4CAF50' }} />
              <Box>
                <Typography variant="subtitle2">CALL US 24/7</Typography>
                <Typography variant="h6" sx={{ color: '#4CAF50' }}>
                  +91 93906 58544
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Store Location */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Store Location
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Office:</strong> Rama Rao Nagar Kukatpally – Jagathgiri Gutta Rd, Paparayadu Nagar, Kukatpally, Hyderabad, Telangana 500072
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Mail:</strong> tvanamm@gmail.com
            </Typography>
            <Typography variant="body2">
              <strong>Monday – Sunday:</strong> 6am – 11pm
            </Typography>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'About', 'Products', 'Franchise', 'Blogs', 'Contact'].map((link) => (
                <Typography
                  key={link}
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { color: '#4CAF50' },
                    transition: 'color 0.3s'
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Social links
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#4CAF50' },
                  border: '2px solid white',
                  borderRadius: '50%',
                  p: 1
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': { color: '#4CAF50' },
                  border: '2px solid white',
                  borderRadius: '50%',
                  p: 1
                }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer; 