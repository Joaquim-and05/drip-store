import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulando login
    setTimeout(() => {
      setLoading(false);
      // Redirecionamento seria feito aqui após login bem-sucedido
      console.log('Login com:', email, password);
    }, 1000);
  };

  return (
    <>
      <Header />
      <div className="bg-purple-100 min-h-screen py-8 px-4 md:px-0 flex flex-col md:flex-row">
        {/* Conteúdo principal */}
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          {/* Formulário de login */}
          <div className="w-full md:w-1/2 bg-white p-6 md:p-10 rounded-lg shadow-sm mb-8 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Acessar minha conta</h1>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail / Login</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Insira seu email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Insira sua senha"
                  required
                />
              </div>
              
              <div className="flex justify-between items-center">
                <Link to="/forgot-password" className="text-sm text-pink-600 hover:text-pink-700">
                  Esqueci minha senha
                </Link>
              </div>
              
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition font-medium flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : null}
                Acessar Conta
              </button>
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
                Novo cliente? Então registre-se{' '}
                <Link to="/register" className="text-pink-600 hover:text-pink-700 font-medium">
                  aqui
                </Link>
              </p>
            </div>
          </div>
          
          {/* Imagem lateral - escondida em mobile */}
          <div className="hidden md:block md:w-1/2 md:pl-10">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop"
              alt="Tênis"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
