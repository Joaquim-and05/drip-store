import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Francisco');

  useEffect(() => {
    // Simulando carregamento de itens do carrinho
    const mockCartItem = {
      id: 1,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      price: 219.00,
      originalPrice: 349.90,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop",
    };
    setCartItems([mockCartItem]);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleViewCart = () => {
    setIsCartOpen(false);
    navigate('/cart');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-end">
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <span className="text-sm text-gray-600">Olá, {userName}</span>
                <Link to="/my-orders" className="text-sm text-gray-600 hover:text-pink-600">Meus Pedidos</Link>
                <button 
                  onClick={() => setIsLoggedIn(false)} 
                  className="text-sm text-gray-600 hover:text-pink-600"
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm text-gray-600 hover:text-pink-600">Entrar</Link>
                <Link to="/register" className="text-sm text-gray-600 hover:text-pink-600">Cadastre-se</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="bg-pink-600 text-white p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold text-pink-600">Digital Store</span>
            </Link>
          </div>

          {/* Search */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar produto..."
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Cart and menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleCart}
                className="p-2 text-gray-600 hover:text-pink-600 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {/* Mini cart dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-medium">Meu Carrinho</h3>
                  </div>

                  {cartItems.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      Seu carrinho está vazio
                    </div>
                  ) : (
                    <>
                      <div className="max-h-60 overflow-y-auto">
                        {cartItems.map((item) => (
                          <div key={item.id} className="p-4 border-b border-gray-200 flex items-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden mr-3">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-gray-800 truncate">{item.name}</h4>
                              <div className="flex items-center mt-1">
                                <span className="text-sm font-medium text-pink-600">R$ {item.price.toFixed(2)}</span>
                                <span className="text-xs text-gray-400 line-through ml-2">R$ {item.originalPrice.toFixed(2)}</span>
                              </div>
                            </div>
                            <div className="text-sm text-gray-600">
                              x{item.quantity}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 border-b border-gray-200">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Total:</span>
                          <span className="font-medium text-pink-600">R$ {cartTotal.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="p-4 flex flex-col space-y-2">
                        <button
                          onClick={handleViewCart}
                          className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
                        >
                          Ver Carrinho
                        </button>
                        <button
                          onClick={handleClearCart}
                          className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
                        >
                          Esvaziar
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-pink-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row">
              <li>
                <Link to="/" className="block py-3 px-4 hover:bg-gray-700">Home</Link>
              </li>
              <li>
                <Link to="/products" className="block py-3 px-4 hover:bg-gray-700">Produtos</Link>
              </li>
              <li>
                <Link to="/categories" className="block py-3 px-4 hover:bg-gray-700">Categorias</Link>
              </li>
              <li>
                <Link to="/my-orders" className="block py-3 px-4 hover:bg-gray-700">Meus Pedidos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
