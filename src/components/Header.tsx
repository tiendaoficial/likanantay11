import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Carousel from './carousel';

interface HeaderProps {
  onCartClick: () => void;
}

const carouselImages = [
  {
    url: 'https://i.ibb.co/0yScHxqx/1-4.jpg',
    title: 'Colección Verano'
  },
  {
    url: 'https://i.ibb.co/rGKS73TS/POLO-PARTE-DEL.jpg',
    title: 'Polos deportivos "personalizables a tu gusto"'
  },
  {
    url: 'https://i.ibb.co/Rkvfc2HG/30.jpg',
    title: 'Tendencias Damas'
  },
  {
    url: 'https://i.ibb.co/r22984V7/23.jpg',
    title: 'Tendencias Damas'
  }
];

export default function Header({ onCartClick }: HeaderProps) {
  const { cartItems } = useCart();
  
  return (
    <header className="relative z-50">
  <div className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="w-40">
          <div className="h-16 bg-gray-200 rounded flex items-center justify-center">
            <img
              src="https://i.ibb.co/Q3774k1k/LOGOOO.png"
              alt="Logo"
              className="h-18"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative" onClick={onCartClick}>
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  </div>
  <Carousel images={carouselImages} />
</header>
  );
}