"use client";

import { Product } from "@/types/product";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ProductInfoCardProps {
  product: Product;
}
const ProductInfoCard = ({ product }: ProductInfoCardProps) => {
  return (
    <div className="w-full rounded-lg h-fit p-6 shadow-[0px_5px_20px_0px_#eee9e9] mb-10">
      <Accordion type="multiple" defaultValue={["description", "ingredient"]} className="w-full">
        <AccordionItem value="description">
          <AccordionTrigger>Mô tả</AccordionTrigger>
          <AccordionContent>
            {product.description && (
              <div
                className="h-fit whitespace-break-spaces p-4 text-sm"
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              />
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="ingredient">
          <AccordionTrigger>Thành phần</AccordionTrigger>
          <AccordionContent>
            {product.ingredient && (
              <div
                className="h-fit whitespace-break-spaces p-4 text-sm"
                dangerouslySetInnerHTML={{
                  __html: product.ingredient,
                }}
              />
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductInfoCard;
