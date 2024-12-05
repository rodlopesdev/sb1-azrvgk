import React from 'react';
import { Package, TrendingUp, Users, DollarSign } from 'lucide-react';

const stats = [
  { name: 'Cargas Ativas', value: '12', icon: Package, change: '+2.5%', changeType: 'increase' },
  { name: 'Motoristas', value: '48', icon: Users, change: '+10%', changeType: 'increase' },
  { name: 'Taxa de Entrega', value: '98.5%', icon: TrendingUp, change: '+4.75%', changeType: 'increase' },
  { name: 'Receita Mensal', value: 'R$ 125.000', icon: DollarSign, change: '+15.3%', changeType: 'increase' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Painel de Controle</h1>
        <p className="mt-1 text-sm text-gray-500">
          Visão geral das suas operações de transporte
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <div
                className={`inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium ${
                  stat.changeType === 'increase'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
};

export default Dashboard;