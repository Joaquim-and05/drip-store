import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PaymentMethodsPage = () => {
  const [activeTab, setActiveTab] = useState('payment');
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    // Simulando carregamento de métodos de pagamento
    const fetchPaymentMethods = async () => {
      setLoading(true);
      try {
        // Simulando delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dados mockados de métodos de pagamento
        const mockPaymentMethods = [
          {
            id: 1,
            type: 'credit_card',
            brand: 'Mastercard',
            number: '•••• •••• •••• 5678',
            holder: 'Francisco A. Pereira',
            expiry: '12/2025'
          },
          {
            id: 2,
            type: 'credit_card',
            brand: 'Visa',
            number: '•••• •••• •••• 1234',
            holder: 'Francisco A. Pereira',
            expiry: '08/2024'
          }
        ];
        
        setPaymentMethods(mockPaymentMethods);
      } catch (error) {
        console.error('Erro ao carregar métodos de pagamento:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentMethods();
  }, []);

  const handleAddPaymentMethod = () => {
    // Implementação futura: abrir modal para adicionar novo método de pagamento
    console.log('Adicionar método de pagamento');
  };

  const handleRemovePaymentMethod = (id) => {
    // Implementação futura: remover método de pagamento
    console.log('Remover método de pagamento:', id);
    setPaymentMethods(prevMethods => prevMethods.filter(method => method.id !== id));
  };

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
                <span className="text-gray-700">Métodos de Pagamento</span>
              </li>
            </ol>
          </nav>

          {/* Título mobile e botão de menu */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h1 className="text-xl font-bold">Métodos de Pagamento</h1>
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
                  <h1 className="text-xl md:text-2xl font-bold md:block hidden">Métodos de Pagamento</h1>
                  <button 
                    onClick={handleAddPaymentMethod}
                    className="bg-pink-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:bg-pink-700 transition text-sm md:text-base"
                  >
                    Adicionar
                  </button>
                </div>

                {loading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
                  </div>
                ) : paymentMethods.length === 0 ? (
                  <div className="p-4 md:p-8 text-center">
                    <h2 className="text-lg md:text-xl font-medium mb-2">Você ainda não tem métodos de pagamento</h2>
                    <p className="text-gray-600 mb-6">Adicione um cartão de crédito ou débito para facilitar suas compras.</p>
                    <button
                      onClick={handleAddPaymentMethod}
                      className="bg-pink-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium hover:bg-pink-700 transition"
                    >
                      Adicionar método de pagamento
                    </button>
                  </div>
                ) : (
                  <div className="p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="border border-gray-200 rounded-lg p-3 md:p-4">
                          <div className="flex justify-between items-start mb-3 md:mb-4">
                            <div className="flex items-center">
                              {method.brand === 'Mastercard' ? (
                                <svg className="h-6 w-6 md:h-8 md:w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="2" y="6" width="20" height="12" rx="2" fill="#FF5F00"/>
                                  <circle cx="9" cy="12" r="5" fill="#EB001B"/>
                                  <circle cx="15" cy="12" r="5" fill="#F79E1B"/>
                                </svg>
                              ) : (
                                <svg className="h-6 w-6 md:h-8 md:w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="2" y="6" width="20" height="12" rx="2" fill="#1A1F71"/>
                                  <path d="M9 16L12 8L15 16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                              <span className="font-medium text-sm md:text-base">{method.brand}</span>
                            </div>
                            <button 
                              onClick={() => handleRemovePaymentMethod(method.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-base md:text-lg font-medium mb-1">{method.number}</p>
                          <div className="flex justify-between text-xs md:text-sm text-gray-600">
                            <span>{method.holder}</span>
                            <span>Validade: {method.expiry}</span>
                          </div>
                        </div>
                      ))}
                    </div>
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

export default PaymentMethodsPage;
