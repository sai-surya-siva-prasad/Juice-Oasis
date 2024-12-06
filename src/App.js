import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Products from './pages/Products';
import Franchise from './pages/Franchise';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

// Product category pages
import HealthyBreakfast from './pages/categories/HealthyBreakfast';
import HealthyJuices from './pages/categories/HealthyJuices';
import HerbalTeas from './pages/categories/HerbalTeas';
import HotBeverages from './pages/categories/HotBeverages';
import IceCreams from './pages/categories/IceCreams';
import Mocktails from './pages/categories/Mocktails';
import RefreshingDrinks from './pages/categories/RefreshingDrinks';
import Shakes from './pages/categories/Shakes';
import Snacks from './pages/categories/Snacks';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    secondary: {
      main: '#FFA726',
      light: '#FFB74D',
      dark: '#F57C00',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box sx={{ display: 'flex', flex: 1, pt: '64px' }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/franchise" element={<Franchise />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                
                {/* Product Category Routes */}
                <Route path="/healthy-breakfast" element={<HealthyBreakfast />} />
                <Route path="/healthy-juices" element={<HealthyJuices />} />
                <Route path="/herbal-teas" element={<HerbalTeas />} />
                <Route path="/hot-beverages" element={<HotBeverages />} />
                <Route path="/ice-creams" element={<IceCreams />} />
                <Route path="/mocktails" element={<Mocktails />} />
                <Route path="/refreshing-drinks" element={<RefreshingDrinks />} />
                <Route path="/shakes" element={<Shakes />} />
                <Route path="/snacks" element={<Snacks />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 