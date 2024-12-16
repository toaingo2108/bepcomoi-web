"use client";

import { buildImageUrl, cn } from "@/lib/utils";
import { Product } from "@/types/product";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import ImageLightBox from "../image-light-box";

interface Props {
  product: Product;
}
const ProductImageContainer = ({ product }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<{
    pageX: number;
    pageY: number;
  } | null>(null);
  const [openLightBox, setOpenLightBox] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div className="w-full flex flex-col">
        <Carousel setApi={setApi} ref={ref}>
          <CarouselContent className="aspect-square w-full -ml-0">
            {product.images.map((image) => (
              <CarouselItem
                key={image}
                className="relative hover:scale-[3] transition-transform"
                style={{
                  transformOrigin: transform
                    ? `${
                        ((transform.pageX - ref.current?.offsetLeft!) / ref.current?.clientWidth!) *
                        100
                      }% ${
                        ((transform.pageY - ref.current?.offsetTop!) / ref.current?.clientHeight!) *
                        100
                      }%`
                    : "center",
                }}
                onMouseMove={(e) => {
                  setTransform({ pageX: e.pageX, pageY: e.pageY });
                }}
                onMouseOut={() => {
                  setTransform(null);
                }}
              >
                <Image
                  src={buildImageUrl(image)}
                  alt="product image"
                  fill
                  className={cn("object-cover w-full h-full")}
                  priority={true}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-2 right-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpenLightBox(true)}
              className="rounded-full"
            >
              <SearchIcon className="w-5 h-5" />
            </Button>
          </div>
        </Carousel>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {product.images.map((image, index) => (
            <div
              role="button"
              onClick={() => api?.scrollTo(index)}
              key={index}
              className={cn(
                "w-full h-full relative aspect-square transition-opacity",
                current !== index && "opacity-50"
              )}
            >
              <Image
                src={buildImageUrl(image)}
                alt="product image"
                width={400}
                height={400}
                className="object-contain w-full h-full"
                priority={true}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        open={openLightBox}
        close={() => setOpenLightBox(false)}
        slides={product.images.map((image) => ({
          src: buildImageUrl(image),
          width: 1920,
          height: 1080,
          alt: "product image",
          imageFit: "contain",
          type: "image",
        }))}
        index={current}
        render={{ slide: ImageLightBox }}
      />
    </>
  );
};

export default ProductImageContainer;
