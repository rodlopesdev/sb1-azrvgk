import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCargoData } from '../../hooks/useCargoData';
import { useCargoForm } from '../../hooks/useCargoForm';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const CargoForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { cargo, loading, error } = useCargoData(id);
  const { formData, handleChange, handleSubmit, formError } = useCargoForm(cargo, () => {
    navigate('/admin');
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-lg text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        {id ? 'Editar Carga' : 'Nova Carga'}
      </h1>

      {formError && (
        <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-700">{formError}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
              Origem
            </label>
            <input
              type="text"
              id="origin"
              name="origin.name"
              value={formData.origin.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
              Destino
            </label>
            <input
              type="text"
              id="destination"
              name="destination.name"
              value={formData.destination.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
              Peso (toneladas)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="estimatedPrice" className="block text-sm font-medium text-gray-700">
              Valor Estimado (R$)
            </label>
            <input
              type="number"
              id="estimatedPrice"
              name="estimatedPrice"
              value={formData.estimatedPrice}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="transportType" className="block text-sm font-medium text-gray-700">
              Tipo de Transporte
            </label>
            <input
              type="text"
              id="transportType"
              name="specifications.transportType"
              value={formData.specifications.transportType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700">
              Dimensões
            </label>
            <input
              type="text"
              id="dimensions"
              name="specifications.dimensions"
              value={formData.specifications.dimensions}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            {id ? 'Atualizar' : 'Criar'} Carga
          </button>
        </div>
      </form>
    </div>
  );
};

export default CargoForm;