"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { cn } from "@/lib/utils";
import { MenuItemType } from "@/lib/menu";

interface MenuProps {
  menuItems: MenuItemType[];
}
const Menu = ({ menuItems }: MenuProps) => {
  return (
    <div className="flex items-center justify-center flex-1 py-4">
      {menuItems.map((item) => (
        <HoverCard openDelay={0} closeDelay={0} key={item.name}>
          <HoverCardTrigger asChild>
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                buttonVariants({
                  variant: "link",
                  className:
                    "group hover:no-underline text-black hover:text-primary font-bold text-base",
                })
              )}
            >
              {item.name}{" "}
              {item.subItems && (
                <ChevronDownIcon className="h-4 w-4 ml-1.5 text-muted-foreground group-hover:text-primary" />
              )}
            </Link>
          </HoverCardTrigger>
          {item.subItems && (
            <HoverCardContent className="rounded-none p-0 w-60" sideOffset={0}>
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className={cn(
                    buttonVariants({
                      variant: "link",
                      className:
                        "hover:no-underline text-wrap text-black hover:text-primary font-bold w-full flex !justify-start h-fit px-4 py-3 text-base",
                    })
                  )}
                >
                  {subItem.name}
                </Link>
              ))}
            </HoverCardContent>
          )}
        </HoverCard>
      ))}
    </div>
  );
};

export default Menu;
