import React, { createContext, useContext, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  selectedSize?: string;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  sendToWhatsApp: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const sendToWhatsApp = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const message = `¡Hola! Me gustaría comprar los siguientes productos:\n\n${cartItems
      .map(
        (item) =>
          `*${item.name}*\n` +
          `- Precio: S/.${item.price.toFixed(2)}\n` +
          `- Talla: ${item.selectedSize}\n` +
          `- Categoría: ${item.category}\n` +
          `\n`
      )
      .join('')}\n*Total: S/.${total.toFixed(
      2
    )}*\n\nPor favor, quisiera más información sobre estos productos.`;

    window.open(
      `https://wa.me/51960478978?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        sendToWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
