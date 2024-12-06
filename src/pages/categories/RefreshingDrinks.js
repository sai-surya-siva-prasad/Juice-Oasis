import React from 'react';
import CategoryPage from '../../components/CategoryPage';

const products = [
  {
    id: 1,
    name: 'Lemonade',
    description: 'Fresh squeezed lemons with mint',
    price: '$4.99',
    image: 'https://source.unsplash.com/400x300/?lemonade',
  },
  {
    id: 2,
    name: 'Iced Tea',
    description: 'Classic iced tea with lemon',
    price: '$4.99',
    image: 'https://source.unsplash.com/400x300/?iced-tea',
  },
  {
    id: 3,
    name: 'Coconut Water',
    description: 'Fresh coconut water with pulp',
    price: '$5.99',
    image: 'https://source.unsplash.com/400x300/?coconut-water',
  },
  {
    id: 4,
    name: 'Watermelon Cooler',
    description: 'Fresh watermelon juice with mint',
    price: '$5.99',
    image: 'https://source.unsplash.com/400x300/?watermelon-juice',
  },
];

function RefreshingDrinks() {
  return (
    <CategoryPage
      title="Refreshing Drinks"
      description="Beat the heat with our selection of refreshing beverages. Each drink is crafted to provide the perfect balance of flavor and refreshment."
      products={products}
    />
  );
}

export default RefreshingDrinks; 