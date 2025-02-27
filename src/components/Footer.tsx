import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nosotros</h3>
            <p className="text-gray-400 mb-4">
            Nos especializamos en la creación de prendas únicas que combinan estilo, comodidad y alta calidad. Ofrecemos servicios de diseño, impresión, planchado con calandra y confección, garantizando acabados impecables y duraderos..
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <p className="text-gray-400">Gamarra,la victoria,lima, Perú</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <p className="text-gray-400">+51 960 478 978</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <p className="text-gray-400">cervantestienda99@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
  <h3 className="text-xl font-bold mb-4">Síguenos</h3>
  <div className="flex space-x-4">
    <a 
      href="https://web.facebook.com/profile.php?id=61572993457650" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-blue-500 transition-colors"
    >
      <Facebook className="w-8 h-8" />
    </a>
    <a 
      href="https://www.instagram.com/tu_pagina" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-pink-500 transition-colors"
    >
      <Instagram className="w-8 h-8" />
    </a>
    <a 
      href="https://twitter.com/tu_pagina" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-blue-400 transition-colors"
    >
      <Twitter className="w-8 h-8" />
    </a>
  </div>
</div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}