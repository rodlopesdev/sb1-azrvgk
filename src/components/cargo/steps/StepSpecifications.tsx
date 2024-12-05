import React from 'react';
import { Package, Truck, Ruler } from 'lucide-react';
import { Cargo } from '../../../types/transport';

interface StepSpecificationsProps {
  formData: Partial<Cargo>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepSpecifications: React.FC<StepSpecificationsProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="weight" className="mb-2 block text-sm font-medium text-gray-700">
          Peso da Carga (toneladas)
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Package className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight || ''}
            onChange={onChange}
            className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-green-500"
            placeholder="Digite o peso em toneladas"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="transportType" className="mb-2 block text-sm font-medium text-gray-700">
          Tipo de Transporte
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Truck className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="transportType"
            name="specifications.transportType"
            value={formData.specifications?.transportType || ''}
            onChange={onChange}
            className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-green-500"
            placeholder="Ex: Carreta Graneleira"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="dimensions" className="mb-2 block text-sm font-medium text-gray-700">
          Dimensões
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Ruler className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="dimensions"
            name="specifications.dimensions"
            value={formData.specifications?.dimensions || ''}
            onChange={onChange}
            className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-green-500"
            placeholder="Ex: 12m x 2.6m x 2.8m"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default StepSpecifications;