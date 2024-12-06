import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
} from '@mui/material';

function CategoryPage({ title, description, products }) {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        {title}
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none',
                border: '1px solid #eee',
                borderRadius: 2,
                '&:hover': {
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {product.description}
                </Typography>
                <Typography 
                  variant="h6" 
                  color="primary"
                  sx={{ 
                    mt: 2,
                    color: '#4CAF50',
                    fontWeight: 600,
                  }}
                >
                  {product.price}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#4CAF50',
                      color: 'white',
                      '&:hover': {
                        bgcolor: '#45a049',
                      },
                    }}
                  >
                    ADD TO CART
                  </Button>
                  <Button
                    variant="text"
                    sx={{
                      color: '#4CAF50',
                    }}
                  >
                    LEARN MORE
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CategoryPage; 