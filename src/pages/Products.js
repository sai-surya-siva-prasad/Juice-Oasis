import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Healthy Break Fast',
    image: 'https://source.unsplash.com/400x300/?breakfast',
    path: '/healthy-breakfast',
  },
  {
    name: 'Healthy Juices',
    image: 'https://source.unsplash.com/400x300/?juice',
    path: '/healthy-juices',
  },
  {
    name: 'Herbal Teas',
    image: 'https://source.unsplash.com/400x300/?herbal-tea',
    path: '/herbal-teas',
  },
  {
    name: 'Hot Beverages',
    image: 'https://source.unsplash.com/400x300/?coffee',
    path: '/hot-beverages',
  },
  {
    name: 'Ice Creams',
    image: 'https://source.unsplash.com/400x300/?ice-cream',
    path: '/ice-creams',
  },
  {
    name: 'Mocktails',
    image: 'https://source.unsplash.com/400x300/?mocktail',
    path: '/mocktails',
  },
  {
    name: 'Refreshing Drinks',
    image: 'https://source.unsplash.com/400x300/?cold-drink',
    path: '/refreshing-drinks',
  },
  {
    name: 'Shakes',
    image: 'https://source.unsplash.com/400x300/?milkshake',
    path: '/shakes',
  },
  {
    name: 'Snacks',
    image: 'https://source.unsplash.com/400x300/?healthy-snacks',
    path: '/snacks',
  },
];

function Products() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Products
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Discover our wide range of healthy and delicious products. From fresh juices to healthy snacks, we have something for everyone.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.name}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.2s ease-in-out',
                  },
                }}
                onClick={() => navigate(category.path)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {category.name}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => navigate(category.path)}
                  >
                    View Products
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products; 