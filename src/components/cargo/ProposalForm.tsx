import React, { useState } from 'react';
import { Calendar, DollarSign, FileText } from 'lucide-react';

interface ProposalFormProps {
  onSubmit: (proposal: {
    price: number;
    deliveryDate: string;
    conditions: string;
  }) => void;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ onSubmit }) => {
  const [price, setPrice] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [conditions, setConditions] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (price && deliveryDate && conditions) {
      onSubmit({
        price: Number(price),
        deliveryDate,
        conditions,
      });
      setPrice('');
      setDeliveryDate('');
      setConditions('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label htmlFor="price" className="mb-2 block text-sm font-medium text-gray-700">
          Valor da Proposta (R$)
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 pl-10 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
            placeholder="Digite o valor"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="deliveryDate" className="mb-2 block text-sm font-medium text-gray-700">
          Data de Entrega
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            id="deliveryDate"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 pl-10 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="conditions" className="mb-2 block text-sm font-medium text-gray-700">
          Condições e Observações
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute left-3 top-3">
            <FileText className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="conditions"
            value={conditions}
            onChange={(e) => setConditions(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 pl-10 py-2 focus:border-green-500 focus:outline-none focus:ring-green-500"
            rows={3}
            placeholder="Descreva as condições da sua proposta"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
      >
        Enviar Proposta
      </button>
    </form>
  );
};

export default ProposalForm;