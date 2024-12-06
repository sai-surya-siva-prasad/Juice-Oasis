import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

// Mock cart data - in a real app, this would come from a state management system
const cartItems = [
  {
    id: 1,
    name: 'Immunity Booster',
    price: 5.99,
    quantity: 2,
    image: 'https://source.unsplash.com/100x100/?orange-juice',
  },
  {
    id: 2,
    name: 'Green Detox',
    price: 6.99,
    quantity: 1,
    image: 'https://source.unsplash.com/100x100/?green-juice',
  },
];

function Cart() {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6">Your cart is empty</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/menu')}
            sx={{ mt: 2 }}
          >
            Browse Menu
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <Paper key={item.id} sx={{ p: 2, mb: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', borderRadius: '4px' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography color="text.secondary">
                      ${item.price.toFixed(2)} each
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton size="small">
                        <Remove />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                      <IconButton size="small">
                        <Add />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h6" align="right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Box sx={{ my: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography>Subtotal</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">${subtotal.toFixed(2)}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Tax (10%)</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="right">${tax.toFixed(2)}</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Divider />
              <Box sx={{ my: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="h6">Total</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" align="right">
                      ${total.toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default Cart; 