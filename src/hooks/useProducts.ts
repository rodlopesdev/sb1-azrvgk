import { useState, useEffect } from 'react';
import { Product } from '../types/marketplace';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Trator Agrícola 75CV',
    description: 'Trator agrícola com motor diesel de 75CV, tração 4x4, cabine fechada com ar condicionado, sistema hidráulico de alta performance e baixo consumo de combustível. Ideal para pequenas e médias propriedades.',
    price: 180000,
    oldPrice: 200000,
    category: 'Máquinas',
    image: 'https://images.unsplash.com/photo-1592878040763-c48e774be90c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    stock: 5,
    supplier: {
      id: 'sup1',
      name: 'Agro Máquinas Brasil',
      rating: 4.8,
    },
  },
  {
    id: '2',
    name: 'Semente de Soja Certificada',
    description: 'Semente de soja de alta qualidade, certificada e tratada. Variedade adaptada para diferentes regiões, alto potencial produtivo e resistência a principais doenças.',
    price: 850,
    category: 'Sementes',
    image: 'https://images.unsplash.com/photo-1599583863916-e868f5c22257?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    stock: 1000,
    supplier: {
      id: 'sup2',
      name: 'Sementes Premium',
      rating: 4.9,
    },
  },
  {
    id: '3',
    name: 'Fertilizante NPK 20-20-20',
    description: 'Fertilizante granulado de alta solubilidade com formulação balanceada de Nitrogênio, Fósforo e Potássio. Ideal para diversas culturas e fases de desenvolvimento.',
    price: 280,
    category: 'Fertilizantes',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    stock: 500,
    supplier: {
      id: 'sup3',
      name: 'Nutrição do Solo',
      rating: 4.6,
    },
  },
  {
    id: '4',
    name: 'Sistema de Irrigação por Gotejamento',
    description: 'Kit completo de irrigação por gotejamento com controlador automático, filtros, conectores e mangueiras. Cobertura para até 1 hectare com eficiência no uso da água.',
    price: 3500,
    oldPrice: 4000,
    category: 'Irrigação',
    image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    stock: 20,
    supplier: {
      id: 'sup4',
      name: 'Hidro Agro',
      rating: 4.7,
    },
  },
  {
    id: '5',
    name: 'Pulverizador Costal 20L',
    description: 'Pulverizador costal com capacidade de 20 litros, fabricado em material resistente, bomba de alta pressão e bicos ajustáveis. Ideal para pequenas aplicações.',
    price: 450,
    category: 'Equipamentos',
    image: 'https://images.unsplash.com/photo-1592505690264-2f37e6f8d8e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    stock: 45,
    supplier: {
      id: 'sup5',
      name: 'Agro Equipamentos',
      rating: 4.5,
    },
  },
  {
    id: '6',
    name: 'Painel Solar 440W',
    description: 'Painel solar fotovoltaico de alta eficiência, potência de 440W, tecnologia PERC, garantia de 25 anos. Ideal para sistemas de bombeamento e eletrificação rural.',
    price: 1200,
    oldPrice: 1500,
    category: 'Energia Solar',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    stock: 30,
    supplier: {
      id: 'sup6',
      name: 'Solar Rural',
      rating: 4.8,
    },
  },
];

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setProducts(mockProducts);
      } catch (err) {
        setError('Erro ao carregar produtos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};