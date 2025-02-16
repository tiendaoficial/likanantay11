import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description?: string;
    images?: string[];
  };
  onAddToCart: (size: string) => void;
}

const sizes = ['S', 'M', 'L', 'XL'];

export default function ProductModal({
  isOpen,
  onClose,
  product,
  onAddToCart,
}: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [currentImage, setCurrentImage] = useState(0);

  const productImages = product.images || [product.image];

  if (!isOpen) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla');
      return;
    }
    onAddToCart(selectedSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <button onClick={onClose} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="relative aspect-square mb-4">
                <img
                  src={productImages[currentImage]}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      currentImage === index
                        ? 'border-blue-500'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-2xl font-bold mb-4">
                S/.{product.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mb-6">
                {product.description ||
                  'Descripción del producto no disponible.'}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Talla</h3>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                        selectedSize === size
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-blue-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
