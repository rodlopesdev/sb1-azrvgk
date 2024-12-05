import React from 'react';
import { Calendar, DollarSign, Clock } from 'lucide-react';
import { Cargo } from '../../../types/transport';

interface StepDeadlinesProps {
  formData: Partial<Cargo>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepDeadlines: React.FC<StepDeadlinesProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="availableDate" className="mb-2 block text-sm font-medium text-gray-700">
          Data Disponível
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            id="availableDate"
            name="availableDate"
            value={formData.availableDate?.split('T')[0] || ''}
            onChange={onChange}
            className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-green-500"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="estimatedPrice" className="mb-2 block text-sm font-medium text-gray-700">
          Valor Estimado (R$)
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            id="estimatedPrice"
            name="estimatedPrice"
            value={formData.estimatedPrice || ''}
            onChange={onChange}
            className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-green-500"
            placeholder="Digite o valor estimado"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="estimatedDeliveryTime" className="mb-2 block text-sm font-medium text-gray-700">
          Tempo Estimado de Entrega
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="estimatedDeliveryTime"
            name="estimatedDeliveryTime"
            value={formData.estimatedDeliveryTime || ''}
            onChange={onChange}
            className="block w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-green-500"
            placeholder="Ex: 3 dias"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default StepDeadlines;