import { Product } from "./product";

export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  products: Product[];
};
