import React from 'react';
import CategoryPage from '../../components/CategoryPage';
import immunityBooster from '../../assets/images/immunity-booster.png';
import greenDetox from '../../assets/images/green-detox.png';
import berryBlast from '../../assets/images/berry-blast.png';

const products = [
  {
    id: 1,
    name: 'Immunity Booster',
    description: 'Orange, Carrot, and Ginger blend',
    price: '$5.99',
    image: immunityBooster,
  },
  {
    id: 2,
    name: 'Green Detox',
    description: 'Spinach, Apple, and Mint refresher',
    price: '$6.99',
    image: greenDetox,
  },
  {
    id: 3,
    name: 'Berry Blast',
    description: 'Mixed berries with pomegranate',
    price: '$7.99',
    image: berryBlast,
  },
];

function HealthyJuices() {
  return (
    <CategoryPage
      title="Featured Juices"
      description="Discover our range of freshly pressed juices made from organic fruits and vegetables."
      products={products}
    />
  );
}

export default HealthyJuices; 