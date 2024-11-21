export interface Producto {
  id: number;
  title: string;
  price: number;
  descripcion: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}
