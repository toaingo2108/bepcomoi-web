"use client";

import { Product } from "@/types/product";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DotIcon } from "lucide-react";

interface ProductQuestionsProps {
  product: Product;
}
const ProductQuestions = ({ product }: ProductQuestionsProps) => {
  return (
    <div>
      <Accordion type="multiple" className="w-full">
        {product?.questions?.map((question) => (
          <AccordionItem key={question.id} value={question.title}>
            <AccordionTrigger className="font-bold text-primary-foreground">
              <div className="flex items-center">
                <DotIcon className="w-4 h-4 mr-1.5 shrink-0" strokeWidth={8} />
                {question.title}
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base text-justify">
              {question.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProductQuestions;
