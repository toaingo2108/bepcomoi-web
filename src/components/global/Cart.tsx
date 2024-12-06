"use client";

import React, { useMemo } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Button, buttonVariants } from "../ui/button";
import { ShoppingBagIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { buildImageUrl, cn, formatPrice } from "@/lib/utils";
import Image from "next/image";
import useCart from "@/hooks/use-cart";

const Cart = () => {
  const { items, removeFromCart } = useCart();

  const totalPrice = useMemo(() => {
    return items.reduce((prevTotal, { product, quantity }) => {
      return prevTotal + product.salePrice * quantity;
    }, 0);
  }, [items]);

  return (
    <HoverCard closeDelay={0} openDelay={0}>
      <HoverCardTrigger asChild>
        <Button size="icon" variant="ghost" className="group hover:bg-transparent relative flex">
          <ShoppingBagIcon
            className="text-primary h-8 w-8 group-hover:fill-primary"
            strokeWidth={1.5}
          />
          <span className="absolute text-white hidden group-hover:inline-block">
            {items.length}
          </span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 p-0 overflow-hidden" sideOffset={0} align="end">
        <div className="h-60 overflow-y-auto">
          <div className="px-2">
            {items.length === 0 && (
              <div className="w-full h-60 flex justify-center items-center text-neutral-400 italic">
                Lựa thêm món ngon nhé 🥰
              </div>
            )}
            {items.map(({ product, quantity }) => (
              <div key={product.slug} className="flex justify-between items-center space-x-2">
                <div className="flex flex-1 items-center space-x-2">
                  <div className="relative w-16 h-16 shrink-0">
                    <Image
                      src={buildImageUrl(product.images[0])}
                      alt="product-image"
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                      priority
                      quality={60}
                    />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-primary-foreground max-w-40 overflow-hidden whitespace-nowrap text-ellipsis">
                      {product.name}
                    </p>
                    <p className="text-muted-foreground">
                      {quantity} x{" "}
                      <span className="text-primary font-semibold">
                        {formatPrice(product.salePrice)}
                      </span>
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => removeFromCart(product)}
                  size="icon"
                  className="shrink-0 rounded-full h-5 w-5"
                  variant="outline"
                >
                  <XIcon className="text-muted-foreground h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4 flex items-center font-bold text-xl justify-center border">
          <span className="text-neutral-600">Tạm tính: </span>
          <span className="text-primary ml-1.5">{formatPrice(totalPrice)}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 p-2">
          <Link
            href="/thanh-toan"
            className={cn(
              buttonVariants({
                variant: "secondary",
              })
            )}
          >
            Xem giỏ hàng
          </Link>
          <Link
            href="/thanh-toan"
            className={cn(
              buttonVariants({
                variant: "secondary",
              })
            )}
          >
            Thanh toán
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Cart;
