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
    title: 'Nueva Colección Verano'
  },
  {
    url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600',
    title: 'Moda Masculina'
  },
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600',
    title: 'Tendencias Damas'
  },
  {
    url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1600',
    title: 'Ropa Deportiva'
  },
  {
    url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1600',
    title: 'Moda Infantil'
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
                <span className="text-gray-600">nooo</span>
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