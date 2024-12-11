"use server";

import { Order } from "@/types/order";
import { Product } from "../types/product";
import { fetcher } from "./fetcher";
import { Category } from "@/types/category";

// ======================== CATEGORY ===========================

export const getListCategories = async () => {
  const response = await fetcher<Category[]>("/categories/list", {
    cache: "no-cache",
  });
  return response.results;
};

export const getDetailCategory = async (slug: string) => {
  const response = await fetcher<Category>(`/categories/detail?slug=${slug}`, {
    cache: "no-cache",
  });
  return response.results;
};

// ======================== PRODUCT ===========================

export const getListProducts = async (categorySlug?: string) => {
  const response = await fetcher<Product[]>(
    `/products/list${categorySlug ? `?categorySlug=${categorySlug}` : ""}`,
    {
      cache: "no-cache",
    }
  );
  return response.results;
};

export const getDetailProduct = async (slug: string) => {
  const response = await fetcher<Product>(`/products/detail?slug=${slug}`, {
    cache: "no-cache",
  });
  return response.results;
};

// ======================== ORDER ===========================

export const getDetailOrder = async (code: string) => {
  const response = await fetcher<Order>(`/orders/detail/${code}`, {
    cache: "no-cache",
  });
  return response.results;
};
