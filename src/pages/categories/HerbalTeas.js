import React from 'react';
import CategoryPage from '../../components/CategoryPage';

const products = [
  {
    id: 1,
    name: 'Chamomile Calm',
    description: 'Soothing chamomile tea with honey',
    price: '$4.99',
    image: 'https://source.unsplash.com/400x300/?chamomile-tea',
  },
  {
    id: 2,
    name: 'Mint Refresh',
    description: 'Fresh mint leaves with green tea',
    price: '$4.99',
    image: 'https://source.unsplash.com/400x300/?mint-tea',
  },
  {
    id: 3,
    name: 'Ginger Spice',
    description: 'Spicy ginger tea with lemon and honey',
    price: '$5.99',
    image: 'https://source.unsplash.com/400x300/?ginger-tea',
  },
  {
    id: 4,
    name: 'Tulsi Green',
    description: 'Holy basil with green tea blend',
    price: '$5.99',
    image: 'https://source.unsplash.com/400x300/?green-tea',
  },
];

function HerbalTeas() {
  return (
    <CategoryPage
      title="Herbal Teas"
      description="Experience the healing power of nature with our selection of herbal teas. Each blend is crafted to provide both wellness benefits and delightful flavors."
      products={products}
    />
  );
}

export default HerbalTeas; 