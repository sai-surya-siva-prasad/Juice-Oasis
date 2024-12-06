import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  Paper,
  Rating,
  IconButton,
} from '@mui/material';
import { Search, LocalDining, LocationOn, LocalShipping, Facebook, Instagram } from '@mui/icons-material';
import immunityBoosterImg from '../assets/images/immunity-booster.png';
import greenDetoxImg from '../assets/images/green-detox.png';
import berryBlastImg from '../assets/images/berry-blast.png';
import juiceBottleImg from '../assets/images/juice-bottle.png';
import badamMilkImg from '../assets/images/badam-milk.png';
import strawberryMilkshakeImg from '../assets/images/strawberry-milkshake.png';
import beetrootJuiceImg from '../assets/images/beetroot-juice.png';
import americanDryfruitImg from '../assets/images/american-dryfruit.png';
import strawberryLassiImg from '../assets/images/strawberry-lassi.png';
import bananaJuiceImg from '../assets/images/banana-juice.png';
import Footer from '../components/Footer';

const categories = [
  'All Categories',
  'Healthy Break Fast',
  'Healthy Juices',
  'Herbal Teas',
  'Hot Beverages',
];

const featuredJuices = [
  {
    id: 1,
    name: 'Immunity Booster',
    description: 'Orange, Carrot, and Ginger blend',
    image: immunityBoosterImg,
    price: '$5.99',
  },
  {
    id: 2,
    name: 'Green Detox',
    description: 'Spinach, Apple, and Mint refresher',
    image: greenDetoxImg,
    price: '$6.99',
  },
  {
    id: 3,
    name: 'Berry Blast',
    description: 'Mixed berries with pomegranate',
    image: berryBlastImg,
    price: '$7.99',
  },
];

const bestSellerProducts = [
  {
    id: 1,
    name: 'Badam Milk',
    rating: 0,
    price: '₹50.00',
    image: badamMilkImg,
    reviews: 0,
  },
  {
    id: 2,
    name: 'Strawberry Milkshake',
    rating: 0,
    price: '₹99.00',
    image: strawberryMilkshakeImg,
    reviews: 0,
  },
  {
    id: 3,
    name: 'Beetroot Juice',
    rating: 0,
    price: '₹50.00',
    image: beetrootJuiceImg,
    reviews: 0,
  },
  {
    id: 4,
    name: 'American Dryfruit',
    rating: 0,
    price: '₹99.00',
    image: americanDryfruitImg,
    reviews: 0,
  },
  {
    id: 5,
    name: 'Strawberry Lassi',
    rating: 0,
    price: '₹70.00',
    image: strawberryLassiImg,
    reviews: 0,
  },
  {
    id: 6,
    name: 'Banana Juice',
    rating: 0,
    price: '₹50.00',
    image: bananaJuiceImg,
    reviews: 0,
  },
];

function Home() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/menu?category=${encodeURIComponent(category)}&search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <Box>
      {/* Hero Section with Search */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 4, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
              fontWeight: 'bold'
            }}
          >
            Rushi Juice Oasis
          </Typography>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem' }
            }}
          >
            Discover the taste of real fruits
          </Typography>
          
          {/* Search Bar */}
          <Paper
            component="form"
            onSubmit={handleSearch}
            sx={{
              p: { xs: 1, sm: 2 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              maxWidth: 800,
              margin: '2rem auto',
              gap: { xs: 1, sm: 2 }
            }}
            elevation={3}
          >
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{ 
                minWidth: { xs: '100%', sm: 200 },
                bgcolor: 'white',
                '& .MuiSelect-select': {
                  py: 1,
                }
              }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
            
            <TextField
              fullWidth
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ 
                bgcolor: 'white', 
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  height: { xs: '40px', sm: 'auto' }
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ 
                width: { xs: '100%', sm: 'auto' },
                px: { xs: 2, sm: 4 },
                py: 1,
                borderRadius: 2,
              }}
            >
              Search
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Featured Juices */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          textAlign="center"
          sx={{
            fontSize: { xs: '1.75rem', sm: '2.125rem' }
          }}
        >
          Featured Juices
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mt: { xs: 1, md: 2 } }}>
          {featuredJuices.map((juice) => (
            <Grid item xs={12} sm={6} md={4} key={juice.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height={{ xs: 160, sm: 200 }}
                  image={juice.image}
                  alt={juice.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2 } }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {juice.name}
                  </Typography>
                  <Typography>{juice.description}</Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                    {juice.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: { xs: 1.5, sm: 2 } }}>
                  <Button 
                    size="small" 
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Best Seller Section */}
      <Box 
        sx={{ 
          backgroundColor: '#FDB340',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, #FDB347 0%, #FFB851 50%, #FDB347 100%)',
            opacity: 0.3,
          },
          py: { xs: 3, md: 4 }
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h6" 
            component="h2" 
            sx={{ 
              color: '#2E7D32',
              textAlign: 'center',
              mb: 1,
              fontWeight: 500,
              fontSize: { xs: '1rem', sm: '1.25rem' }
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
              mb: { xs: 2, md: 4 },
              fontSize: { xs: '2rem', sm: '3rem' },
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Best Seller
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
            {/* Left side - Image */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: { xs: '200px', sm: '300px' },
                  margin: '0 auto',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={juiceBottleImg}
                  alt="Juice Bottle"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                />
              </Box>
            </Grid>

            {/* Right side - Products */}
            <Grid item xs={12} md={7}>
              <Grid container spacing={{ xs: 1, sm: 2 }}>
                {bestSellerProducts.map((product) => (
                  <Grid item xs={12} sm={6} key={product.id}>
                    <Card 
                      sx={{ 
                        display: 'flex',
                        p: { xs: 1, sm: 2 },
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        '&:hover': {
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                          backgroundColor: 'rgba(255, 255, 255, 1)',
                        },
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center'
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ 
                          width: { xs: '100%', sm: 100 },
                          height: { xs: 120, sm: 100 },
                          objectFit: 'contain',
                          borderRadius: 1
                        }}
                        image={product.image}
                        alt={product.name}
                      />
                      <CardContent 
                        sx={{ 
                          p: { xs: 1, sm: 2 }, 
                          '&:last-child': { pb: 1 },
                          width: '100%',
                          textAlign: { xs: 'center', sm: 'left' }
                        }}
                      >
                        <Typography 
                          variant="subtitle1"
                          component="h3"
                          sx={{ 
                            fontWeight: 'bold',
                            mb: 0.5,
                            fontSize: { xs: '0.9rem', sm: '1rem' }
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            mb: 0.5,
                            justifyContent: { xs: 'center', sm: 'flex-start' }
                          }}
                        >
                          <Rating 
                            value={product.rating} 
                            readOnly 
                            size="small"
                          />
                          <Typography 
                            variant="caption"
                            color="text.secondary"
                            sx={{ ml: 1 }}
                          >
                            ({product.reviews})
                          </Typography>
                        </Box>
                        <Typography 
                          variant="subtitle1"
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
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Order Process Section */}
      <Box sx={{ bgcolor: '#E0F7FA', py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
            {[
              {
                icon: <LocalDining />,
                title: "Choose Your Favorite",
                description: "Pick Your Favorite Beverage Select your favorite beverage and enjoy the most authentic taste full of aroma."
              },
              {
                icon: <LocationOn />,
                title: "Place Your Address",
                description: "Make your purchase, Place a Order, Order Now Order the top quality products and get the richness of real ingredients."
              },
              {
                icon: <LocalShipping />,
                title: "Payment & Delivery",
                description: "Your products will be delivered without any delay. Pay the amount at the doorstep after the product reaches you."
              }
            ].map((step) => (
              <Grid item xs={12} sm={6} md={4} key={step.title}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: { xs: 2, sm: 3 },
                    textAlign: 'center',
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 60, sm: 80 },
                      height: { xs: 60, sm: 80 },
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(76, 175, 80, 0.1)',
                      color: 'primary.main'
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    color="primary.dark"
                    gutterBottom
                    sx={{ 
                      fontWeight: 'bold',
                      fontSize: { xs: '1.1rem', sm: '1.25rem' }
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography 
                    color="text.secondary"
                    sx={{
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    {step.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home; 