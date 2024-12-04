export type Product = {
  id: string;
  name: string;
  price: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  salePrice: number;
  stock: number;
  images: string[];
  orderIds: string[];
  description?: string;
  ingredient?: string;
  instruction?: string;
  questions?: ProductQuestion[];
};

export type ProductQuestion = {
  question: string;
  answer: string;
};
