"use client";

import { buildImageUrl, formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useMemo, useTransition } from "react";
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

  const percentDiscount = useMemo(() => {
    return Math.round(((product.price - product.salePrice) / product.price) * 100);
  }, [product]);

  const handleClickBuyNow = () => {
    startTransition(() => {
      addToCart(product, 1);
      router.push("/thanh-toan");
    });
  };

  return (
    <div className="w-full h-auto flex flex-col p-0 relative max-sm:border rounded-lg shadow-md lg:hover:shadow-xl transition-all">
      <Link
        href={`/san-pham/${product.slug}`}
        className="w-full aspect-square h-auto block relative rounded-lg"
      >
        <Image
          src={buildImageUrl(product.images?.[0])}
          alt="product-image"
          fill
          className="object-cover rounded-t-lg"
          priority={true}
        />
      </Link>
      {percentDiscount > 0 && (
        <div className="bg-red-600 absolute top-6 -left-1.5 min-w-fit text-sm rounded-sm rounded-bl-none px-2 py-0.5 text-white font-semibold">
          {percentDiscount}%
          <div
            className="w-1.5 h-1.5 absolute top-full left-0 bg-black"
            style={{
              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            }}
          />
        </div>
      )}
      <div className="flex-1 flex flex-col justify-between gap-2 sm:p-4 p-2">
        <Hint description={product.name} side="top">
          <Link
            href={`/san-pham/${product.slug}`}
            className="font-bold overflow-hidden text-ellipsis sm:text-base text-[10px]"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
          >
            {product.name}
          </Link>
        </Hint>
        <div className="flex flex-col gap-2 h-fit">
          <div className="flex gap-2 justify-center items-center">
            {product.salePrice < product.price && (
              <span className="text-primary/60 font-bold sm:text-xl line-through text-[8px]">
                {formatPrice(product.price)}
              </span>
            )}
            <span className="text-rose-600 font-bold sm:text-xl text-xs">
              {formatPrice(product.salePrice)}
            </span>
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
