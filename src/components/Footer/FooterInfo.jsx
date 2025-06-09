import React from 'react';
import { Link } from 'react-router-dom';

const FooterInfo = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Informação</h3>
      <ul className="space-y-1">
        <li>
          <Link to="/about" className="text-gray-400 hover:text-white text-sm">Sobre Drip Store</Link>
        </li>
        <li>
          <Link to="/security" className="text-gray-400 hover:text-white text-sm">Segurança</Link>
        </li>
        <li>
          <Link to="/wishlist" className="text-gray-400 hover:text-white text-sm">Wishlist</Link>
        </li>
        <li>
          <Link to="/blog" className="text-gray-400 hover:text-white text-sm">Blog</Link>
        </li>
        <li>
          <Link to="/careers" className="text-gray-400 hover:text-white text-sm">Trabalhe conosco</Link>
        </li>
        <li>
          <Link to="/my-orders" className="text-gray-400 hover:text-white text-sm">Meus Pedidos</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterInfo;
