"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { FilterIcon } from "lucide-react";
import CategoriesFilter from "./CategoriesFilter";
import { Category } from "@/types/category";

interface Props {
  categories?: Category[];
}
const CategoriesFilterMobile = ({ categories }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="icon" className="flex xl:hidden mb-4">
          <FilterIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" sideOffset={-40} className="w-fit">
        <CategoriesFilter categories={categories || []} onItemClick={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  );
};

export default CategoriesFilterMobile;
