import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    cellphone: '',
    address: '',
    neighborhood: '',
    city: '',
    zipCode: '',
    complement: '',
    receiveOffers: true
  });
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulando envio do formulário
    setTimeout(() => {
      setLoading(false);
      // Redirecionamento seria feito aqui após cadastro bem-sucedido
      console.log('Cadastro enviado:', formData);
    }, 1000);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <div className="bg-purple-100 min-h-screen py-8 px-4 md:px-0">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Criar Conta</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Informações Pessoais</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome Completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Insira seu nome"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                          CPF <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="cpf"
                          name="cpf"
                          value={formData.cpf}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Insira seu CPF"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Insira seu email"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cellphone" className="block text-sm font-medium text-gray-700 mb-1">
                          Celular <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="cellphone"
                          name="cellphone"
                          value={formData.cellphone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Insira seu celular"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition font-medium"
                    >
                      Próximo
                    </button>
                  </div>
                </>
              )}
              
              {currentStep === 2 && (
                <>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Informações de Entrega</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Endereço <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Insira seu endereço"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">
                          Bairro <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="neighborhood"
                          name="neighborhood"
                          value={formData.neighborhood}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Insira seu bairro"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          Cidade <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Insira sua cidade"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          CEP <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Insira seu CEP"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="complement" className="block text-sm font-medium text-gray-700 mb-1">
                          Complemento
                        </label>
                        <input
                          type="text"
                          id="complement"
                          name="complement"
                          value={formData.complement}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                          placeholder="Insira complemento"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="receiveOffers"
                      name="receiveOffers"
                      type="checkbox"
                      checked={formData.receiveOffers}
                      onChange={handleChange}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                    />
                    <label htmlFor="receiveOffers" className="ml-2 block text-sm text-gray-700">
                      Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
                    </label>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-gray-700 py-2 px-6 border border-gray-300 rounded-md hover:bg-gray-50 transition font-medium"
                    >
                      Voltar
                    </button>
                    
                    <button
                      type="submit"
                      className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition font-medium flex items-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processando...
                        </>
                      ) : (
                        'Criar Conta'
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Ou faça login com</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#4285F4">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                  </svg>
                  Google
                </button>
                
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Já possui uma conta? Entre{' '}
                <Link to="/login" className="text-pink-600 hover:text-pink-700 font-medium">
                  aqui
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
