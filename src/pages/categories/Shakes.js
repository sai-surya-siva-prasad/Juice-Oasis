import React from 'react';
import CategoryPage from '../../components/CategoryPage';

const products = [
  {
    id: 1,
    name: 'Chocolate Shake',
    description: 'Rich chocolate shake with whipped cream',
    price: '$6.99',
    image: 'https://source.unsplash.com/400x300/?chocolate-shake',
  },
  {
    id: 2,
    name: 'Strawberry Shake',
    description: 'Fresh strawberry shake with vanilla ice cream',
    price: '$6.99',
    image: 'https://source.unsplash.com/400x300/?strawberry-shake',
  },
  {
    id: 3,
    name: 'Oreo Shake',
    description: 'Creamy shake with crushed Oreo cookies',
    price: '$7.99',
    image: 'https://source.unsplash.com/400x300/?oreo-shake',
  },
  {
    id: 4,
    name: 'Protein Shake',
    description: 'Healthy shake with whey protein and fruits',
    price: '$8.99',
    image: 'https://source.unsplash.com/400x300/?protein-shake',
  },
];

function Shakes() {
  return (
    <CategoryPage
      title="Shakes"
      description="Indulge in our creamy and delicious shakes. Made with premium ice cream and fresh ingredients for the ultimate treat."
      products={products}
    />
  );
}

export default Shakes; 