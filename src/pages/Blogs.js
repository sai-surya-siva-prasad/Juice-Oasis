import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { AccessTime, ArrowForward } from '@mui/icons-material';

const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Fresh Juice in Your Daily Diet',
    excerpt: 'Discover how incorporating fresh juices into your daily routine can boost your health and energy levels.',
    image: 'https://source.unsplash.com/400x250/?juice',
    date: 'March 15, 2024',
    category: 'Health & Wellness',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Top 10 Immunity Boosting Juices',
    excerpt: 'Learn about the best juice combinations that can help strengthen your immune system naturally.',
    image: 'https://source.unsplash.com/400x250/?fruits',
    date: 'March 12, 2024',
    category: 'Recipes',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'The Art of Making Perfect Smoothies',
    excerpt: 'Tips and tricks for creating delicious and nutritious smoothies at home.',
    image: 'https://source.unsplash.com/400x250/?smoothie',
    date: 'March 10, 2024',
    category: 'Tips & Tricks',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Seasonal Fruits and Their Benefits',
    excerpt: 'A guide to choosing the best seasonal fruits for your juices and their health benefits.',
    image: 'https://source.unsplash.com/400x250/?seasonal-fruits',
    date: 'March 8, 2024',
    category: 'Nutrition',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'Detox Juices for Better Health',
    excerpt: 'Explore various detox juice recipes that can help cleanse your body naturally.',
    image: 'https://source.unsplash.com/400x250/?detox',
    date: 'March 5, 2024',
    category: 'Health & Wellness',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Kid-Friendly Healthy Drinks',
    excerpt: 'Delicious and healthy drink recipes that your kids will love.',
    image: 'https://source.unsplash.com/400x250/?kids-drinks',
    date: 'March 3, 2024',
    category: 'Family',
    readTime: '4 min read',
  },
];

function Blogs() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Blog
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Stay updated with the latest news, recipes, and health tips from our juice experts.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} key={post.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.2s ease-in-out',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip 
                      label={post.category}
                      color="primary"
                      size="small"
                    />
                    <Stack 
                      direction="row" 
                      spacing={0.5} 
                      alignItems="center"
                      color="text.secondary"
                    >
                      <AccessTime fontSize="small" />
                      <Typography variant="body2">
                        {post.readTime}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                    {post.date}
                  </Typography>
                  <Button
                    endIcon={<ArrowForward />}
                    color="primary"
                  >
                    Read More
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

export default Blogs; 