"use client";

import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const Banner = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
      setApi={setApi}
      className="w-full relative"
    >
      <CarouselContent className="aspect-[1908/420] w-full -ml-0">
        <CarouselItem className="relative">
          <Image src="/sliderdesktop1.jpg" alt="slider" fill className="object-cover" priority />
        </CarouselItem>
        <CarouselItem className="relative">
          <Image src="/sliderdesktop2.jpg" alt="slider" fill className="object-cover" priority />
        </CarouselItem>
        <CarouselItem className="relative">
          <Image src="/sliderdesktop3.jpg" alt="slider" fill className="object-cover" priority />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        variant="ghost"
        className="text-white backdrop-blur-lg hover:bg-white/10 hover:text-white absolute top-1/2 -translate-y-1/2 left-1"
      />
      <CarouselNext
        variant="ghost"
        className="text-white backdrop-blur-lg hover:bg-white/10 hover:text-white absolute top-1/2 -translate-y-1/2 right-1"
      />
      <div className="absolute bottom-2 inset-x-0 py-2 text-center text-sm text-muted-foreground flex justify-center gap-3">
        {[...Array(count)].map((_, i) => (
          <div
            role="button"
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "w-1.5 h-1.5 bg-black rounded-full",
              current === i + 1 ? "bg-black" : "bg-muted-foreground"
            )}
            key={i}
          ></div>
        ))}
      </div>
    </Carousel>
  );
};

export default Banner;
