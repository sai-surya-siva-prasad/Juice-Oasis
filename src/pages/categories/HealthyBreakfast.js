import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  Breadcrumbs,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Oatmeal Power Bowl',
    description: 'Healthy oatmeal with fresh fruits and honey',
    price: '$8.99',
    image: 'https://source.unsplash.com/400x300/?oatmeal',
  },
  {
    id: 2,
    name: 'Avocado Toast',
    description: 'Multigrain toast with fresh avocado and seeds',
    price: '$10.99',
    image: 'https://source.unsplash.com/400x300/?avocado-toast',
  },
  {
    id: 3,
    name: 'Fruit & Yogurt Parfait',
    description: 'Greek yogurt with granola and fresh berries',
    price: '$7.99',
    image: 'https://source.unsplash.com/400x300/?parfait',
  },
  {
    id: 4,
    name: 'Protein Pancakes',
    description: 'High-protein pancakes with maple syrup',
    price: '$11.99',
    image: 'https://source.unsplash.com/400x300/?pancakes',
  },
];

function HealthyBreakfast() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Breadcrumb Navigation */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link component={RouterLink} to="/" color="inherit">
          Home
        </Link>
        <Typography color="text.primary">Healthy Break Fast</Typography>
      </Breadcrumbs>

      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Healthy Break Fast
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Start your day with our nutritious and delicious breakfast options. All items are prepared fresh with high-quality ingredients.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary" fullWidth>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HealthyBreakfast; 