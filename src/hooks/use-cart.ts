import { Product } from "@/types/product";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
  items: {
    product: Product;
    quantity: number;
  }[];
  addToCart: (item: Product, quantity: number) => void;
  removeFromCart: (item: Product) => void;
  clearCart: () => void;
};

const useCart = create(
  persist<State>(
    (set) => ({
      items: [],
      addToCart: (item, quantity) => {
        set((state) => {
          const index = state.items.findIndex((i) => i.product.slug === item.slug);
          if (index !== -1) {
            state.items[index].quantity += quantity;
            return { items: [...state.items] };
          }

          return { items: [...state.items, { product: item, quantity: quantity }] };
        });
      },
      removeFromCart: (item) => {
        set((state) => {
          const index = state.items.findIndex((i) => i.product.slug === item.slug);
          if (index === -1) {
            return { items: state.items };
          }

          state.items.splice(index, 1);
          return { items: [...state.items] };
        });
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
