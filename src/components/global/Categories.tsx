"use client";

import { buildImageUrl } from "@/lib/utils";
import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";

interface CategoriesProps {
  categories: Category[];
}
const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-2xl text-center">Danh mục Bếp Có Mồi</h2>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-4 lg:gap-4 gap-2 align-middle">
        {categories.map((category) => (
          <CategoryItem key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

const CategoryItem = ({ category }: { category: Category }) => {
  return (
    <Link href={`/cua-hang?c=${category.slug}`} className="group flex flex-col gap-2">
      <div className="w-full h-auto aspect-square relative border-[3px] border-dashed rounded-lg border-primary group-hover:border-black transition-colors">
        <Image
          src={buildImageUrl(category.image)}
          alt="category"
          fill
          className="object-cover"
          priority
        />
      </div>
      <p className="font-bold text-primary sm:text-xs text-[8px]">{category.name}</p>
    </Link>
  );
};
