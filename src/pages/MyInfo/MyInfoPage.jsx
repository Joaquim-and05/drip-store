import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MyInfoPage = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    personalInfo: {
      name: 'Francisco Antonio Pereira',
      cpf: '123485913-35',
      email: 'francisco@gmail.com',
      cellphone: '(85) 5555-5555'
    },
    deliveryInfo: {
      address: 'Rua João Pessoa, 333',
      neighborhood: 'Centro',
      city: 'Fortaleza, Ceará',
      zipCode: '433-8800'
    }
  });

  useEffect(() => {
    // Simulando carregamento de dados do usuário
    const fetchUserData = async () => {
      setLoading(true);
      try {
        // Simulando delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        // Dados já estão mockados no estado inicial
      } catch (error) {
        console.error('Erro ao carregar informações do usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    // Implementação futura: abrir modal de edição ou navegar para página de edição
    console.log('Editar informações');
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
                <span className="text-gray-700">Minhas Informações</span>
              </li>
            </ol>
          </nav>

          {/* Título mobile e botão de menu */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h1 className="text-xl font-bold">Minhas Informações</h1>
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
              {loading ? (
                <div className="bg-white rounded-lg shadow-sm p-8 flex justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 md:p-6 border-b border-gray-200 flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl font-bold md:block hidden">Minhas Informações</h1>
                    <button 
                      onClick={handleEdit}
                      className="text-pink-600 hover:text-pink-700 font-medium"
                    >
                      Editar
                    </button>
                  </div>

                  <div className="p-4 md:p-6">
                    {/* Informações Pessoais */}
                    <div className="mb-6 md:mb-8">
                      <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Informações Pessoais</h2>
                      
                      <div className="space-y-3 md:space-y-4">
                        <div>
                          <p className="text-gray-500 text-sm">Nome:</p>
                          <p className="font-medium">{userInfo.personalInfo.name}</p>
                        </div>
                        
                        <div>
                          <p className="text-gray-500 text-sm">CPF:</p>
                          <p className="font-medium">{userInfo.personalInfo.cpf}</p>
                        </div>
                        
                        <div>
                          <p className="text-gray-500 text-sm">Email:</p>
                          <p className="font-medium">{userInfo.personalInfo.email}</p>
                        </div>
                        
                        <div>
                          <p className="text-gray-500 text-sm">Celular:</p>
                          <p className="font-medium">{userInfo.personalInfo.cellphone}</p>
                        </div>
                      </div>
                    </div>

                    {/* Informações de Entrega */}
                    <div>
                      <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Informações de Entrega</h2>
                      
                      <div className="space-y-3 md:space-y-4">
                        <div>
                          <p className="text-gray-500 text-sm">Endereço:</p>
                          <p className="font-medium">{userInfo.deliveryInfo.address}</p>
                        </div>
                        
                        <div>
                          <p className="text-gray-500 text-sm">Bairro:</p>
                          <p className="font-medium">{userInfo.deliveryInfo.neighborhood}</p>
                        </div>
                        
                        <div>
                          <p className="text-gray-500 text-sm">Cidade:</p>
                          <p className="font-medium">{userInfo.deliveryInfo.city}</p>
                        </div>
                        
                        <div>
                          <p className="text-gray-500 text-sm">CEP:</p>
                          <p className="font-medium">{userInfo.deliveryInfo.zipCode}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyInfoPage;
