import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{ 
        bgcolor: '#004D40', 
        color: 'white', 
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3 }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {/* About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                borderBottom: '2px solid #4CAF50',
                pb: 1,
                mb: 2,
                display: 'inline-block'
              }}
            >
              About Us
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 2,
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              T VANAMM is a registered company with a trademark and product.
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                mb: 2,
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: { xs: 1, sm: 0 }
              }}
            >
              <HeadsetMicIcon 
                sx={{ 
                  width: 24, 
                  height: 24, 
                  mr: { xs: 0, sm: 1 }, 
                  color: '#4CAF50' 
                }} 
              />
              <Box>
                <Typography 
                  variant="subtitle2"
                  sx={{
                    fontSize: { xs: '0.8rem', sm: '0.875rem' }
                  }}
                >
                  CALL US 24/7
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#4CAF50',
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  +91 93906 58544
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Store Location */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                borderBottom: '2px solid #4CAF50',
                pb: 1,
                mb: 2,
                display: 'inline-block'
              }}
            >
              Store Location
            </Typography>
            <Stack spacing={1}>
              <Typography 
                variant="body2" 
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              >
                <strong>Office:</strong> Rama Rao Nagar Kukatpally – Jagathgiri Gutta Rd, Paparayadu Nagar, Kukatpally, Hyderabad, Telangana 500072
              </Typography>
              <Typography 
                variant="body2"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              >
                <strong>Mail:</strong> tvanamm@gmail.com
              </Typography>
              <Typography 
                variant="body2"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              >
                <strong>Monday – Sunday:</strong> 6am – 11pm
              </Typography>
            </Stack>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                borderBottom: '2px solid #4CAF50',
                pb: 1,
                mb: 2,
                display: 'inline-block'
              }}
            >
              Useful Links
            </Typography>
            <Stack 
              spacing={{ xs: 1.5, sm: 1 }}
              direction={{ xs: 'row', sm: 'column' }}
              flexWrap="wrap"
              sx={{
                '& > *': {
                  width: { xs: '50%', sm: 'auto' }
                }
              }}
            >
              {['Home', 'About', 'Products', 'Franchise', 'Blogs', 'Contact'].map((link) => (
                <Typography
                  key={link}
                  variant="body2"
                  sx={{
                    cursor: 'pointer',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    '&:hover': { color: '#4CAF50' },
                    transition: 'color 0.3s'
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                borderBottom: '2px solid #4CAF50',
                pb: 1,
                mb: 2,
                display: 'inline-block'
              }}
            >
              Social links
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 2,
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}
            >
              <IconButton
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': { 
                    color: '#4CAF50',
                    transform: 'translateY(-3px)'
                  },
                  border: '2px solid white',
                  borderRadius: '50%',
                  p: { xs: 1.5, sm: 1 },
                  transition: 'all 0.3s ease'
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': { 
                    color: '#4CAF50',
                    transform: 'translateY(-3px)'
                  },
                  border: '2px solid white',
                  borderRadius: '50%',
                  p: { xs: 1.5, sm: 1 },
                  transition: 'all 0.3s ease'
                }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            mt: { xs: 4, md: 6 },
            pt: 2,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            fontSize: { xs: '0.75rem', sm: '0.875rem' }
          }}
        >
          © {new Date().getFullYear()} T VANAMM. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 