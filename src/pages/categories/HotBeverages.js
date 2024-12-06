import React from 'react';
import CategoryPage from '../../components/CategoryPage';

const products = [
  {
    id: 1,
    name: 'Classic Coffee',
    description: 'Premium arabica coffee blend',
    price: '$3.99',
    image: 'https://source.unsplash.com/400x300/?coffee',
  },
  {
    id: 2,
    name: 'Hot Chocolate',
    description: 'Rich chocolate with whipped cream',
    price: '$4.99',
    image: 'https://source.unsplash.com/400x300/?hot-chocolate',
  },
  {
    id: 3,
    name: 'Masala Chai',
    description: 'Indian spiced tea with milk',
    price: '$4.99',
    image: 'https://source.unsplash.com/400x300/?masala-chai',
  },
  {
    id: 4,
    name: 'Turmeric Latte',
    description: 'Golden milk with honey and spices',
    price: '$5.99',
    image: 'https://source.unsplash.com/400x300/?turmeric-latte',
  },
];

function HotBeverages() {
  return (
    <CategoryPage
      title="Hot Beverages"
      description="Warm your soul with our selection of hot beverages. From classic coffee to traditional chai, we have something for every taste."
      products={products}
    />
  );
}

export default HotBeverages; 