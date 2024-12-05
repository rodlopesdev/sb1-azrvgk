import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedBanner: React.FC = () => {
  return (
    <div className="relative bg-green-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Feira de Máquinas Agrícolas
            </h1>
            <p className="mt-4 text-lg text-green-100">
              Aproveite descontos especiais em tratores, colheitadeiras e implementos agrícolas.
              Condições exclusivas de financiamento.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-50">
                Ver Ofertas
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1592878040763-c48e774be90c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Trator agrícola"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;