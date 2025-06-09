import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Simulando carregamento de detalhes do produto
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        // Simulando delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dados mockados do produto
        const mockProduct = {
          id: parseInt(id),
          name: 'Tênis Nike Revolution 6 Next Nature Masculino',
          price: 219.90,
          originalPrice: 349.90,
          discount: 30,
          images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300"/assets/produc-image-2.jpeg"h=200"/assets/produc-image-2.jpeg"fit=crop",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300"/assets/produc-image-3.jpeg"h=200"/assets/produc-image-3.jpeg"fit=crop",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300"/assets/produc-image-4.jpeg"h=200"/assets/produc-image-4.jpeg"fit=crop"
          ],
          category: 'Tênis',
          gender: 'Masculino',
          state: 'Novo',
          description: 'O Nike Revolution 6 Next Nature proporciona conforto a cada passo. Ele é leve, flexível e tem amortecimento macio para você se movimentar com naturalidade. Feito com pelo menos 20% de conteúdo reciclado por peso, este tênis representa mais um passo em nossa jornada em direção ao carbono zero e ao desperdício zero.',
          sizes: ['38', '39', '40', '41', '42', '43'],
          colors: ['Preto', 'Branco', 'Cinza', 'Azul'],
          rating: 4.5,
          reviewCount: 127
        };
        
        setProduct(mockProduct);
        
        // Dados mockados de produtos relacionados
        const mockRelatedProducts = [
          {
            id: 2,
            name: 'Tênis Adidas Ultraboost 22',
            price: 299.90,
            originalPrice: 429.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300"/assets/produc-image-2.jpeg"h=200"/assets/produc-image-2.jpeg"fit=crop",
            category: 'Tênis'
          },
          {
            id: 3,
            name: 'Tênis Puma Smash V2',
            price: 189.90,
            originalPrice: 269.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300"/assets/produc-image-3.jpeg"h=200"/assets/produc-image-3.jpeg"fit=crop",
            category: 'Tênis'
          },
          {
            id: 4,
            name: 'Tênis New Balance 373',
            price: 249.90,
            originalPrice: 359.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300"/assets/produc-image-4.jpeg"h=200"/assets/produc-image-4.jpeg"fit=crop",
            category: 'Tênis'
          }
        ];
        
        setRelatedProducts(mockRelatedProducts);
      } catch (error) {
        console.error('Erro ao carregar detalhes do produto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    // Implementação futura: adicionar ao carrinho
    console.log('Adicionar ao carrinho:', {
      product,
      quantity,
      selectedSize,
      selectedColor
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Renderizar estrelas de avaliação
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 .3l2.457 6.267 6.543.953-4.75 4.638 1.12 6.542L10 15.3l-5.37 3.4 1.12-6.542L1 7.52l6.543-.953L10 .3z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M10 .3v15l-5.37 3.4 1.12-6.542L1 7.52l6.543-.953L10 .3z" clipRule="evenodd" fill="gray" />
        </svg>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
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
              <li className="flex items-center">
                <Link to="/products" className="text-gray-500 hover:text-pink-600">Produtos</Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-700">Detalhes do Produto</span>
              </li>
            </ol>
          </nav>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
            </div>
          ) : product ? (
            <>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                <div className="flex flex-col md:flex-row">
                  {/* Galeria de imagens */}
                  <div className="w-full md:w-1/2 p-4 md:p-6">
                    <div className="relative mb-4 h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                      {product.discount > 0 && (
                        <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.discount}% OFF
                        </div>
                      )}
                    </div>
                    
                    {/* Miniaturas */}
                    <div className="grid grid-cols-4 gap-2">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`h-16 md:h-20 bg-gray-100 rounded-md overflow-hidden ${
                            selectedImage === index ? 'ring-2 ring-pink-600' : ''
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} - Imagem ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Informações do produto */}
                  <div className="w-full md:w-1/2 p-4 md:p-6 border-t md:border-t-0 md:border-l border-gray-200">
                    <div className="mb-2 flex items-center">
                      <span className="text-sm text-gray-500">{product.category}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{product.gender}</span>
                    </div>
                    
                    <h1 className="text-xl md:text-2xl font-bold mb-2">{product.name}</h1>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-2">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm text-gray-500">({product.reviewCount} avaliações)</span>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">
                          R$ {product.price.toFixed(2)}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            R$ {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {product.discount > 0 && (
                        <p className="text-sm text-green-600 mt-1">
                          Economize R$ {(product.originalPrice - product.price).toFixed(2)} ({product.discount}% de desconto)
                        </p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-sm font-semibold mb-2">Descrição</h2>
                      <p className="text-sm text-gray-700">{product.description}</p>
                    </div>
                    
                    {/* Seleção de tamanho */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-sm font-semibold">Tamanho</h2>
                        <Link to="/size-guide" className="text-xs text-pink-600 hover:text-pink-700">
                          Guia de tamanhos
                        </Link>
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`py-2 border rounded-md text-sm font-medium transition ${
                              selectedSize === size
                                ? 'border-pink-600 bg-pink-50 text-pink-600'
                                : 'border-gray-300 text-gray-700 hover:border-gray-400'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Seleção de cor */}
                    <div className="mb-6">
                      <h2 className="text-sm font-semibold mb-2">Cor</h2>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`px-3 py-1 border rounded-md text-sm font-medium transition ${
                              selectedColor === color
                                ? 'border-pink-600 bg-pink-50 text-pink-600'
                                : 'border-gray-300 text-gray-700 hover:border-gray-400'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Quantidade e botão de adicionar ao carrinho */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={decreaseQuantity}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="px-4 py-2 text-gray-900 font-medium">{quantity}</span>
                        <button
                          onClick={increaseQuantity}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                      
                      <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-pink-600 text-white py-2 px-4 rounded-md font-medium hover:bg-pink-700 transition flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Adicionar ao carrinho
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Produtos relacionados */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Produtos relacionados</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {relatedProducts.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className="group">
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {product.discount > 0 && (
                            <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                              {product.discount}% OFF
                            </div>
                          )}
                        </div>
                        <div className="p-3 md:p-4 flex-grow flex flex-col">
                          <h3 className="text-sm md:text-base font-medium mb-1 line-clamp-2 group-hover:text-pink-600 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-500 text-xs mb-2">{product.category}</p>
                          <div className="mt-auto flex items-center">
                            <span className="text-sm md:text-base font-bold text-gray-900">
                              R$ {product.price.toFixed(2)}
                            </span>
                            {product.originalPrice > product.price && (
                              <span className="ml-2 text-xs md:text-sm text-gray-500 line-through">
                                R$ {product.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h2 className="text-xl font-medium mb-2">Produto não encontrado</h2>
              <p className="text-gray-600 mb-6">O produto que você está procurando não existe ou foi removido.</p>
              <Link
                to="/products"
                className="bg-pink-600 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-700 transition"
              >
                Ver todos os produtos
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
