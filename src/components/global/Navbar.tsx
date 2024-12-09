"use client";

import React, { useMemo } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Menu from "./Menu";
import Cart from "./Cart";
import Search from "./Search";
import MenuMobile from "./MenuMobile";
import Link from "next/link";
import { Category } from "@/types/category";
import { menuItems } from "@/lib/menu";

interface NavbarProps {
  categories: Category[];
}
const Navbar = ({ categories }: NavbarProps) => {
  const menuItemsData = useMemo(() => {
    const index = menuItems.findIndex((item) => item.href === "/cua-hang");
    if (index === -1) return menuItems;
    else {
      const newMenuItems = [...menuItems];
      newMenuItems[index].subItems = categories.map((category) => ({
        name: category.name,
        href: `/cua-hang?c=${category.slug}`,
      }));
      return newMenuItems;
    }
  }, [categories]);

  return (
    <div className="bg-white py-4 lg:sticky relative top-0 z-10 flex">
      <Wrapper className="lg:grid lg:grid-cols-10 flex justify-between w-full">
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
        <div className="col-span-8 lg:flex items-center hidden">
          <Menu menuItems={menuItemsData} />
        </div>
        <div className="flex items-center justify-end space-x-1">
          <Search />
          <Cart />
          <MenuMobile menuItems={menuItemsData} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
