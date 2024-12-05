import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types/marketplace';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <Link to={`/marketplace/product/${product.id}`} className="block">
      <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button 
            className="absolute right-2 top-2 rounded-full bg-white p-2 text-gray-600 shadow-sm hover:text-red-500"
            onClick={(e) => {
              e.preventDefault();
              // Handle wishlist
            }}
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-gray-900">
                R$ {product.price.toLocaleString('pt-BR')}
              </p>
              {product.oldPrice && (
                <p className="text-sm text-gray-500 line-through">
                  R$ {product.oldPrice.toLocaleString('pt-BR')}
                </p>
              )}
            </div>
            <button 
              className="rounded-lg bg-green-600 p-2 text-white hover:bg-green-700"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;