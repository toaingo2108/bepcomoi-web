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
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";

interface Props {
  product: Product;
}
const ProductImageContainer = ({ product }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
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
              <CarouselItem key={image} className="relative transition-transform">
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
        plugins={[Fullscreen, Zoom, Thumbnails, Counter]}
        open={openLightBox}
        close={() => setOpenLightBox(false)}
        slides={product.images.map((image) => ({
          src: buildImageUrl(image),
          width: 1080,
          height: 1080,
          alt: "product image",
          imageFit: "contain",
          type: "image",
        }))}
        index={current}
        render={{ slide: ImageLightBox }}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      />
    </>
  );
};

export default ProductImageContainer;
