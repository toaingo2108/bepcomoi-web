"use client";

import { Category } from "@/types/category";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React, { useMemo } from "react";

// const filterData = [
//   {
//     label: "Tất cả sản phẩm",
//     quantity: 83,
//     value: "all",
//   },
//   {
//     label: "Dụng Cụ Ăn Dặm",
//     quantity: 8,
//     value: "dung-cu-an-dam",
//   },
//   {
//     label: "Thực Phẩm Ăn Dặm",
//     quantity: 64,
//     value: "thuc-pham-an-dam",
//     subItems: [
//       {
//         label: "Bột làm bánh 5 phút",
//         quantity: 5,
//         value: "bot-lam-banh-5-phut",
//       },
//       {
//         label: "Bánh ăn dặm - Baby Teether",
//         quantity: 6,
//         value: "banh-an-dam-baby-teether",
//       },
//       {
//         label: "Bột ăn dặm",
//         quantity: 6,
//         value: "bot-an-dam",
//       },
//       {
//         label: "Dầu ăn dặm bổ não",
//         quantity: 8,
//         value: "dau-an-dam-bo-nao",
//       },
//       {
//         label: "Hạt ăn dặm hữu cơ",
//         quantity: 21,
//         value: "hat-an-dam-huu-co",
//       },
//       {
//         label: "Mỳ Ý, Nui tập nhai",
//         quantity: 11,
//         value: "my-y-nui-tap-nhai",
//       },
//       {
//         label: "Nước mắm ăn dặm",
//         quantity: 1,
//         value: "nuoc-mam-an-dam",
//       },
//       {
//         label: "Phô mai tách muối",
//         quantity: 1,
//         value: "pho-mai-tach-muoi",
//       },
//       {
//         label: "Sữa chua sấy",
//         quantity: 5,
//         value: "sua-chua-say",
//       },
//     ],
//   },
//   {
//     label: "Chăm Sóc Da",
//     quantity: 8,
//     value: "cham-soc-da",
//   },
//   {
//     label: "Combo ưu đãi",
//     quantity: 2,
//     value: "combo-uu-dai",
//   },
// ];

interface CategoriesFilterProps {
  categories: Category[];
}

const CategoriesFilter = ({ categories }: CategoriesFilterProps) => {
  const totalCount = useMemo(() => {
    return categories.reduce((acc, item) => acc + item.products.length, 0);
  }, [categories]);

  return (
    <div className="w-[228px]">
      <h3 className="text-2xl font-bold text-neutral-600">Lọc theo</h3>
      <div className="flex flex-col space-y-3 mt-8">
        <Link href="/cua-hang" className="flex justify-between">
          <span className="text-primary font-bold flex-1 whitespace-nowrap overflow-hidden overflow-ellipsis mr-4">
            Tất cả sản phẩm
          </span>
          <span className="w-fit text-muted-foreground font-light shrink-0">({totalCount})</span>
        </Link>
        {categories.map((item) => (
          <React.Fragment key={item.slug}>
            <Link href={`/cua-hang?c=${item.slug}`} className="flex justify-between">
              <span className="text-primary font-bold flex-1 whitespace-nowrap overflow-hidden overflow-ellipsis mr-4">
                {item.name}
              </span>
              <span className="w-fit text-muted-foreground font-light shrink-0">
                ({item.products?.length})
              </span>
            </Link>
            {/* {item.subItems &&
              item.subItems.map((subItem) => (
                <div
                  role="button"
                  key={subItem.value}
                  className="flex justify-between items-center"
                >
                  <ChevronRightIcon
                    className="w-4 h-4 mx-1.5 text-muted-foreground"
                    strokeWidth={1}
                  />
                  <span className="text-primary font-bold flex-1 whitespace-nowrap overflow-hidden overflow-ellipsis mr-4">
                    {subItem.label}
                  </span>
                  <span className="w-fit text-muted-foreground font-light shrink-0">
                    ({subItem.quantity})
                  </span>
                </div>
              ))} */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CategoriesFilter;
