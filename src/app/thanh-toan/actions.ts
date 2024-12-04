"use server";

import { fetcher } from "@/lib/fetcher";
import { Product } from "@/types/product";
import { Order } from "@/types/order";

export const createOrder = async <T>(
  values: T,
  items: { product: Product; quantity: number }[],
  totalPrice: number
) => {
  const response = await fetcher<Order & { paymentUrl: string | null }>("/orders/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...values,
      items: items.map(({ product, quantity }) => ({
        slug: product.slug,
        quantity,
      })),
      totalPrice,
    }),
    cache: "no-cache",
  });
  return response.results;
};
