import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: [],
    gender: [],
    state: []
  });
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    // Simulando carregamento de produtos
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Simulando delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dados mockados de produtos
        const mockProducts = [
          {
            id: 1,
            name: 'Tênis Nike Revolution 6 Next Nature Masculino',
            price: 219.90,
            originalPrice: 349.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop",
            category: 'Tênis',
            gender: 'Masculino',
            state: 'Novo'
          },
          {
            id: 2,
            name: 'Tênis Adidas Ultraboost 22',
            price: 299.90,
            originalPrice: 429.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300"/assets/produc-image-2.jpeg"h=200"/assets/produc-image-2.jpeg"fit=crop",
            category: 'Tênis',
            gender: 'Unissex',
            state: 'Novo'
          },
          {
            id: 3,
            name: 'Tênis Puma Smash V2',
            price: 189.90,
            originalPrice: 269.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300"/assets/produc-image-3.jpeg"h=200"/assets/produc-image-3.jpeg"fit=crop",
            category: 'Tênis',
            gender: 'Masculino',
            state: 'Novo'
          },
          {
            id: 4,
            name: 'Tênis New Balance 373',
            price: 249.90,
            originalPrice: 359.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300"/assets/produc-image-4.jpeg"h=200"/assets/produc-image-4.jpeg"fit=crop",
            category: 'Tênis',
            gender: 'Feminino',
            state: 'Novo'
          },
          {
            id: 5,
            name: 'Tênis Vans Old Skool',
            price: 279.90,
            originalPrice: 399.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300"/assets/produc-image-5.jpeg"h=200"/assets/produc-image-5.jpeg"fit=crop",
            category: 'Tênis',
            gender: 'Unissex',
            state: 'Novo'
          },
          {
            id: 6,
            name: 'Camiseta Nike Dri-FIT',
            price: 89.90,
            originalPrice: 129.90,
            discount: 30,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"/assets/produc-image-1.jpeg"h=200"/assets/produc-image-1.jpeg"fit=crop",
            category: 'Camisetas',
            gender: 'Masculino',
            state: 'Novo'
          },
          {
            id: 7,
            name: 'Calça Adidas Essentials',
            price: 149.90,
            originalPrice: 199.90,
            discount: 25,
            image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300"/assets/produc-image-2.jpeg"h=200"/assets/produc-image-2.jpeg"fit=crop",
            category: 'Calças',
            gender: 'Masculino',
            state: 'Novo'
          },
          {
            id: 8,
            name: 'Boné Nike Sportswear Heritage 86',
            price: 79.90,
            originalPrice: 119.90,
            discount: 33,
            image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300"/assets/produc-image-3.jpeg"h=200"/assets/produc-image-3.jpeg"fit=crop",
            category: 'Bonés',
            gender: 'Unissex',
            state: 'Novo'
          },
          {
            id: 9,
            name: 'Headphone JBL Tune 510BT',
            price: 199.90,
            originalPrice: 299.90,
            discount: 33,
            image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300"/assets/produc-image-4.jpeg"h=200"/assets/produc-image-4.jpeg"fit=crop",
            category: 'Headphones',
            gender: 'Unissex',
            state: 'Novo'
          }
        ];
        
        setProducts(mockProducts);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleFilter = (type, value) => {
    setFilters(prev => {
      const updated = { ...prev };
      if (updated[type].includes(value)) {
        updated[type] = updated[type].filter(item => item !== value);
      } else {
        updated[type] = [...updated[type], value];
      }
      return updated;
    });
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      gender: [],
      state: []
    });
  };

  const toggleMobileFilters = () => {
    setShowFilters(!showFilters);
  };

  // Aplicar filtros aos produtos
  const filteredProducts = products.filter(product => {
    const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
    const genderMatch = filters.gender.length === 0 || filters.gender.includes(product.gender);
    const stateMatch = filters.state.length === 0 || filters.state.includes(product.state);
    return categoryMatch && genderMatch && stateMatch;
  });

  // Ordenar produtos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'discount':
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

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
                <span className="text-gray-700">Produtos</span>
              </li>
            </ol>
          </nav>

          {/* Título mobile e botão de filtro */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h1 className="text-xl font-bold">Produtos</h1>
            <button 
              onClick={toggleMobileFilters}
              className="bg-gray-200 p-2 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filtros - Versão mobile */}
            {showFilters && (
              <div className="md:hidden bg-white rounded-lg shadow-sm p-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Filtros</h2>
                  <button 
                    onClick={toggleMobileFilters}
                    className="text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Filtro por categoria */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">Categoria</h3>
                  <div className="space-y-2">
                    {['Tênis', 'Camisetas', 'Calças', 'Bonés', 'Headphones'].map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro por gênero */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">Gênero</h3>
                  <div className="space-y-2">
                    {['Masculino', 'Feminino', 'Unissex'].map((gender) => (
                      <label key={gender} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.gender.includes(gender)}
                          onChange={() => toggleFilter('gender', gender)}
                          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{gender}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro por estado */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">Estado</h3>
                  <div className="space-y-2">
                    {['Novo', 'Usado'].map((state) => (
                      <label key={state} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.state.includes(state)}
                          onChange={() => toggleFilter('state', state)}
                          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{state}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={clearFilters}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Limpar filtros
                </button>
              </div>
            )}

            {/* Filtros - Versão desktop */}
            <div className="hidden md:block md:w-1/4 lg:w-1/5">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Filtros</h2>

                {/* Filtro por categoria */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">Categoria</h3>
                  <div className="space-y-2">
                    {['Tênis', 'Camisetas', 'Calças', 'Bonés', 'Headphones'].map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.category.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro por gênero */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">Gênero</h3>
                  <div className="space-y-2">
                    {['Masculino', 'Feminino', 'Unissex'].map((gender) => (
                      <label key={gender} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.gender.includes(gender)}
                          onChange={() => toggleFilter('gender', gender)}
                          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{gender}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro por estado */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">Estado</h3>
                  <div className="space-y-2">
                    {['Novo', 'Usado'].map((state) => (
                      <label key={state} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.state.includes(state)}
                          onChange={() => toggleFilter('state', state)}
                          className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{state}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={clearFilters}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Limpar filtros
                </button>
              </div>
            </div>

            {/* Lista de produtos */}
            <div className="w-full md:w-3/4 lg:w-4/5">
              {/* Cabeçalho da lista */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <h1 className="text-xl font-bold mb-2 md:mb-0 hidden md:block">Produtos</h1>
                
                <div className="w-full md:w-auto flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                  <div className="w-full md:w-auto">
                    <label htmlFor="sort" className="sr-only">Ordenar por</label>
                    <select
                      id="sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="relevance">Relevância</option>
                      <option value="price-asc">Menor preço</option>
                      <option value="price-desc">Maior preço</option>
                      <option value="name-asc">A-Z</option>
                      <option value="name-desc">Z-A</option>
                      <option value="discount">Maior desconto</option>
                    </select>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    {sortedProducts.length} {sortedProducts.length === 1 ? 'produto' : 'produtos'} encontrados
                  </p>
                </div>
              </div>

              {/* Grid de produtos */}
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600"></div>
                </div>
              ) : sortedProducts.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <h2 className="text-xl font-medium mb-2">Nenhum produto encontrado</h2>
                  <p className="text-gray-600 mb-6">Tente ajustar seus filtros para encontrar o que procura.</p>
                  <button
                    onClick={clearFilters}
                    className="bg-pink-600 text-white px-6 py-3 rounded-md font-medium hover:bg-pink-700 transition"
                  >
                    Limpar filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sortedProducts.map((product) => (
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
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductListPage;
