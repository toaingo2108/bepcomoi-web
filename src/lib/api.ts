"use server";

import { Order } from "@/types/order";
import { Product } from "../types/product";
import { fetcher } from "./fetcher";
import { Category } from "@/types/category";
import { Voucher } from "@/types/voucher";

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

export const getListProducts = async (params: { categorySlug?: string; search?: string }) => {
  const query = new URLSearchParams();
  if (params.categorySlug) {
    query.set("categorySlug", params.categorySlug || "");
  }
  query.set("search", params.search || "");
  const response = await fetcher<Product[]>(`/products/list?${query.toString()}`, {
    cache: "no-cache",
    method: "GET",
  });
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

// ======================== ANALYTIC ===========================
export const trackVisit = async () => {
  const response = await fetcher<Order>(`/analytic/track-visit`, {
    cache: "no-cache",
    method: "POST",
  });
  return response.results;
};

// ======================== VOUCHER ===========================
export const verifyVoucher = async (code: string, orderValue: number) => {
  const response = await fetcher<Voucher>(`/vouchers/verify`, {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code, orderValue }),
  });
  return response.results;
};

// ======================== HELP ===========================
export const sendHelp = async (values: { name: string; email: string; content: string }) => {
  const response = await fetcher(`/help/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    cache: "no-cache",
  });
  console.log(response);
  return response.results;
};
