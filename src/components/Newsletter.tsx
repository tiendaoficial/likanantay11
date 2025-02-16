import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfRC62Ck2RQQwFLIhdzsEQRKfuP0NaNeb7wB_oj5CNHXVTF_Q/viewform', '_blank');
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Recibe nuestras ofertas</h2>
          <p className="text-gray-600 mb-6">Suscríbete para recibir las últimas novedades y ofertas exclusivas.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}