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
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Rushi Juice Oasis
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Discover the taste of real fruits
          </Typography>
          
          {/* Search Bar */}
          <Paper
            component="form"
            onSubmit={handleSearch}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              maxWidth: 800,
              margin: '2rem auto',
              gap: 2,
            }}
            elevation={3}
          >
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{ 
                minWidth: 200,
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
              sx={{ bgcolor: 'white', borderRadius: 1 }}
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
                px: 4,
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
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Featured Juices
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {featuredJuices.map((juice) => (
            <Grid item xs={12} sm={6} md={4} key={juice.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={juice.image}
                  alt={juice.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {juice.name}
                  </Typography>
                  <Typography>{juice.description}</Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                    {juice.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
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
          backgroundColor: '#FDB340',  // Solid orange color matching the image
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
          py: 4  // Reduced padding
        }}
      >
        <Container 
          sx={{ 
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography 
            variant="h6" 
            component="h2" 
            sx={{ 
              color: '#2E7D32',  // Darker green for better contrast
              textAlign: 'center',
              mb: 1,
              fontWeight: 500
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
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)'  // Subtle text shadow
            }}
          >
            Best Seller
          </Typography>

          <Grid container spacing={3} alignItems="center">
            {/* Left side - Image */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  width: '300px',
                  margin: '0 auto',
                  overflow: 'hidden',  // Contains the zoomed image
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
                      transform: 'scale(1.1)',  // 10% zoom on hover
                    }
                  }}
                />
              </Box>
            </Grid>

            {/* Right side - Products */}
            <Grid item xs={12} md={7}>
              <Grid container spacing={1}>
                {bestSellerProducts.map((product) => (
                  <Grid item xs={12} sm={6} key={product.id}>
                    <Card 
                      sx={{ 
                        display: 'flex',
                        p: 1,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',  // Slightly transparent white
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        '&:hover': {
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                          backgroundColor: 'rgba(255, 255, 255, 1)',  // Full white on hover
                        }
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ 
                          width: 100,
                          height: 100,
                          objectFit: 'contain',
                          borderRadius: 1
                        }}
                        image={product.image}
                        alt={product.name}
                      />
                      <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                        <Typography 
                          variant="subtitle1"
                          component="h3"
                          sx={{ 
                            fontWeight: 'bold',
                            mb: 0.5
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
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
      <Box sx={{ bgcolor: '#E0F7FA', py: 8 }}>  {/* Light cyan background */}
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  textAlign: 'center',
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                <LocalDining 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    mb: 2,
                    color: 'primary.main',
                    p: 2,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)'
                  }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  color="primary.dark"
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  Choose Your Favorite
                </Typography>
                <Typography color="text.secondary">
                  Pick Your Favorite Beverage Select your favorite beverage and enjoy the most authentic taste full of aroma.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  textAlign: 'center',
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                <LocationOn 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    mb: 2,
                    color: 'primary.main',
                    p: 2,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)'
                  }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  color="primary.dark"
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  Place Your Address
                </Typography>
                <Typography color="text.secondary">
                  Make your purchase, Place a Order, Order Now Order the top quality products and get the richness of real ingredients.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  textAlign: 'center',
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                <LocalShipping 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    mb: 2,
                    color: 'primary.main',
                    p: 2,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)'
                  }}
                />
                <Typography
                  variant="h6"
                  component="h3"
                  color="primary.dark"
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  Payment & Delivery
                </Typography>
                <Typography color="text.secondary">
                  Your products will be delivered without any delay. Pay the amount at the doorstep after the product reaches you.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Add the Footer component */}
      <Footer />
    </Box>
  );
}

export default Home; 