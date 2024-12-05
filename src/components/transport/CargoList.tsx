import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MapPin, Calendar, Package, DollarSign, ChevronRight } from 'lucide-react';
import { Cargo } from '../../types/transport';

interface CargoListProps {
  cargos: Cargo[];
  onCargoSelect: (cargoId: string) => void;
  onViewDetails: (cargo: Cargo) => void;
}

const CargoList: React.FC<CargoListProps> = ({ cargos, onCargoSelect, onViewDetails }) => {
  return (
    <div className="h-full overflow-y-auto bg-white">
      <div className="sticky top-0 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Cargas Disponíveis</h2>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Buscar cargas..."
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
          />
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {cargos.map((cargo) => (
          <div
            key={cargo.id}
            className="cursor-pointer p-4 hover:bg-gray-50"
            onClick={() => onCargoSelect(cargo.id)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="font-medium text-gray-900">{cargo.origin.name}</span>
                </div>
                <div className="mt-1 flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="font-medium text-gray-900">{cargo.destination.name}</span>
                </div>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {format(new Date(cargo.availableDate), "dd 'de' MMMM", { locale: ptBR })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Package className="h-4 w-4" />
                    <span>{cargo.weight}t</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4" />
                    <span>R$ {cargo.estimatedPrice.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(cargo);
                }}
                className="ml-4 flex items-center text-green-600 hover:text-green-700"
              >
                <span className="text-sm font-medium">Detalhes</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CargoList;