import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [collections, setCollections] = useState([]);

  // Dados mockados para o carrossel
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
      title: 'Air Jordan edição especial',
      subtitle: 'Desconto de 30% em toda linha',
      buttonText: 'Ver ofertas',
      buttonLink: '/products'
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=400&fit=crop",
      title: 'Nova coleção Nike',
      subtitle: 'Lançamentos exclusivos',
      buttonText: 'Conferir',
      buttonLink: '/products'
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&h=400&fit=crop",
      title: 'Adidas Originals',
      subtitle: 'Estilo clássico com toque moderno',
      buttonText: 'Explorar',
      buttonLink: '/products'
    }
  ];

  // Categorias em destaque
  const categories = [
    { id: 1, name: 'Camisetas', icon: '👕', link: '/products?category=camisetas' },
    { id: 2, name: 'Calças', icon: '👖', link: '/products?category=calcas' },
    { id: 3, name: 'Bonés', icon: '🧢', link: '/products?category=bones' },
    { id: 4, name: 'Headphones', icon: '🎧', link: '/products?category=headphones' },
    { id: 5, name: 'Tênis', icon: '👟', link: '/products?category=tenis' }
  ];

  useEffect(() => {
    // Simulando carregamento de dados
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulando delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dados mockados de produtos em destaque
        const mockFeaturedProducts = [
          {
            id: 1,
            name: 'Tênis Nike Revolution 6 Next Nature Masculino',
            price: 219.90,
            originalPrice: 349.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
            category: 'Tênis',
          },
          {
            id: 2,
            name: 'Tênis Adidas Ultraboost 22',
            price: 299.90,
            originalPrice: 429.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop",
            category: 'Tênis',
          },
          {
            id: 3,
            name: 'Tênis Puma Smash V2',
            price: 189.90,
            originalPrice: 269.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=200&fit=crop",
            category: 'Tênis',
          },
          {
            id: 4,
            name: 'Tênis New Balance 373',
            price: 249.90,
            originalPrice: 359.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=200&fit=crop",
            category: 'Tênis',
          }
        ];
        
        // Dados mockados de coleções em destaque
        const mockCollections = [
          {
            id: 1,
            name: 'Novo drop Supreme',
            discount: 30,
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
            link: '/products?collection=supreme'
          },
          {
            id: 2,
            name: 'Coleção Adidas',
            discount: 30,
            image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=300&fit=crop",
            link: '/products?collection=adidas'
          },
          {
            id: 3,
            name: 'Novo Beats Bass',
            discount: 30,
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=300&fit=crop",
            link: '/products?collection=beats'
          }
        ];
        
        setFeaturedProducts(mockFeaturedProducts);
        setCollections(mockCollections);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Configurar carrossel automático
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Carousel */}
        <section className="relative overflow-hidden">
          <div className="relative h-[300px] md:h-[500px] bg-gray-900">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16">
                  <div className="max-w-xl text-white">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{slide.title}</h1>
                    <p className="text-lg md:text-xl mb-4 md:mb-8">{slide.subtitle}</p>
                    <Link
                      to={slide.buttonLink}
                      className="inline-block bg-pink-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium hover:bg-pink-700 transition"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 md:py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Categorias em destaque</h2>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={category.link}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="text-3xl mb-2">{category.icon}</span>
                  <span className="text-sm md:text-base font-medium text-center">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-8 md:py-12 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Produtos em destaque</h2>
            
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {featuredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-40 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.discount > 0 && (
                          <div className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                            {product.discount}% OFF
                          </div>
                        )}
                      </div>
                      <div className="p-3 md:p-4">
                        <h3 className="text-sm md:text-base font-medium mb-1 line-clamp-2 group-hover:text-pink-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-xs mb-2">{product.category}</p>
                        <div className="flex items-center">
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
            )}
            
            <div className="mt-8 text-center">
              <Link
                to="/products"
                className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md font-medium hover:bg-pink-700 transition"
              >
                Ver todos os produtos
              </Link>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-8 md:py-12 px-4">
          <div className="container mx-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Coleções em destaque</h2>
            
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {collections.map((collection) => (
                  <Link key={collection.id} to={collection.link} className="group">
                    <div className="relative rounded-lg overflow-hidden h-48 md:h-64">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 md:p-6">
                        <h3 className="text-white text-lg md:text-xl font-bold mb-1">{collection.name}</h3>
                        {collection.discount > 0 && (
                          <span className="inline-block bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                            {collection.discount}% OFF
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Sale Banner */}
        <section className="py-8 md:py-12 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-pink-600 to-pink-500 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
                <div className="text-white mb-6 md:mb-0 text-center md:text-left">
                  <h2 className="text-xl md:text-3xl font-bold mb-2">Queima de estoque Nike 🔥</h2>
                  <p className="text-white/80 mb-4 max-w-md">
                    Aproveite descontos de até 50% em produtos selecionados. Promoção por tempo limitado!
                  </p>
                  <Link
                    to="/products?sale=nike"
                    className="inline-block bg-white text-pink-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition"
                  >
                    Ver ofertas
                  </Link>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop"
                  alt="Tênis Nike em promoção"
                  className="w-40 md:w-60 h-32 md:h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

