import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        {product.discount && (
          <span className="absolute top-2 right-2 bg-yellow-300 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
            30% OFF
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-4">
        <span className="text-gray-500 text-sm">{product.category}</span>
        <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-center">
          {product.originalPrice && (
            <span className="text-gray-400 line-through mr-2">R$ {product.originalPrice}</span>
          )}
          <span className="text-gray-900 font-bold">R$ {product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
