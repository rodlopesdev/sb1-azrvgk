import { Cargo } from '../types/transport';

export const mockCargos: Cargo[] = [
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