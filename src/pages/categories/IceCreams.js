import React from 'react';
import CategoryPage from '../../components/CategoryPage';

const products = [
  {
    id: 1,
    name: 'Fruit Paradise',
    description: 'Mixed fruit ice cream with real fruit pieces',
    price: '$5.99',
    image: 'https://source.unsplash.com/400x300/?fruit-ice-cream',
  },
//   {
//     id: 2,
//     name: 'Chocolate Delight',
//     description: 'Rich chocolate ice cream with chocolate chips',
//     price: '$5.99',
//     image: 'https://source.unsplash.com/400x300/?chocolate-ice-cream',
//   },
  {
    id: 3,
    name: 'Berry Blast',
    description: 'Mixed berry ice cream with fresh berries',
    price: '$6.99',
    image: 'https://source.unsplash.com/400x300/?berry-ice-cream',
  },
  {
    id: 4,
    name: 'Mango Tango',
    description: 'Fresh mango ice cream with mango pulp',
    price: '$6.99',
    image: 'https://source.unsplash.com/400x300/?mango-ice-cream',
  },
];

function IceCreams() {
  return (
    <CategoryPage
      title="Ice Creams"
      description="Cool down with our delicious ice cream selection. Made with fresh ingredients and natural flavors, our ice creams are the perfect treat for any time of day."
      products={products}
    />
  );
}

export default IceCreams; 