"use client";

import { buildImageUrl, formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import Hint from "../hint";

interface ProductItemProps {
  product: Product;
}
const ProductItem = ({ product }: ProductItemProps) => {
  const { addToCart } = useCart();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClickBuyNow = () => {
    startTransition(() => {
      addToCart(product, 1);
      router.push("/thanh-toan");
    });
  };

  return (
    <div className="w-full aspect-[3/4] h-auto flex flex-col p-4 relative max-sm:border rounded-lg overflow-hidden">
      <Link
        href={`/san-pham/${product.slug}`}
        className="w-full aspect-square h-auto block relative"
      >
        <Image
          src={buildImageUrl(product.images?.[0])}
          alt="product-image"
          fill
          className="object-contain"
          priority={true}
        />
      </Link>
      <div className="flex-1 flex flex-col justify-between gap-2">
        <Hint description={product.name} side="top">
          <Link
            href={`/san-pham/${product.slug}`}
            className="font-bold whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {product.name}
          </Link>
        </Hint>
        <div className="flex flex-col gap-2 h-fit">
          <div className="flex gap-2 justify-center">
            <span className="text-primary/60 font-bold text-xl line-through">
              {formatPrice(product.price)}
            </span>
            <span className="text-primary font-bold text-xl">{formatPrice(product.salePrice)}</span>
          </div>
          <Button
            loading={isPending}
            onClick={handleClickBuyNow}
            className="rounded-full shrink-0 w-full text-neutral-100"
          >
            <ShoppingCartIcon className="w-4 h-4 mr-1.5" />
            Mua ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
