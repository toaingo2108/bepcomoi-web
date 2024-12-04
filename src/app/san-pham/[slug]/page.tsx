import BreadcrumbContainer from "@/components/global/BreadcrumbContainer";
import Wrapper from "@/components/global/Wrapper";
import ProductImageContainer from "@/components/product/ProductImageContainer";
import ProductInfoCard from "@/components/product/ProductInfoCard";
import ProductQuestions from "@/components/product/ProductQuestions";
import ProductToCart from "@/components/product/ProductToCart";
import { getDetailProduct } from "@/lib/api";
import { formatPrice } from "@/lib/utils";
import { MessagesSquareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}
const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const product = await getDetailProduct(params.slug);

  if(!product) {
    return (
      <Wrapper>
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src="/logo.png" width={200} height={200} alt="404" />
          <p className="text-primary text-lg font-bold">Không tìm thấy sản phẩm</p>
        </div>
      </Wrapper>
    );
  }

  return (
    <>
      <BreadcrumbContainer
        data={[
          { href: "/", label: "Home" },
          { href: "/cua-hang", label: "Sản phẩm" },
          { label: product.name },
        ]}
      />
      <Wrapper>
        <section className="flex lg:flex-row flex-col gap-4">
          <div className="lg:w-[400px] w-full">
            <ProductImageContainer product={product} />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="font-bold text-2xl text-primary">{product.name}</h1>
            <div className="flex items-center gap-4">
              <span className="text-primary/60 line-through font-bold text-2xl">
                {formatPrice(product.price)}
              </span>
              <span className="text-primary font-bold text-2xl">
                {formatPrice(product.salePrice)}
              </span>
            </div>
            <div>
              <ProductToCart product={product} />
            </div>
            <div>
              <ProductInfoCard product={product} />
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <MessagesSquareIcon className="w-24 h-24 shrink-0" strokeWidth={0.5} />
            <p className="text-primary-foreground text-lg font-bold">Các câu hỏi thường gặp</p>
          </div>
          <div>
            <ProductQuestions product={product} />
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default ProductDetailPage;
