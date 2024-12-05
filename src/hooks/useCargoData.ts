import { useState, useEffect } from 'react';
import { Cargo } from '../types/transport';
import { mockCargos } from '../data/mockData';

export const useCargoData = (cargoId?: string) => {
  const [cargo, setCargo] = useState<Cargo | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCargo = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 100));
        const foundCargo = mockCargos.find(c => c.id === cargoId);
        
        if (!foundCargo) {
          setError('Carga não encontrada');
        } else {
          setCargo(foundCargo);
        }
      } catch (err) {
        setError('Erro ao carregar dados da carga');
      } finally {
        setLoading(false);
      }
    };

    if (cargoId) {
      fetchCargo();
    }
  }, [cargoId]);

  return { cargo, loading, error };
};