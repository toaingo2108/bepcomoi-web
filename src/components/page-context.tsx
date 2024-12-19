"use client";

import { Category } from "@/types/category";
import React from "react";

export const PageContext = React.createContext<{ categories: Category[] }>({ categories: [] });

const PageProvider = ({
  children,
  categories,
}: {
  children: React.ReactNode;
  categories: Category[];
}) => {
  return <PageContext.Provider value={{ categories }}>{children}</PageContext.Provider>;
};

export default PageProvider;
