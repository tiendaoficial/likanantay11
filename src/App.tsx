import React, { useState } from 'react';
import { MessageCircle, Camera, ShoppingBag, Share2 } from 'lucide-react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { CartProvider } from './context/CartContext';

const categories = ['Todos','Damas','Deportivos','Servicios'];

const products = [
  {
    id: '1',
    name: 'Bikini Tropical',
    price: 39.90,
    category: 'Damas',
    image: 'https://i.ibb.co/rGtnnrKh/1-1.jpg',
    description: 'Luce radiante en la playa o la piscina con nuestro bikini, un conjunto de tres piezas que combina estilo y comodidad. Disponible en una variedad de colores vibrantes, este set incluye un top tipo triángulo ajustable que brinda un ajuste perfecto y una parte inferior de tiro medio que realza tu figura con un diseño favorecedor. Para completar el look, el conjunto incluye un pareo con estampado tropical, ideal para darle un toque elegante y sofisticado a tu outfit playero.',
    images: [
      'https://i.ibb.co/rGtnnrKh/1-1.jpg',
      'https://i.ibb.co/Y71pmjgw/1-5.jpg',
      'https://i.ibb.co/0yScHxqx/1-4.jpg',
      'https://i.ibb.co/0pJ1FjqQ/1-3.jpg',
      'https://i.ibb.co/4ZVkwFNc/1-2.jpg'
    ]
  },
  {
    id: '2',
    name: 'Polos Deportivos Personalizables',
    price: 0,
    category: 'Deportivos',
    image: 'https://i.ibb.co/rGKS73TS/POLO-PARTE-DEL.jpg',
    description: '¿Buscas comodidad, estilo y un toque personal en tu indumentaria deportiva? Nuestros polos deportivos personalizables son la elección perfecta para ti, tu equipo o tu marca. usted elige el diseño, la tela nosotros lo hacemos.',
    images: [
      'https://i.ibb.co/rGKS73TS/POLO-PARTE-DEL.jpg',
      'https://i.ibb.co/TDXybjmV/POLO-PARTE-ATRAS.jpg'
    ]
  },
  {
    id: '3',
    name: 'Colección "Dreamy Nights"',
    price: 19.99,
    category: 'Damas',
    image: 'https://i.ibb.co/5WHWFNhN/1.jpg',
    description: 'Disfruta de noches llenas de comodidad y estilo con nuestra colección, Con diseños únicos, estampados románticos y una tela suave, son perfectos para sentirte hermosa y relajada.✨ Variedad de colores y estampados,✨ Tela fresca y ligera,✨ Ajuste cómodo y favorecedor.',
    images: [
      'https://i.ibb.co/5WHWFNhN/1.jpg',
      'https://i.ibb.co/b5t10TcX/7.jpg',
      'https://i.ibb.co/Lz5C9G8r/10.jpg',
      'https://i.ibb.co/60RF4vY2/13.jpg',
      'https://i.ibb.co/GQx4SDGs/14.jpg'
    ]
  },
  {
    id: '4',
    name: 'Nuestros servicios',
    price: 0,
    category: 'Servicios',
    image: 'https://i.ibb.co/NdXB5TXk/computadora.jpg',
    description: '🎨 Servicios de Diseño, Impresión y Planchado de Calandra 👕✨✔ Diseño personalizado para prendas únicas.✔ Impresión de alta calidad con colores vibrantes y duraderos.✔ Planchado con calandra para un acabado profesional y resistente.📩 ¡Lleva tus ideas a la realidad con nosotros! 🔥',
    images: [
      'https://i.ibb.co/NdXB5TXk/computadora.jpg'
    ] 
  },
  {
    id: '5',
    name: 'Colección "Dream & Fun"',
    price: 19.99,
    category: 'Damas',
    image: 'https://i.ibb.co/Q3G4hMrp/28.jpg',
    description: 'Descubre nuestra colección de pijamas súper cómodas y con diseños divertidos. Perfectas para dormir con estilo y relajarte con total comodidad. Con telas suaves y estampados únicos, encontrarás el set ideal para ti.✨ Variedad de diseños y colores,✨ Tela ligera y fresca,✨ Ajuste cómodo y femenino, ¡Elige tu favorito y duerme con diversión! 💖🌟',
    images: [
      'https://i.ibb.co/LXg6MR51/25.jpg',
      'https://i.ibb.co/N61FPdc8/26.jpg',
      'https://i.ibb.co/Vk3FX9Z/27.jpg',
      'https://i.ibb.co/r22984V7/23.jpg',
      'https://i.ibb.co/Rkvfc2HG/30.jpg',
      'https://i.ibb.co/Q3G4hMrp/28.jpg',
      'https://i.ibb.co/LDvdPPLk/29.jpg',
      'https://i.ibb.co/j97T4bz4/24.jpg'
    ]
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        {/* Category Filters */}
        <div className="container mx-auto px-4 my-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white py-12 mb-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Envíos a todo el Perú</h3>
                <p className="text-gray-600">Hacemos envíos seguros a nivel nacional</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Somos Fabricantes</h3>
                <p className="text-gray-600">Garantizamos la mejor calidad</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Personalización</h3>
                <p className="text-gray-600">Personalizamos tus diseños de tu prenda  a tu gusto</p>
              </div>
            </div>
          </div>
        </div>  
        <Footer />

        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;