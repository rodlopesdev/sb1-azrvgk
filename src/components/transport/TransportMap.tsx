import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Cargo } from '../../types/transport';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface TransportMapProps {
  cargos: Cargo[];
  selectedCargo?: string;
  onCargoSelect: (cargoId: string) => void;
}

const TransportMap: React.FC<TransportMapProps> = ({ cargos, selectedCargo, onCargoSelect }) => {
  const center: [number, number] = [-15.7801, -47.9292]; // Brasília coordinates as default center

  return (
    <MapContainer
      center={center}
      zoom={5}
      className="h-full w-full"
      style={{ background: '#f0f0f0' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cargos.map((cargo) => (
        <React.Fragment key={cargo.id}>
          <Marker
            position={cargo.origin.coordinates}
            eventHandlers={{
              click: () => onCargoSelect(cargo.id),
            }}
          >
            <Popup>
              <div className="text-sm">
                <p className="font-semibold">Origem: {cargo.origin.name}</p>
                <p>Status: {cargo.status}</p>
              </div>
            </Popup>
          </Marker>
          <Marker
            position={cargo.destination.coordinates}
            eventHandlers={{
              click: () => onCargoSelect(cargo.id),
            }}
          >
            <Popup>
              <div className="text-sm">
                <p className="font-semibold">Destino: {cargo.destination.name}</p>
                <p>Status: {cargo.status}</p>
              </div>
            </Popup>
          </Marker>
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default TransportMap;