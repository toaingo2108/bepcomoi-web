"use client";

import React, { useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Product } from "@/types/product";
import useCart from "@/hooks/use-cart";
import { sleep } from "@/lib/utils";

interface ProductToCartProps {
  product: Product;
}
const ProductToCart = ({ product }: ProductToCartProps) => {
  const { addToCart } = useCart();
  const [isPending, startTransition] = useTransition();

  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = async () => {
    if (isPending) return;
    startTransition(async () => {
      await sleep(1000);
      addToCart(product, quantity);
      setQuantity(1);
    });
  };

  return (
    <div className="flex sm:flex-row flex-col gap-2">
      <div className="flex -space-x-1">
        <Button onClick={handleMinus} variant="outline" className="rounded-none" size="icon">
          <MinusIcon className="w-3 h-3 text-muted-foreground" />
        </Button>
        <Input
          value={quantity}
          type="number"
          className="rounded-none w-11 text-center p-2 !appearance-none"
        />
        <Button onClick={handlePlus} variant="outline" className="rounded-none" size="icon">
          <PlusIcon className="w-3 h-3 text-muted-foreground" />
        </Button>
      </div>
      <Button
        disabled={isPending}
        onClick={handleAddToCart}
        className="rounded-full font-bold px-10 text-lg text-white"
      >
        Thêm vào giỏ hàng
      </Button>
    </div>
  );
};

export default ProductToCart;
