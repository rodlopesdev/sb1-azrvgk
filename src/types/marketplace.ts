export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
  supplier: {
    id: string;
    name: string;
    rating: number;
  };
}