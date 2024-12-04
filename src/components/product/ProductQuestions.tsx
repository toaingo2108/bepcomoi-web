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
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-primary-foreground">
            <div className="flex items-center">
              <DotIcon className="w-4 h-4 mr-1.5 shrink-0" strokeWidth={8} />
              Tại sao phải bảo quản các hũ hạt (hạt quý, hạt mix, gạo) trong ngăn đông? Bảo quản như
              thế có phải rã đông không?
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base text-justify">
            Để đảm bảo chất lượng sản phẩm và thời gian bảo quản lâu nhất, mẹ nên bảo quản các hũ
            hạt (hạt quý, hạt mix, gạo) trong ngăn đông tủ lạnh vì gạo và hạt nhà Mămmy là loại hạt
            hữu cơ không chứa chất bảo quản, nếu để ở nhiệt độ thường sẽ dễ sinh ra mối mọt. Hạt khô
            ráo nên sẽ không bị kết dính và không cần phải rã đông. Khi nào chuẩn bị bữa ăn cho bé,
            mẹ chỉ cần lấy ra nấu.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-primary-foreground">
            <div className="flex items-center">
              <DotIcon className="w-4 h-4 mr-1.5 shrink-0" strokeWidth={8} />
              Set hạt có nấu được với thịt cá, rau củ hay kị thực phẩm nào không?
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base text-justify">
            Hạt của Mămmy là hạt hữu cơ, không kỵ với bất kỳ thực phẩm nào nên mẹ nấu cùng với các
            loại rau củ, thịt cá đều được nhé.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold text-primary-foreground">
            <div className="flex items-center">
              <DotIcon className="w-4 h-4 mr-1.5 shrink-0" strokeWidth={8} />1 hũ có thể ăn được bao lâu?
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base text-justify">
            Tùy vào sức ăn của từng bé, 1 hũ sẽ nấu được khoảng 4-6 bữa: – Bé 6-11M nấu 10-15gr/ bữa
            (2-3 thìa cafe) – Bé 9-11M nấu 15-20gr/ bữa (3-4 thìa cafe) – Bé 12-24M+ nấu 30gr/ bữa
            (5-6 thìa cafe)
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductQuestions;
