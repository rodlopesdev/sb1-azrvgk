import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../../types/marketplace';
import ProductCard from './ProductCard';

interface BestSellersProps {
  products: Product[];
}

const BestSellers: React.FC<BestSellersProps> = ({ products }) => {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Star className="h-6 w-6 text-yellow-400 fill-current" />
          <h2 className="text-2xl font-bold text-gray-900">Mais Vendidos</h2>
        </div>
        <button className="text-sm font-medium text-green-600 hover:text-green-700">
          Ver todos
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;