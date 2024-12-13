import { getDetailProduct } from "@/lib/api";
import { Product } from "@/types/product";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getDetailProduct(slug);

  if (!product) {
    return {
      title: "Not Found",
    };
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    description: product.name + " - " + "Bếp Có Mồi",
    openGraph: {
      images: [process.env.NEXT_PUBLIC_IMAGE_BASE_URL + product?.images?.[0], ...previousImages],
    },
  };
}

interface ProductDetailLayoutProps {
  children: React.ReactNode;
}
const ProductDetailLayout = ({ children }: ProductDetailLayoutProps) => {
  return (
    <>
      {children}
      <div className="aspect-[1908/600] relative mt-10">
        <Image src="/home1.jpg" alt="" fill className="object-contain" priority />
      </div>
      <div className="aspect-[1908/420] relative">
        <Image src="/sliderdesktop1.jpg" alt="" fill className="object-contain" priority />
      </div>
    </>
  );
};

export default ProductDetailLayout;
