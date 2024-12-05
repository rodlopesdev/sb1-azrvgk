import { useState, useEffect, useCallback } from 'react';
import { Cargo } from '../types/transport';
import { mockCargos } from '../data/mockData';

export const useCargoList = () => {
  const [cargos, setCargos] = useState<Cargo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCargos = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 100));
        setCargos(mockCargos);
      } catch (err) {
        setError('Erro ao carregar lista de cargas');
      } finally {
        setLoading(false);
      }
    };

    fetchCargos();
  }, []);

  const deleteCargo = useCallback(async (cargoId: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 100));
      setCargos(prevCargos => prevCargos.filter(cargo => cargo.id !== cargoId));
    } catch (err) {
      setError('Erro ao excluir carga');
    }
  }, []);

  return { cargos, loading, error, deleteCargo };
};