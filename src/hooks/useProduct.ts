import { useState, useEffect } from 'react';
import { Product } from '../types/marketplace';
import { useProducts } from './useProducts';

export const useProduct = (id: string | undefined) => {
  const { products, loading: productsLoading } = useProducts();
  const [product, setProduct] = useState<Product | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productsLoading) {
          return;
        }

        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 200));
        const foundProduct = products.find(p => p.id === id);
        
        if (!foundProduct) {
          setError('Produto não encontrado');
        } else {
          setProduct(foundProduct);
          setError(null);
        }
      } catch (err) {
        setError('Erro ao carregar produto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, products, productsLoading]);

  return { 
    product, 
    loading: loading || productsLoading, 
    error 
  };
};