import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [couponCode, setCouponCode] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [showMiniCart, setShowMiniCart] = useState(false);

  useEffect(() => {
    // Simulando carregamento de itens do carrinho
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        // Simulando delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dados mockados de itens do carrinho
        const mockCartItems = [
          {
            id: 1,
            name: 'Tênis Nike Revolution 6 Next Nature Masculino',
            price: 219.90,
            originalPrice: 349.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop",
            quantity: 1,
            size: '42',
            color: 'Preto'
          },
          {
            id: 2,
            name: 'Tênis Adidas Ultraboost 22',
            price: 299.90,
            originalPrice: 429.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300"/assets/produc-image-2.jpeg"h=200"/assets/produc-image-2.jpeg"fit=crop",
            quantity: 1,
            size: '41',
            color: 'Branco'
          }
        ];
        
        setCartItems(mockCartItems);
        
        // Dados mockados de opções de frete
        const mockShippingOptions = [
          {
            id: 1,
            name: 'Entrega Padrão',
            price: 19.90,
            days: '3-5 dias úteis'
          },
          {
            id: 2,
            name: 'Entrega Expressa',
            price: 29.90,
            days: '1-2 dias úteis'
          },
          {
            id: 3,
            name: 'Retirada na Loja',
            price: 0,
            days: 'Disponível em 24h'
          }
        ];
        
        setShippingOptions(mockShippingOptions);
        setSelectedShipping(mockShippingOptions[0]);
      } catch (error) {
        console.error('Erro ao carregar itens do carrinho:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const applyCoupon = () => {
    // Implementação futura: aplicar cupom de desconto
    console.log('Aplicar cupom:', couponCode);
  };

  const calculateShipping = () => {
    // Implementação futura: calcular frete
    console.log('Calcular frete para CEP:', zipCode);
  };

  // Calcular subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Calcular desconto
  const discount = cartItems.reduce((total, item) => {
    const itemDiscount = item.originalPrice - item.price;
    return total + (itemDiscount * item.quantity);
  }, 0);
  
  // Calcular frete
  const shipping = selectedShipping ? selectedShipping.price : 0;
  
  // Calcular total
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen py-4 md:py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs - Escondido em mobile */}
          <nav className="text-sm mb-6 hidden md:block">
            <ol className="flex flex-wrap">
              <li className="flex items-center">
                <Link to="/" className="text-gray-500 hover:text-pink-600">Home</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Carrinho</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-2xl font-bold mb-6">Meu Carrinho</h1>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="text-xl font-medium mb-2">Seu carrinho está vazio</h2>
              <p className="text-gray-600 mb-6">Adicione produtos ao seu carrinho para continuar comprando.</p>
              <Link
                to="/products"
                className="bg-pink-600 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-700 transition"
              >
                Ver produtos
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Mini carrinho flutuante */}
              {showMiniCart && (
                <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-lg p-4 w-72 md:w-80">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">Meu Carrinho ({cartItems.length})</h3>
                    <button 
                      onClick={() => setShowMiniCart(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="max-h-60 overflow-y-auto mb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center py-2 border-b border-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="ml-3 flex-1">
                          <h4 className="text-sm font-medium line-clamp-1">{item.name}</h4>
                          <p className="text-xs text-gray-500">
                            {item.quantity} x R$ {item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center font-semibold mb-4">
                    <span>Total:</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={clearCart}
                      className="w-full py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Esvaziar
                    </button>
                    <Link
                      to="/cart"
                      onClick={() => setShowMiniCart(false)}
                      className="w-full py-2 bg-pink-600 text-white rounded-md text-sm font-medium hover:bg-pink-700 text-center"
                    >
                      Ver Carrinho
                    </Link>
                  </div>
                </div>
              )}

              {/* Lista de itens do carrinho */}
              <div className="w-full lg:w-2/3">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                  <div className="p-4 md:p-6">
                    <div className="hidden md:flex border-b border-gray-200 pb-4 mb-4 text-sm font-medium text-gray-500">
                      <div className="w-2/5">Produto</div>
                      <div className="w-1/5 text-center">Preço</div>
                      <div className="w-1/5 text-center">Quantidade</div>
                      <div className="w-1/5 text-right">Subtotal</div>
                    </div>
                    
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-4 border-b border-gray-200 last:border-b-0">
                        <div className="flex flex-col md:flex-row md:items-center">
                          {/* Produto (imagem e detalhes) */}
                          <div className="flex items-start md:w-2/5 mb-4 md:mb-0">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-md"
                              />
                              {item.discount > 0 && (
                                <div className="absolute top-0 right-0 bg-pink-600 text-white text-xs font-bold px-1 py-0.5 rounded">
                                  {item.discount}% OFF
                                </div>
                              )}
                            </div>
                            <div className="ml-4">
                              <h3 className="text-sm md:text-base font-medium">{item.name}</h3>
                              <p className="text-xs text-gray-500 mt-1">Tamanho: {item.size}</p>
                              <p className="text-xs text-gray-500">Cor: {item.color}</p>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-xs text-pink-600 hover:text-pink-700 mt-2 md:hidden"
                              >
                                Remover
                              </button>
                            </div>
                          </div>
                          
                          {/* Preço */}
                          <div className="md:w-1/5 md:text-center mb-2 md:mb-0">
                            <div className="flex items-center justify-between md:block">
                              <span className="text-sm font-medium md:hidden">Preço:</span>
                              <div>
                                <span className="text-sm md:text-base font-medium">
                                  R$ {item.price.toFixed(2)}
                                </span>
                                {item.originalPrice > item.price && (
                                  <span className="block text-xs text-gray-500 line-through">
                                    R$ {item.originalPrice.toFixed(2)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Quantidade */}
                          <div className="md:w-1/5 md:text-center mb-2 md:mb-0">
                            <div className="flex items-center justify-between md:justify-center">
                              <span className="text-sm font-medium md:hidden">Quantidade:</span>
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                  </svg>
                                </button>
                                <span className="px-3 py-1 text-gray-900 font-medium">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          {/* Subtotal */}
                          <div className="md:w-1/5 md:text-right">
                            <div className="flex items-center justify-between md:block">
                              <span className="text-sm font-medium md:hidden">Subtotal:</span>
                              <span className="text-sm md:text-base font-medium">
                                R$ {(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-xs text-pink-600 hover:text-pink-700 mt-2 hidden md:inline-block"
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4 md:mb-0">
                      <Link
                        to="/products"
                        className="text-sm text-pink-600 hover:text-pink-700 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Continuar comprando
                      </Link>
                      <button
                        onClick={clearCart}
                        className="text-sm text-gray-600 hover:text-gray-800"
                      >
                        Limpar carrinho
                      </button>
                    </div>
                    
                    <button
                      onClick={() => setShowMiniCart(true)}
                      className="bg-pink-600 text-white py-2 px-6 rounded-md font-medium hover:bg-pink-700 transition md:hidden"
                    >
                      Ver mini carrinho
                    </button>
                  </div>
                </div>
                
                {/* Cupom e cálculo de frete */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                    <h2 className="text-lg font-medium mb-4">Cupom de desconto</h2>
                    <div className="flex">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Digite seu cupom"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                      <button
                        onClick={applyCoupon}
                        className="bg-pink-600 text-white px-4 py-2 rounded-r-md font-medium hover:bg-pink-700 transition"
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                    <h2 className="text-lg font-medium mb-4">Calcular frete</h2>
                    <div className="flex">
                      <input
                        type="text"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="Digite seu CEP"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                      <button
                        onClick={calculateShipping}
                        className="bg-pink-600 text-white px-4 py-2 rounded-r-md font-medium hover:bg-pink-700 transition"
                      >
                        Calcular
                      </button>
                    </div>
                    
                    {shippingOptions.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {shippingOptions.map((option) => (
                          <label key={option.id} className="flex items-center p-2 border rounded-md cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="shipping"
                              checked={selectedShipping && selectedShipping.id === option.id}
                              onChange={() => setSelectedShipping(option)}
                              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                            />
                            <div className="ml-2 flex-1">
                              <div className="flex justify-between">
                                <span className="text-sm font-medium">{option.name}</span>
                                <span className="text-sm font-medium">
                                  {option.price === 0 ? 'Grátis' : `R$ ${option.price.toFixed(2)}`}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500">{option.days}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Resumo do pedido */}
              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 sticky top-4">
                  <h2 className="text-lg font-medium mb-4">Resumo do pedido</h2>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>R$ {subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Desconto</span>
                        <span>- R$ {discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frete</span>
                      <span>
                        {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>R$ {total.toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        ou em até 10x de R$ {(total / 10).toFixed(2)} sem juros
                      </p>
                    </div>
                  </div>
                  
                  <Link
                    to="/checkout"
                    className="w-full bg-pink-600 text-white py-3 rounded-md font-medium hover:bg-pink-700 transition flex items-center justify-center"
                  >
                    Continuar
                  </Link>
                  
                  <div className="mt-4 text-xs text-gray-500 text-center">
                    <p>Ao finalizar a compra, você concorda com os</p>
                    <p>
                      <Link to="/terms" className="text-pink-600 hover:text-pink-700">
                        Termos de Uso
                      </Link>
                      {' '}e{' '}
                      <Link to="/privacy" className="text-pink-600 hover:text-pink-700">
                        Política de Privacidade
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
