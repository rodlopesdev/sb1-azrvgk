export interface Cargo {
  id: string;
  status: 'available' | 'in_transit' | 'completed';
  origin: {
    name: string;
    coordinates: [number, number];
  };
  destination: {
    name: string;
    coordinates: [number, number];
  };
  weight: number;
  volume: number;
  availableDate: string;
  estimatedPrice: number;
  contact: {
    name: string;
    phone: string;
  };
  specifications: {
    dimensions: string;
    transportType: string;
  };
  estimatedDeliveryTime: string;
  movementHistory?: {
    timestamp: string;
    location: string;
    status: string;
  }[];
}