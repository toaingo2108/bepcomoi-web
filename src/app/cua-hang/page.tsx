import BreadcrumbContainer from "@/components/global/BreadcrumbContainer";
import ProductItem from "@/components/product/ProductItem";
import Wrapper from "@/components/global/Wrapper";
import { getListCategories, getListProducts } from "@/lib/api";
import Image from "next/image";
import React from "react";
import CategoriesFilter from "@/components/global/CategoriesFilter";
import Categories from "@/components/global/Categories";
import sortBy from "lodash/sortBy";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";
import CategoriesFilterMobile from "@/components/global/CategoriesFilterMobile";

interface StorePageProps {
  searchParams: {
    c: string;
  };
}
const StorePage = async ({ searchParams }: StorePageProps) => {
  const [products, categories] = await Promise.all([
    getListProducts({ categorySlug: searchParams.c }),
    getListCategories(),
  ]);

  return (
    <>
      <BreadcrumbContainer
        data={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: searchParams.c ? "/cua-hang" : undefined },
          {
            label: searchParams.c
              ? categories?.find((c) => c.slug === searchParams.c)?.name
              : undefined,
          },
        ]}
      />
      <Wrapper className="py-10">
        <CategoriesFilterMobile categories={categories || []} />
        <div className="flex gap-10">
          <div className="hidden xl:block">
            <CategoriesFilter categories={categories || []} />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-x-4 gap-x-2 gap-y-8">
              {sortBy(products, "name")?.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
            <div className="w-full flex justify-center pt-10">
              <div className="relative w-1/3 aspect-video">
                <Image src="/logo.png" alt="" className="object-contain" fill priority />
              </div>
            </div>
            <p className="font-bold text-lg text-center lg:px-56 px-4 my-6">
              Ở Bếp Có Mồi, chúng tôi có những sản phẩm chất lượng cao, được tuyển chọn kĩ lưỡng từ
              nguồn hải sản đúng chuẩn vị của biển cả
            </p>
            <div className="col-span-3 mt-6">
              <Categories categories={categories || []} />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default StorePage;
