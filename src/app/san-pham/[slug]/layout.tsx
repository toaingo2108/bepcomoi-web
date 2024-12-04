import Image from "next/image";
import React from "react";

interface ProductDetailLayoutProps {
  children: React.ReactNode;
}
const ProductDetailLayout = ({ children }: ProductDetailLayoutProps) => {
  return (
    <>
      {children}
      <div className="aspect-[1488/587] relative mt-10">
        <Image
          src="https://mammy.vn/wp-content/uploads/2024/03/WEB-MAMMY-DESKTOP-09-1-2048x808.jpg.webp"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="aspect-[1488/756] relative mt-10">
        <Image
          src="https://mammy.vn/wp-content/uploads/2024/03/WEB-MAMMY-DESKTOP-07-2048x808.jpg.webp"
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
