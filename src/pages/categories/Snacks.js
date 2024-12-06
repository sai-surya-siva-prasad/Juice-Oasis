import React from 'react';
import CategoryPage from '../../components/CategoryPage';

const products = [
  {
    id: 1,
    name: 'Fruit Salad',
    description: 'Fresh mixed fruits with honey',
    price: '$5.99',
    image: 'https://source.unsplash.com/400x300/?fruit-salad',
  },
  {
    id: 2,
    name: 'Granola Bowl',
    description: 'Crunchy granola with yogurt and fruits',
    price: '$6.99',
    image: 'https://source.unsplash.com/400x300/?granola-bowl',
  },
  {
    id: 3,
    name: 'Veggie Sandwich',
    description: 'Fresh vegetables with whole grain bread',
    price: '$7.99',
    image: 'https://source.unsplash.com/400x300/?veggie-sandwich',
  },
  {
    id: 4,
    name: 'Nuts Mix',
    description: 'Assorted nuts and dried fruits',
    price: '$4.99',
    image: 'https://source.unsplash.com/400x300/?mixed-nuts',
  },
];

function Snacks() {
  return (
    <CategoryPage
      title="Snacks"
      description="Complement your drinks with our healthy and delicious snacks. Perfect for a quick bite or to share with friends."
      products={products}
    />
  );
}

export default Snacks; 