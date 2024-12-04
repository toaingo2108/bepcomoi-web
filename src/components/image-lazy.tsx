"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

interface ImageLazyProps {
  src: string;
  alt: string;
  className?: string;
}
const ImageLazy = ({ src, alt, className }: ImageLazyProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Image
      src={src}
      blurDataURL={src}
      placeholder="blur"
      alt={alt || "image"}
      fill
      className={cn("object-cover transition-all", isLoaded ? "blur-0" : "blur-md", className)}
      quality={isLoaded ? 75 : 0}
      onLoad={() => {
        setIsLoaded(true);
      }}
    />
  );
};

export default ImageLazy;
