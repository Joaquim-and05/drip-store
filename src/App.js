import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ProductListPage from './pages/ProductList/ProductListPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmation/OrderConfirmationPage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import MyOrdersPage from './pages/MyOrders/MyOrdersPage';
import './index.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dados mockados para garantir funcionamento mesmo sem backend
    const mockProducts = [
      {
        image: "https://via.placeholder.com/300x200/FF1493/FFFFFF?text=Nike+Revolution",
image: "https://via.placeholder.com/300x200/4169E1/FFFFFF?text=Adidas+Ultra",
image: "https://via.placeholder.com/300x200/32CD32/FFFFFF?text=K-Swiss+V8",
image: "https://via.placeholder.com/300x200/FF4500/FFFFFF?text=New+Balance",
image: "https://via.placeholder.com/300x200/9932CC/FFFFFF?text=Vans+Old",

      }
    ];

    setProducts(mockProducts);
    setLoading(false);
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage products={products} loading={loading} />} />
        <Route path="/products" element={<ProductListPage products={products} loading={loading} />} />
        <Route path="/product/:id" element={<ProductDetailPage products={products} loading={loading} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

