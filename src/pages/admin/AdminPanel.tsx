import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCargoList } from '../../hooks/useCargoList';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import CargoFormDialog from '../../components/cargo/CargoFormDialog';
import ConfirmationDialog from '../../components/common/ConfirmationDialog';

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const { cargos, loading, error, deleteCargo } = useCargoList();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    open: boolean;
    cargoId?: string;
  }>({ open: false });

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

  const handleDeleteClick = (cargoId: string) => {
    setDeleteConfirmation({ open: true, cargoId });
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmation.cargoId) {
      deleteCargo(deleteConfirmation.cargoId);
    }
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Cargas</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          <Plus className="mr-2 h-4 w-4" />
          Nova Carga
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Origem
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Destino
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Peso
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Valor
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {cargos.map((cargo) => (
              <tr key={cargo.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                  {cargo.id}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {cargo.origin.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {cargo.destination.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      cargo.status === 'available'
                        ? 'bg-green-100 text-green-800'
                        : cargo.status === 'in_transit'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {cargo.status === 'available'
                      ? 'Disponível'
                      : cargo.status === 'in_transit'
                      ? 'Em Trânsito'
                      : 'Concluída'}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {cargo.weight}t
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  R$ {cargo.estimatedPrice.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                  <button
                    onClick={() => navigate(`/cargo/${cargo.id}`)}
                    className="mr-3 text-blue-600 hover:text-blue-900"
                    title="Ver detalhes"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {}}
                    className="mr-3 text-green-600 hover:text-green-900"
                    title="Editar"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(cargo.id)}
                    className="text-red-600 hover:text-red-900"
                    title="Excluir"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CargoFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
      
      <ConfirmationDialog
        open={deleteConfirmation.open}
        onOpenChange={(open) => setDeleteConfirmation({ open, cargoId: undefined })}
        onConfirm={handleConfirmDelete}
        title="Excluir Carga"
        description="Tem certeza que deseja excluir esta carga? Esta ação não pode ser desfeita."
        confirmText="Excluir"
        cancelText="Cancelar"
        variant="danger"
      />
    </div>
  );
};

export default AdminPanel;