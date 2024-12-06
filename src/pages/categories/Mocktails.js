import React from 'react';
import CategoryPage from '../../components/CategoryPage';

const products = [
  {
    id: 1,
    name: 'Virgin Mojito',
    description: 'Fresh mint, lime, and soda mocktail',
    price: '$6.99',
    image: 'https://source.unsplash.com/400x300/?mojito',
  },
  {
    id: 2,
    name: 'Tropical Punch',
    description: 'Mixed tropical fruits with coconut water',
    price: '$7.99',
    image: 'https://source.unsplash.com/400x300/?tropical-drink',
  },
  {
    id: 3,
    name: 'Blue Lagoon',
    description: 'Blue curacao syrup with lemonade',
    price: '$6.99',
    image: 'https://source.unsplash.com/400x300/?blue-drink',
  },
  {
    id: 4,
    name: 'Strawberry Daiquiri',
    description: 'Fresh strawberries with lime juice',
    price: '$7.99',
    image: 'https://source.unsplash.com/400x300/?strawberry-drink',
  },
];

function Mocktails() {
  return (
    <CategoryPage
      title="Mocktails"
      description="Enjoy our alcohol-free cocktails that are perfect for any occasion. Made with fresh fruits and premium ingredients for a delightful experience."
      products={products}
    />
  );
}

export default Mocktails; 