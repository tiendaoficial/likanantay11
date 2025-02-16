import React, { useState } from 'react';
import { MessageCircle, Camera, ShoppingBag, Share2 } from 'lucide-react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { CartProvider } from './context/CartContext';

const categories = ['Todos', 'Caballeros', 'Damas', 'Niños', 'Deportivos', 'Sublimado'];

const products = [
  {
    id: '1',
    name: 'Camisa Elegante',
    price: 89.90,
    category: 'Caballeros',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800',
    description: 'Camisa elegante de algodón 100% peruano, perfecta para ocasiones especiales. Diseño moderno y elegante, ideal para eventos formales o casuales.',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800',
      'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=800',
      'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800'
    ]
  },
  {
    id: '2',
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
    id: '3',
    name: 'Conjunto Deportivo',
    price: 149.90,
    category: 'Deportivos',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
    description: 'Conjunto deportivo de alta calidad, ideal para entrenamiento y actividades físicas. Material transpirable y duradero.',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
      'https://images.unsplash.com/photo-1483721310020-03333e577078?w=800',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800',
      'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=800'
    ]
  },
  {
    id: '4',
    name: 'Conjunto Infantil',
    price: 79.90,
    category: 'Niños',
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800',
    description: 'Conjunto infantil cómodo y resistente, perfecto para el día a día. Material suave y duradero, ideal para niños activos.',
    images: [
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800',
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800'
    ]
  },
  {
    id: '5',
    name: 'polo',
    price: 59.90,
    category: 'Deportivos',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    description: 'Polo personalizado con tu diseño preferido. Impresión de alta calidad que no se decolora. Material 100% algodón pima.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800',
      'https://images.unsplash.com/photo-1503342452485-86b7f54527ef?w=800',
      'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800'
    ]
  },
  {
    id: '6',
    name: 'Traje Formal',
    price: 399.90,
    category: 'Caballeros',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800',
    description: 'Traje formal de corte moderno, confeccionado con los mejores materiales. Incluye saco y pantalón. Ideal para eventos especiales.',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800',
      'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800',
      'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800'
    ]
  },
  {
    id: '7',
    name: 'Blusa Elegante',
    price: 79.90,
    category: 'Damas',
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800',
    description: 'Blusa elegante con diseño moderno y sofisticado. Perfecta para ocasiones especiales o el trabajo. Material fresco y duradero.',
    images: [
      'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800',
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800',
      'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800'
    ]
  },
  {
    id: '8',
    name: 'Diseño',
    price: 89.90,
    category: 'Sublimado',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800',
    description: 'Uniforme deportivo completo, incluye camiseta y short. Material transpirable de alta calidad, ideal para cualquier deporte.',
    images: [
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800',
      'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=800',
      'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800',
      'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=800'
    ]
  },
  {
    id: '9',
    name: 'Impresión',
    price: 89.90,
    category: 'Sublimado',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800',
    description: 'Uniforme deportivo completo, incluye camiseta y short. Material transpirable de alta calidad, ideal para cualquier deporte.',
    images: [
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800',
      'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=800',
      'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800',
      'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=800'
    ]
  },
  {
    id: '10',
    name: 'Planchado',
    price: 89.90,
    category: 'Sublimado',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800',
    description: 'Uniforme deportivo completo, incluye camiseta y short. Material transpirable de alta calidad, ideal para cualquier deporte.',
    images: [
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800',
      'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=800',
      'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=800',
      'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=800'
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