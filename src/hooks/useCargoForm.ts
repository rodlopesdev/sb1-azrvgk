import { useState, useEffect } from 'react';
import { Cargo } from '../types/transport';

const defaultFormData: Omit<Cargo, 'id' | 'status'> = {
  origin: {
    name: '',
    coordinates: [-23.5505, -46.6333], // Default to São Paulo coordinates
  },
  destination: {
    name: '',
    coordinates: [-15.7801, -47.9292], // Default to Brasília coordinates
  },
  weight: 0,
  volume: 0,
  availableDate: new Date().toISOString(),
  estimatedPrice: 0,
  contact: {
    name: 'João Silva',
    phone: '(11) 98765-4321',
  },
  specifications: {
    dimensions: '',
    transportType: '',
  },
  estimatedDeliveryTime: '3 dias',
};

export const useCargoForm = (initialData: Cargo | undefined, onSuccess: () => void) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev };
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        (newData as any)[parent] = {
          ...(newData as any)[parent],
          [child]: value,
        };
      } else {
        (newData as any)[name] = value;
      }
      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 100));
      onSuccess();
    } catch (err) {
      setFormError('Erro ao salvar carga');
    }
  };

  return { formData, handleChange, handleSubmit, formError };
};