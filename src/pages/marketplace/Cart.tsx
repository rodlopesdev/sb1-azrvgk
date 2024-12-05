import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <ShoppingBag className="h-16 w-16 text-gray-400" />
        <h2 className="mt-4 text-lg font-medium text-gray-900">Seu carrinho está vazio</h2>
        <p className="mt-2 text-sm text-gray-500">
          Adicione produtos ao seu carrinho para continuar comprando
        </p>
        <Link
          to="/marketplace"
          className="mt-6 inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Carrinho de Compras</h1>
          <button
            onClick={() => navigate('/marketplace')}
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-green-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continuar Comprando
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center space-x-4 rounded-lg border border-gray-200 bg-white p-4"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-24 w-24 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{item.product.category}</p>
                    <div className="mt-2 flex items-center space-x-4">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.product.id, parseInt(e.target.value))
                        }
                        className="rounded-md border border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium text-gray-900">
                      R$ {(item.product.price * item.quantity).toLocaleString('pt-BR')}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-sm text-gray-500">
                        R$ {item.product.price.toLocaleString('pt-BR')} cada
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-medium text-gray-900">Resumo do Pedido</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <p className="text-base font-medium text-gray-900">Total</p>
                  <p className="text-xl font-bold text-gray-900">
                    R$ {totalPrice.toLocaleString('pt-BR')}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => navigate('/marketplace/checkout')}
                className="mt-6 w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;