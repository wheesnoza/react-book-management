export enum BookStatus {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
}

export interface Book {
  id: string;
  title: string;
  description: string;
  stock: number;
  status: BookStatus;
}
