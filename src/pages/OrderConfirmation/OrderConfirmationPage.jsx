import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Simulando carregamento dos detalhes do pedido
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        // Simulando delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dados mockados do pedido
        const mockOrderDetails = {
          orderId: '7234981234',
          date: new Date().toLocaleDateString('pt-BR'),
          status: 'Pedido realizado',
          paymentMethod: 'Cartão de crédito',
          paymentStatus: 'Aprovado',
          shippingAddress: {
            name: 'Francisco Antonio Pereira',
            address: 'Rua João Pessoa, 333',
            complement: 'Apto 101',
            neighborhood: 'Centro',
            city: 'Fortaleza',
            state: 'CE',
            zipCode: '60150-161',
            phone: '(85) 5555-5555'
          },
          items: [
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
          ],
          subtotal: 519.80,
          discount: 260.00,
          shipping: 19.90,
          total: 539.70
        };
        
        setOrderDetails(mockOrderDetails);
      } catch (error) {
        console.error('Erro ao carregar detalhes do pedido:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);

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
              <li className="flex items-center">
                <Link to="/checkout" className="text-gray-500 hover:text-pink-600">Checkout</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Confirmação</span>
              </li>
            </ol>
          </nav>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-8 mb-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-800">Pedido realizado com sucesso!</h1>
                  <p className="text-gray-600 mt-2">
                    Seu pedido #{orderDetails.orderId} foi confirmado.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6 mb-6">
                  <h2 className="text-lg font-medium mb-4">Detalhes do pedido</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Número do pedido:</p>
                      <p className="font-medium">{orderDetails.orderId}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Data:</p>
                      <p className="font-medium">{orderDetails.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Status:</p>
                      <p className="font-medium text-green-600">{orderDetails.status}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Forma de pagamento:</p>
                      <p className="font-medium">{orderDetails.paymentMethod}</p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6 mb-6">
                  <h2 className="text-lg font-medium mb-4">Endereço de entrega</h2>
                  <div className="text-sm">
                    <p className="font-medium">{orderDetails.shippingAddress.name}</p>
                    <p>{orderDetails.shippingAddress.address}, {orderDetails.shippingAddress.complement}</p>
                    <p>{orderDetails.shippingAddress.neighborhood} - {orderDetails.shippingAddress.city}/{orderDetails.shippingAddress.state}</p>
                    <p>CEP: {orderDetails.shippingAddress.zipCode}</p>
                    <p>Telefone: {orderDetails.shippingAddress.phone}</p>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-6 mb-6">
                  <h2 className="text-lg font-medium mb-4">Itens do pedido</h2>
                  <div className="space-y-4">
                    {orderDetails.items.map((item) => (
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

                <div className="mb-6">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>R$ {orderDetails.subtotal.toFixed(2)}</span>
                      </div>
                      {orderDetails.discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Desconto</span>
                          <span>- R$ {orderDetails.discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frete</span>
                        <span>
                          {orderDetails.shipping === 0 ? 'Grátis' : `R$ ${orderDetails.shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 mt-2">
                        <div className="flex justify-between font-bold">
                          <span>Total</span>
                          <span>R$ {orderDetails.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    Você receberá atualizações sobre seu pedido por e-mail.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      to="/my-orders"
                      className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Ver meus pedidos
                    </Link>
                    <Link
                      to="/"
                      className="bg-pink-600 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-700 transition"
                    >
                      Voltar para Home
                    </Link>
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

export default OrderConfirmationPage;
