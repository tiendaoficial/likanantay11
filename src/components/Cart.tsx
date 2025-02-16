import React from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

export default function Cart() {
  const { cartItems, removeFromCart, sendToWhatsApp } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-4">¡Agrega algunos productos para comenzar!</p>
            <a href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Volver a la tienda
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Tu Carrito</h2>
          
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

            <div className="flex gap-4">
              <a
                href="/"
                className="flex-1 px-6 py-3 text-center bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Seguir comprando
              </a>
              <button
                onClick={sendToWhatsApp}
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Comprar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}