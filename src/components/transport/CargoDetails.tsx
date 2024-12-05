import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { X, Phone, Package, Truck, Clock, MapPin } from 'lucide-react';
import { Cargo } from '../../types/transport';
import * as Dialog from '@radix-ui/react-dialog';

interface CargoDetailsProps {
  cargo: Cargo;
  onClose: () => void;
}

const CargoDetails: React.FC<CargoDetailsProps> = ({ cargo, onClose }) => {
  const navigate = useNavigate();

  const handleAcceptCargo = () => {
    navigate(`/cargo/${cargo.id}`);
  };

  return (
    <Dialog.Root open={true} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[1000]" />
        <Dialog.Content className="fixed inset-y-0 right-0 w-full max-w-md bg-white p-6 shadow-xl z-[1001]">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-xl font-semibold">
                Detalhes da Carga #{cargo.id}
              </Dialog.Title>
              <Dialog.Close className="rounded-full p-1 hover:bg-gray-100">
                <X className="h-5 w-5" />
              </Dialog.Close>
            </div>

            <div className="mt-6 flex-1 space-y-6 overflow-y-auto">
              <div>
                <h3 className="font-medium text-gray-900">Rota</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>Origem: {cargo.origin.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span>Destino: {cargo.destination.name}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Especificações</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-gray-400" />
                    <span>
                      {cargo.weight}t - {cargo.specifications.dimensions}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-gray-400" />
                    <span>{cargo.specifications.transportType}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Prazos</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>
                      Disponível em:{' '}
                      {format(new Date(cargo.availableDate), "dd 'de' MMMM 'de' yyyy", {
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span>Tempo estimado: {cargo.estimatedDeliveryTime}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Contato</h3>
                <div className="mt-2 flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>
                    {cargo.contact.name} - {cargo.contact.phone}
                  </span>
                </div>
              </div>

              {cargo.movementHistory && (
                <div>
                  <h3 className="font-medium text-gray-900">Histórico</h3>
                  <div className="mt-2 space-y-2">
                    {cargo.movementHistory.map((movement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-gray-400" />
                        <div>
                          <p className="text-sm font-medium">{movement.status}</p>
                          <p className="text-sm text-gray-500">
                            {movement.location} -{' '}
                            {format(new Date(movement.timestamp), "dd/MM/yyyy 'às' HH:mm", {
                              locale: ptBR,
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                onClick={onClose}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-50"
              >
                Fechar
              </button>
              <button
                onClick={handleAcceptCargo}
                className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-center font-medium text-white hover:bg-green-700"
              >
                Aceitar Carga
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CargoDetails;