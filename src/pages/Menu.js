import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from '@mui/material';

// Import your product images here
// import badamMilkImg from '../assets/images/badam-milk.png';
// ... import other images

const products = [
  {
    id: 1,
    name: 'Badam Milk',
    rating: 0,
    price: '₹50.00',
    image: 'path-to-badam-milk-image',
    reviews: 0,
  },
  {
    id: 2,
    name: 'Strawberry Milkshake',
    rating: 0,
    price: '₹99.00',
    image: 'path-to-strawberry-milkshake-image',
    reviews: 0,
  },
  {
    id: 3,
    name: 'Beetroot Juice',
    rating: 0,
    price: '₹50.00',
    image: 'path-to-beetroot-juice-image',
    reviews: 0,
  },
  {
    id: 4,
    name: 'American Dryfruit',
    rating: 0,
    price: '₹99.00',
    image: 'path-to-american-dryfruit-image',
    reviews: 0,
  },
  {
    id: 5,
    name: 'Strawberry Lassi',
    rating: 0,
    price: '₹70.00',
    image: 'path-to-strawberry-lassi-image',
    reviews: 0,
  },
  {
    id: 6,
    name: 'Banana Juice',
    rating: 0,
    price: '₹50.00',
    image: 'path-to-banana-juice-image',
    reviews: 0,
  },
];

function Menu() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h6" 
        component="h1" 
        sx={{ 
          color: '#4CAF50',
          textAlign: 'center',
          mb: 1 
        }}
      >
        Our Products
      </Typography>
      
      <Typography 
        variant="h3" 
        component="h2" 
        sx={{ 
          color: '#1B5E20',
          textAlign: 'center',
          fontWeight: 'bold',
          mb: 4
        }}
      >
        Best Seller
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 2,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ 
                  objectFit: 'contain',
                  mb: 2,
                  borderRadius: 1
                }}
              />
              <CardContent sx={{ p: 0, flexGrow: 1 }}>
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 1
                  }}
                >
                  {product.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating 
                    value={product.rating} 
                    readOnly 
                    size="small"
                  />
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    ({product.reviews})
                  </Typography>
                </Box>
                <Typography 
                  variant="h6" 
                  color="primary"
                  sx={{ 
                    fontWeight: 'bold',
                    color: '#4CAF50'
                  }}
                >
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Menu; 