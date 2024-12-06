import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  ListItemIcon,
} from '@mui/material';
import {
  Menu as MenuIcon,
  FreeBreakfast,
  LocalDrink,
  EmojiFoodBeverage,
  Coffee,
  Icecream,
  LocalBar,
  LocalCafe,
  Blender,
  Restaurant,
  Home,
} from '@mui/icons-material';

const categories = [
  {
    name: 'Home',
    path: '/',
    icon: <Home />,
  },
  {
    name: 'Breakfast',
    path: '/healthy-breakfast',
    icon: <FreeBreakfast />,
  },
  {
    name: 'Juices',
    path: '/healthy-juices',
    icon: <LocalDrink />,
  },
  {
    name: 'Herbal Teas',
    path: '/herbal-teas',
    icon: <EmojiFoodBeverage />,
  },
  {
    name: 'Hot Drinks',
    path: '/hot-beverages',
    icon: <Coffee />,
  },
  {
    name: 'Ice Cream',
    path: '/ice-creams',
    icon: <Icecream />,
  },
  {
    name: 'Mocktails',
    path: '/mocktails',
    icon: <LocalBar />,
  },
  {
    name: 'Cold Drinks',
    path: '/refreshing-drinks',
    icon: <LocalCafe />,
  },
  {
    name: 'Shakes',
    path: '/shakes',
    icon: <Blender />,
  },
  {
    name: 'Snacks',
    path: '/snacks',
    icon: <Restaurant />,
  },
];

const drawerWidth = 200;

function Sidebar() {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ mt: 8 }}>
      <List sx={{ px: 1 }}>
        {categories.map((category) => {
          const isActive = location.pathname === category.path;
          return (
            <ListItem
              key={category.path}
              component={RouterLink}
              to={category.path}
              sx={{
                borderRadius: '8px',
                mb: 0.5,
                color: isActive ? 'primary.main' : 'text.primary',
                bgcolor: isActive ? 'primary.light' : 'transparent',
                '&:hover': {
                  bgcolor: isActive ? 'primary.light' : 'action.hover',
                  '& .MuiListItemIcon-root': {
                    color: isActive ? 'primary.main' : 'inherit',
                  },
                },
                textDecoration: 'none',
                py: 1,
              }}
            >
              <ListItemIcon 
                sx={{ 
                  minWidth: 40,
                  color: isActive ? 'primary.main' : 'inherit',
                }}
              >
                {category.icon}
              </ListItemIcon>
              <ListItemText 
                primary={category.name}
                primaryTypographyProps={{
                  variant: 'body2',
                  sx: { 
                    fontWeight: isActive ? 600 : 400,
                    fontSize: '0.875rem',
                  }
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Box
        component="nav"
        sx={{ 
          width: { sm: drawerWidth }, 
          flexShrink: { sm: 0 },
          '& .MuiDrawer-paper': {
            backgroundColor: 'background.default',
          }
        }}
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                borderRight: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </>
  );
}

export default Sidebar; 