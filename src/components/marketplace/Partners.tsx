import React from 'react';
import { Building2 } from 'lucide-react';

const partners = [
  {
    id: '1',
    name: 'Agro Máquinas Brasil',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '2',
    name: 'Sementes Premium',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '3',
    name: 'Nutrição do Solo',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: '4',
    name: 'Hidro Agro',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
];

const Partners: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Building2 className="h-6 w-6 text-gray-400" />
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Empresas Parceiras
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="col-span-1 flex justify-center py-8 px-8 grayscale transition-all hover:grayscale-0"
            >
              <img
                className="max-h-12"
                src={partner.logo}
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;