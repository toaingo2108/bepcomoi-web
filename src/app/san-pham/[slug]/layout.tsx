import Image from "next/image";
import React from "react";

interface ProductDetailLayoutProps {
  children: React.ReactNode;
}
const ProductDetailLayout = ({ children }: ProductDetailLayoutProps) => {
  return (
    <>
      {children}
      <div className="aspect-[1908/600] relative mt-10">
        <Image
          src="/home1.jpg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="aspect-[1908/420] relative">
        <Image
          src="/sliderdesktop1.jpg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
    </>
  );
};

export default ProductDetailLayout;
