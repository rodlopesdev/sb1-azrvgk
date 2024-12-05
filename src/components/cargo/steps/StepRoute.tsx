import React from 'react';
import { MapPin } from 'lucide-react';
import { Cargo } from '../../../types/transport';

interface StepRouteProps {
  formData: Partial<Cargo>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepRoute: React.FC<StepRouteProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="origin" className="mb-2 block text-sm font-medium text-gray-700">
          Local de Origem
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="origin"
            name="origin.name"
            value={formData.origin?.name || ''}
            onChange={onChange}
            className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-green-500"
            placeholder="Digite o endereço de origem"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="destination" className="mb-2 block text-sm font-medium text-gray-700">
          Local de Destino
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="destination"
            name="destination.name"
            value={formData.destination?.name || ''}
            onChange={onChange}
            className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-green-500"
            placeholder="Digite o endereço de destino"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default StepRoute;