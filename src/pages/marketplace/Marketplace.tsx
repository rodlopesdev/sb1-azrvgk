import React from 'react';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import ProductGrid from '../../components/marketplace/ProductGrid';
import CategoryNav from '../../components/marketplace/CategoryNav';
import FeaturedBanner from '../../components/marketplace/FeaturedBanner';
import BestSellers from '../../components/marketplace/BestSellers';
import FeaturedProducts from '../../components/marketplace/FeaturedProducts';
import Partners from '../../components/marketplace/Partners';
import { useProducts } from '../../hooks/useProducts';

const Marketplace: React.FC = () => {
  const { products, loading } = useProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Featured Banner */}
      <FeaturedBanner />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Search and Filters */}
        <div className="py-6">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-lg">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                placeholder="Buscar produtos..."
              />
            </div>
            <button className="ml-4 flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="mr-2 h-5 w-5" />
              Filtros
            </button>
            <button className="ml-4 flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Carrinho (0)
            </button>
          </div>
        </div>

        {/* Categories Navigation */}
        <CategoryNav />

        {/* Best Sellers */}
        <BestSellers products={products} />

        {/* Featured Products */}
        <FeaturedProducts products={products} />

        {/* All Products */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos os Produtos</h2>
          <ProductGrid products={products} loading={loading} />
        </section>
      </div>

      {/* Partners */}
      <Partners />
    </div>
  );
};

export default Marketplace;