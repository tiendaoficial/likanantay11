import React from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, removeFromCart, sendToWhatsApp } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Tu Carrito</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
              <X className="w-6 h-6" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold mb-2">Tu carrito está vacío</h3>
              <p className="text-gray-600">¡Agrega algunos productos para comenzar!</p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">Talla: {item.selectedSize}</p>
                        <p className="text-blue-600">S/.{item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold">S/.{total.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => {
                    sendToWhatsApp();
                    onClose();
                  }}
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Comprar por WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}