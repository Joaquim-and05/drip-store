import React from 'react';
import { Link } from 'react-router-dom';

const FooterCategories = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Categorias</h3>
      <ul className="space-y-1">
        <li>
          <Link to="/products?category=camisetas" className="text-gray-400 hover:text-white text-sm">Camisetas</Link>
        </li>
        <li>
          <Link to="/products?category=calcas" className="text-gray-400 hover:text-white text-sm">Calças</Link>
        </li>
        <li>
          <Link to="/products?category=bones" className="text-gray-400 hover:text-white text-sm">Bonés</Link>
        </li>
        <li>
          <Link to="/products?category=headphones" className="text-gray-400 hover:text-white text-sm">Headphones</Link>
        </li>
        <li>
          <Link to="/products?category=tenis" className="text-gray-400 hover:text-white text-sm">Tênis</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterCategories;
