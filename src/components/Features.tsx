import React from 'react';
import { Building2, Truck, ShoppingCart } from 'lucide-react';

const features = [
  {
    name: 'Banco Digital Agro',
    description: 'Conta digital exclusiva com serviços financeiros especializados para o agronegócio.',
    icon: Building2,
  },
  {
    name: 'Logística Inteligente',
    description: 'Sistema completo de roteirização e monitoramento em tempo real de cargas.',
    icon: Truck,
  },
  {
    name: 'Marketplace',
    description: 'Plataforma integrada para compra e venda de insumos, equipamentos e commodities.',
    icon: ShoppingCart,
  },
];

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Tudo em um só lugar</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Soluções completas para o agronegócio
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Integração total entre produtores, transportadores e compradores em uma única plataforma.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-green-600">
                      Saiba mais <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;