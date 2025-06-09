import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MyOrdersPage = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulando carregamento de pedidos
    const fetchOrders = async () => {
      setLoading(true);
      try {
        // Simulando delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dados mockados de pedidos
        const mockOrders = [
          {
            id: '7234931932',
            product: 'Tênis Nike Revolution 6 Next Nature Masculino',
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop",
            status: 'Produto em trânsito',
            statusColor: 'text-orange-500'
          },
          {
            id: '4495810492',
            product: 'Tênis Nike Revolution 6 Next Nature Masculino',
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop",
            status: 'Finalizado',
            statusColor: 'text-green-600'
          },
          {
            id: '4495810492',
            product: 'Tênis Nike Revolution 6 Next Nature Masculino',
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop",
            status: 'Cancelado',
            statusColor: 'text-red-500'
          },
          {
            id: '4495810492',
            product: 'Tênis Nike Revolution 6 Next Nature Masculino',
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop",
            status: 'Finalizado',
            statusColor: 'text-green-600'
          },
          {
            id: '4495810492',
            product: 'Tênis Nike Revolution 6 Next Nature Masculino',
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop",
            status: 'Finalizado',
            statusColor: 'text-green-600'
          }
        ];
        
        setOrders(mockOrders);
      } catch (error) {
        console.error('Erro ao carregar pedidos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
                <span className="text-gray-700">Meus Pedidos</span>
              </li>
            </ol>
          </nav>

          {/* Título mobile e botão de menu */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h1 className="text-xl font-bold">Meus Pedidos</h1>
            <button 
              onClick={toggleMobileMenu}
              className="bg-gray-200 p-2 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Menu lateral - Versão mobile */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-white rounded-lg shadow-sm overflow-hidden mb-4">
                <nav className="divide-y divide-gray-200">
                  <Link 
                    to="/my-profile" 
                    className={`block px-6 py-4 hover:bg-gray-50 ${activeTab === 'profile' ? 'text-pink-600 font-medium' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    Meu Perfil
                  </Link>
                  <Link 
                    to="/my-orders" 
                    className={`block px-6 py-4 hover:bg-gray-50 ${activeTab === 'orders' ? 'text-pink-600 font-medium' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('orders')}
                  >
                    Meus Pedidos
                  </Link>
                  <Link 
                    to="/my-info" 
                    className={`block px-6 py-4 hover:bg-gray-50 ${activeTab === 'info' ? 'text-pink-600 font-medium' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('info')}
                  >
                    Minhas Informações
                  </Link>
                  <Link 
                    to="/payment-methods" 
                    className={`block px-6 py-4 hover:bg-gray-50 ${activeTab === 'payment' ? 'text-pink-600 font-medium' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('payment')}
                  >
                    Métodos de Pagamento
                  </Link>
                </nav>
              </div>
            )}

            {/* Menu lateral - Versão desktop */}
            <div className="hidden md:block md:w-1/4 lg:w-1/5">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <nav className="divide-y divide-gray-200">
                  <Link 
                    to="/my-profile" 
                    className={`block px-6 py-4 hover:bg-gray-50 ${activeTab === 'profile' ? 'text-pink-600 font-medium' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    Meu Perfil
                  </Link>
                  <Link 
                    to="/my-orders" 
                    className={`block px-6 py-4 hover:bg-gray-50 ${activeTab === 'orders' ? 'text-pink-600 font-medium' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('orders')}
                  >
                    Meus Pedidos
                  </Link>
                  <Link 
                    to="/my-info" 
                    className={`block px-6 py-4 hover:bg-gray-50 ${activeTab === 'info' ? 'text-pink-600 font-medium' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('info')}
                  >
                    Minhas Informações
                  </Link>
                  <Link 
                    to="/payment-methods" 
                    className={`block px-6 py-4 hover:bg-gray-50 ${activeTab === 'payment' ? 'text-pink-600 font-medium' : 'text-gray-700'}`}
                    onClick={() => setActiveTab('payment')}
                  >
                    Métodos de Pagamento
                  </Link>
                </nav>
              </div>
            </div>

            {/* Conteúdo principal */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center">
                  <h1 className="text-xl md:text-2xl font-bold md:block hidden">Meus Pedidos</h1>
                  <div className="text-right text-gray-700 font-medium">STATUS</div>
                </div>

                {loading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
                  </div>
                ) : orders.length === 0 ? (
                  <div className="p-4 md:p-8 text-center">
                    <h2 className="text-lg md:text-xl font-medium mb-2">Você ainda não tem pedidos</h2>
                    <p className="text-gray-600 mb-6">Explore nossa loja e faça seu primeiro pedido!</p>
                    <Link
                      to="/products"
                      className="bg-pink-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium hover:bg-pink-700 transition"
                    >
                      Ver produtos
                    </Link>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {orders.map((order, index) => (
                      <div key={index} className="p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-md overflow-hidden mr-3 md:mr-4 flex-shrink-0">
                            <img 
                              src={order.image} 
                              alt={order.product} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-gray-500 mb-1">Pedido nº {order.id}</div>
                            <h3 className="font-medium text-gray-800 text-sm md:text-base truncate">{order.product}</h3>
                          </div>
                        </div>
                        <div className={`${order.statusColor} font-medium text-sm md:text-base ml-2 md:ml-4 flex-shrink-0`}>
                          {order.status}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyOrdersPage;
