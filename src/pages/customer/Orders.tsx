import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Eye, Search } from 'lucide-react';

const mockOrders = [
  {
    id: '001',
    date: new Date(),
    status: 'delivered',
    total: 1250.0,
    items: [
      { name: 'Trator Agrícola 75CV', quantity: 1 },
      { name: 'Kit Manutenção', quantity: 2 },
    ],
  },
  {
    id: '002',
    date: new Date(),
    status: 'processing',
    total: 850.0,
    items: [
      { name: 'Semente de Soja Certificada', quantity: 3 },
    ],
  },
];

const Orders: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Meus Pedidos</h1>
        <p className="mt-1 text-sm text-gray-500">
          Visualize e acompanhe todos os seus pedidos
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex items-center justify-between">
        <div className="relative flex-1 max-w-lg">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
            placeholder="Buscar pedidos..."
          />
        </div>
        <div className="ml-4">
          <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500">
            <option value="">Todos os status</option>
            <option value="processing">Em processamento</option>
            <option value="shipped">Enviado</option>
            <option value="delivered">Entregue</option>
          </select>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Pedido #{order.id}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {format(order.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
              </div>
              <span
                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  order.status === 'delivered'
                    ? 'bg-green-100 text-green-800'
                    : order.status === 'processing'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {order.status === 'delivered'
                  ? 'Entregue'
                  : order.status === 'processing'
                  ? 'Em processamento'
                  : 'Enviado'}
              </span>
            </div>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.quantity}x {item.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-medium text-gray-900">
                  Total: R$ {order.total.toLocaleString('pt-BR')}
                </span>
                <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <Eye className="mr-2 h-4 w-4" />
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;