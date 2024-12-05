import React, { useState } from 'react';
import TransportMap from '../../components/transport/TransportMap';
import CargoList from '../../components/transport/CargoList';
import CargoDetails from '../../components/transport/CargoDetails';
import { useCargoList } from '../../hooks/useCargoList';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const CargoCenter: React.FC = () => {
  const { cargos, loading, error } = useCargoList();
  const [selectedCargoId, setSelectedCargoId] = useState<string>();
  const [detailsCargo, setDetailsCargo] = useState<any>();

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

  const handleCargoSelect = (cargoId: string) => {
    setSelectedCargoId(cargoId);
  };

  const handleViewDetails = (cargo: any) => {
    setDetailsCargo(cargo);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="w-1/3 border-r border-gray-200">
        <CargoList
          cargos={cargos}
          onCargoSelect={handleCargoSelect}
          onViewDetails={handleViewDetails}
        />
      </div>
      <div className="w-2/3">
        <TransportMap
          cargos={cargos}
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

export default CargoCenter;