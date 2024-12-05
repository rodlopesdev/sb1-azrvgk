import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { useProduct } from '../../hooks/useProduct';
import { useCart } from '../../contexts/CartContext';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ProductImageGallery from '../../components/marketplace/ProductImageGallery';
import RelatedProducts from '../../components/marketplace/RelatedProducts';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      navigate('/marketplace/cart');
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <p className="mb-4 text-lg text-gray-600">{error || 'Produto não encontrado'}</p>
        <button
          onClick={() => navigate('/marketplace')}
          className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o Marketplace
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate('/marketplace')}
          className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 hover:text-green-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o Marketplace
        </button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <ProductImageGallery images={[product.image]} />

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{product.name}</h1>
              <div className="mt-2 flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                </div>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm text-gray-600">{product.stock} em estoque</span>
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900">
                    R$ {product.price.toLocaleString('pt-BR')}
                  </p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      R$ {product.oldPrice.toLocaleString('pt-BR')}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <button className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
                    <Heart className="h-6 w-6" />
                  </button>
                  <button className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
                    <Share2 className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                  Quantidade:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="rounded-lg border border-gray-300 py-2 pl-3 pr-10 focus:border-green-500 focus:outline-none focus:ring-green-500"
                >
                  {[...Array(Math.min(10, product.stock))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full rounded-lg bg-green-600 px-8 py-3 text-center text-sm font-medium text-white hover:bg-green-700"
              >
                <ShoppingCart className="mr-2 inline-block h-5 w-5" />
                Adicionar ao Carrinho
              </button>
            </div>

            <div className="space-y-4 rounded-lg bg-gray-50 p-6">
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-gray-400" />
                <p className="text-sm text-gray-600">
                  Entrega grátis para compras acima de R$ 5.000
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-gray-400" />
                <p className="text-sm text-gray-600">
                  Garantia de 12 meses direto com o fabricante
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Descrição</h3>
              <div className="mt-4 space-y-4 text-sm text-gray-600">
                <p>{product.description}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Fornecedor</h3>
              <div className="mt-4 flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-200" />
                <div>
                  <p className="font-medium text-gray-900">{product.supplier.name}</p>
                  <div className="mt-1 flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">
                      {product.supplier.rating} de avaliação
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
    </div>
  );
};

export default ProductDetails;