import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [formData, setFormData] = useState({
    // Dados pessoais
    name: '',
    email: '',
    cpf: '',
    phone: '',
    
    // Endereço de entrega
    zipCode: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    
    // Dados do cartão
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    
    // Opções
    saveInfo: true,
    receiveOffers: true
  });

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
      } catch (error) {
        console.error('Erro ao carregar itens do carrinho:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNextStep = () => {
    setActiveStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevStep = () => {
    setActiveStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulando envio do pedido
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      navigate('/order-confirmation');
    }, 1500);
  };

  // Calcular subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Calcular desconto
  const discount = cartItems.reduce((total, item) => {
    const itemDiscount = item.originalPrice - item.price;
    return total + (itemDiscount * item.quantity);
  }, 0);
  
  // Calcular frete
  const shipping = 19.90;
  
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
              <li className="flex items-center">
                <Link to="/cart" className="text-gray-500 hover:text-pink-600">Carrinho</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Checkout</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Formulário de checkout */}
              <div className="w-full lg:w-2/3">
                {/* Etapas do checkout */}
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
                  <div className="flex justify-between mb-6">
                    <div className={`flex flex-col items-center ${activeStep >= 1 ? 'text-pink-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${activeStep >= 1 ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        1
                      </div>
                      <span className="text-xs">Entrega</span>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className={`h-1 w-full ${activeStep >= 2 ? 'bg-pink-600' : 'bg-gray-200'}`}></div>
                    </div>
                    <div className={`flex flex-col items-center ${activeStep >= 2 ? 'text-pink-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${activeStep >= 2 ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        2
                      </div>
                      <span className="text-xs">Pagamento</span>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className={`h-1 w-full ${activeStep >= 3 ? 'bg-pink-600' : 'bg-gray-200'}`}></div>
                    </div>
                    <div className={`flex flex-col items-center ${activeStep >= 3 ? 'text-pink-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${activeStep >= 3 ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        3
                      </div>
                      <span className="text-xs">Confirmação</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Etapa 1: Informações de entrega */}
                    {activeStep === 1 && (
                      <div>
                        <h2 className="text-lg font-medium mb-4">Informações de entrega</h2>
                        
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold mb-3">Dados pessoais</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Nome completo *
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                E-mail *
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                                CPF *
                              </label>
                              <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Telefone *
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold mb-3">Endereço de entrega</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                                CEP *
                              </label>
                              <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                Endereço *
                              </label>
                              <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                                Número *
                              </label>
                              <input
                                type="text"
                                id="number"
                                name="number"
                                value={formData.number}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">
                                Bairro *
                              </label>
                              <input
                                type="text"
                                id="neighborhood"
                                name="neighborhood"
                                value={formData.neighborhood}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                                Cidade *
                              </label>
                              <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                              />
                            </div>
                            <div>
                              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                                Estado *
                              </label>
                              <select
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                              >
                                <option value="">Selecione</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="saveInfo"
                              checked={formData.saveInfo}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Salvar informações para próximas compras
                            </span>
                          </label>
                        </div>
                        
                        <div className="flex justify-between">
                          <Link
                            to="/cart"
                            className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                          >
                            Voltar para o carrinho
                          </Link>
                          <button
                            type="button"
                            onClick={handleNextStep}
                            className="bg-pink-600 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-700 transition"
                          >
                            Continuar para pagamento
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Etapa 2: Informações de pagamento */}
                    {activeStep === 2 && (
                      <div>
                        <h2 className="text-lg font-medium mb-4">Informações de pagamento</h2>
                        
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold mb-3">Método de pagamento</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <button
                              type="button"
                              onClick={() => setPaymentMethod('credit')}
                              className={`p-4 border rounded-md text-center transition ${
                                paymentMethod === 'credit'
                                  ? 'border-pink-600 bg-pink-50 text-pink-600'
                                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
                              }`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                              <span className="text-sm font-medium">Cartão de Crédito</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setPaymentMethod('boleto')}
                              className={`p-4 border rounded-md text-center transition ${
                                paymentMethod === 'boleto'
                                  ? 'border-pink-600 bg-pink-50 text-pink-600'
                                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
                              }`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-sm font-medium">Boleto Bancário</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setPaymentMethod('pix')}
                              className={`p-4 border rounded-md text-center transition ${
                                paymentMethod === 'pix'
                                  ? 'border-pink-600 bg-pink-50 text-pink-600'
                                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
                              }`}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                              <span className="text-sm font-medium">PIX</span>
                            </button>
                          </div>
                        </div>
                        
                        {paymentMethod === 'credit' && (
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold mb-3">Dados do cartão</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="md:col-span-2">
                                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                                  Nome no cartão *
                                </label>
                                <input
                                  type="text"
                                  id="cardName"
                                  name="cardName"
                                  value={formData.cardName}
                                  onChange={handleInputChange}
                                  required={paymentMethod === 'credit'}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                  Número do cartão *
                                </label>
                                <input
                                  type="text"
                                  id="cardNumber"
                                  name="cardNumber"
                                  value={formData.cardNumber}
                                  onChange={handleInputChange}
                                  required={paymentMethod === 'credit'}
                                  placeholder="0000 0000 0000 0000"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                                  Data de validade *
                                </label>
                                <input
                                  type="text"
                                  id="cardExpiry"
                                  name="cardExpiry"
                                  value={formData.cardExpiry}
                                  onChange={handleInputChange}
                                  required={paymentMethod === 'credit'}
                                  placeholder="MM/AA"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mb-1">
                                  Código de segurança (CVV) *
                                </label>
                                <input
                                  type="text"
                                  id="cardCVV"
                                  name="cardCVV"
                                  value={formData.cardCVV}
                                  onChange={handleInputChange}
                                  required={paymentMethod === 'credit'}
                                  placeholder="123"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {paymentMethod === 'boleto' && (
                          <div className="mb-6 p-4 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-700 mb-2">
                              Ao finalizar a compra, você receberá o boleto bancário para pagamento.
                            </p>
                            <p className="text-sm text-gray-700">
                              O prazo de entrega será contado a partir da confirmação do pagamento.
                            </p>
                          </div>
                        )}
                        
                        {paymentMethod === 'pix' && (
                          <div className="mb-6 p-4 bg-gray-50 rounded-md">
                            <p className="text-sm text-gray-700 mb-2">
                              Ao finalizar a compra, você receberá um QR Code para pagamento via PIX.
                            </p>
                            <p className="text-sm text-gray-700">
                              O pagamento é processado instantaneamente e o prazo de entrega começa a contar imediatamente.
                            </p>
                          </div>
                        )}
                        
                        <div className="mb-6">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="receiveOffers"
                              checked={formData.receiveOffers}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Quero receber ofertas e novidades por e-mail
                            </span>
                          </label>
                        </div>
                        
                        <div className="flex justify-between">
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                          >
                            Voltar para entrega
                          </button>
                          <button
                            type="button"
                            onClick={handleNextStep}
                            className="bg-pink-600 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-700 transition"
                          >
                            Revisar pedido
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Etapa 3: Confirmação do pedido */}
                    {activeStep === 3 && (
                      <div>
                        <h2 className="text-lg font-medium mb-4">Revisar e finalizar pedido</h2>
                        
                        <div className="mb-6">
                          <h3 className="text-sm font-semibold mb-3">Itens do pedido</h3>
                          <div className="space-y-4">
                            {cartItems.map((item) => (
                              <div key={item.id} className="flex items-start">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-16 h-16 object-cover rounded-md"
                                />
                                <div className="ml-4 flex-1">
                                  <h4 className="text-sm font-medium">{item.name}</h4>
                                  <p className="text-xs text-gray-500 mt-1">
                                    Tamanho: {item.size} | Cor: {item.color} | Qtd: {item.quantity}
                                  </p>
                                  <div className="flex items-center mt-1">
                                    <span className="text-sm font-medium">
                                      R$ {item.price.toFixed(2)}
                                    </span>
                                    {item.originalPrice > item.price && (
                                      <span className="ml-2 text-xs text-gray-500 line-through">
                                        R$ {item.originalPrice.toFixed(2)}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h3 className="text-sm font-semibold mb-2">Endereço de entrega</h3>
                            <div className="bg-gray-50 p-3 rounded-md text-sm">
                              <p className="font-medium">{formData.name}</p>
                              <p>{formData.address}, {formData.number}</p>
                              {formData.complement && <p>{formData.complement}</p>}
                              <p>{formData.neighborhood} - {formData.city}/{formData.state}</p>
                              <p>CEP: {formData.zipCode}</p>
                              <p>Telefone: {formData.phone}</p>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-sm font-semibold mb-2">Método de pagamento</h3>
                            <div className="bg-gray-50 p-3 rounded-md text-sm">
                              {paymentMethod === 'credit' && (
                                <>
                                  <p className="font-medium">Cartão de Crédito</p>
                                  <p>Cartão terminado em {formData.cardNumber.slice(-4)}</p>
                                  <p>Titular: {formData.cardName}</p>
                                </>
                              )}
                              {paymentMethod === 'boleto' && (
                                <p className="font-medium">Boleto Bancário</p>
                              )}
                              {paymentMethod === 'pix' && (
                                <p className="font-medium">PIX</p>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="bg-gray-50 p-4 rounded-md">
                            <div className="space-y-2">
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
                          </div>
                        </div>
                        
                        <div className="flex justify-between">
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                          >
                            Voltar para pagamento
                          </button>
                          <button
                            type="submit"
                            className="bg-pink-600 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-700 transition"
                          >
                            Finalizar compra
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
              
              {/* Resumo do pedido */}
              <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 sticky top-4">
                  <h2 className="text-lg font-medium mb-4">Resumo do pedido</h2>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">
                      {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'} no carrinho
                    </div>
                    <div className="max-h-48 overflow-y-auto mb-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center py-2 border-b border-gray-100 last:border-b-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-12 h-12 object-cover rounded"
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
                  </div>
                  
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
                  
                  <div className="text-xs text-gray-500 text-center">
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

export default CheckoutPage;
