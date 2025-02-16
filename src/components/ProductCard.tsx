import React from 'react';
import { useCart } from '../context/CartContext';
import ProductModal from './ProductModal';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  images?: string[];
}

export default function ProductCard({ id, name, price, image, category, description, images }: ProductProps) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleAddToCart = (selectedSize: string) => {
    addToCart({ 
      id, 
      name, 
      price, 
      image, 
      category, 
      description,
      selectedSize 
    });
    showNotification('Producto agregado al carrito');
  };

  const showNotification = (message: string) => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">S/.{price.toFixed(2)}</p>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
            >
              Más detalles
            </button>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{ id, name, price, image, category, description, images }}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}