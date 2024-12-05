import React, { useState } from 'react';
import TransportMap from '../components/transport/TransportMap';
import CargoList from '../components/transport/CargoList';
import CargoDetails from '../components/transport/CargoDetails';
import { Cargo } from '../types/transport';

// Mock data for demonstration
const mockCargos: Cargo[] = [
  {
    id: '001',
    status: 'available',
    origin: {
      name: 'São Paulo, SP',
      coordinates: [-23.5505, -46.6333],
    },
    destination: {
      name: 'Cuiabá, MT',
      coordinates: [-15.6014, -56.0979],
    },
    weight: 28.5,
    volume: 90,
    availableDate: '2024-03-20',
    estimatedPrice: 12500,
    contact: {
      name: 'João Silva',
      phone: '(11) 98765-4321',
    },
    specifications: {
      dimensions: '12m x 2.6m x 2.8m',
      transportType: 'Carreta Graneleira',
    },
    estimatedDeliveryTime: '3 dias',
  },
  {
    id: '002',
    status: 'in_transit',
    origin: {
      name: 'Campo Grande, MS',
      coordinates: [-20.4697, -54.6201],
    },
    destination: {
      name: 'Santos, SP',
      coordinates: [-23.9618, -46.3322],
    },
    weight: 32,
    volume: 95,
    availableDate: '2024-03-21',
    estimatedPrice: 15800,
    contact: {
      name: 'Maria Santos',
      phone: '(67) 98765-4321',
    },
    specifications: {
      dimensions: '14m x 2.6m x 2.8m',
      transportType: 'Carreta Basculante',
    },
    estimatedDeliveryTime: '2 dias',
    movementHistory: [
      {
        timestamp: '2024-03-19T10:00:00',
        location: 'Campo Grande, MS',
        status: 'Carregamento iniciado',
      },
      {
        timestamp: '2024-03-19T14:30:00',
        location: 'Campo Grande, MS',
        status: 'Em trânsito',
      },
    ],
  },
];

const Transport: React.FC = () => {
  const [selectedCargoId, setSelectedCargoId] = useState<string>();
  const [detailsCargo, setDetailsCargo] = useState<Cargo>();

  const handleCargoSelect = (cargoId: string) => {
    setSelectedCargoId(cargoId);
  };

  const handleViewDetails = (cargo: Cargo) => {
    setDetailsCargo(cargo);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r border-gray-200">
        <CargoList
          cargos={mockCargos}
          onCargoSelect={handleCargoSelect}
          onViewDetails={handleViewDetails}
        />
      </div>
      <div className="w-2/3">
        <TransportMap
          cargos={mockCargos}
          selectedCargo={selectedCargoId}
          onCargoSelect={handleCargoSelect}
        />
      </div>
      {detailsCargo && (
        <CargoDetails cargo={detailsCargo} onClose={() => setDetailsCargo(undefined)} />
      )}
    </div>
  );
};

export default Transport;