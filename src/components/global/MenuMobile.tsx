import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ChevronRightIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuItemType } from "@/lib/menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface MenuMobileProps {
  menuItems: MenuItemType[];
}
const MenuMobile = ({ menuItems }: MenuMobileProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="flex lg:hidden shrink-0">
          <MenuIcon />
          {/* <XIcon /> */}
        </Button>
      </SheetTrigger>
      <SheetContent className="pr-0">
        <div className="h-full w-full overflow-y-scroll">
          <div className="flex flex-col mt-4 mr-8">
            <Accordion type="multiple">
              {menuItems.map((item) => (
                <AccordionItem key={item.href} value={item.href}>
                  <AccordionTrigger className="hover:no-underline py-0" hideIcon={!item.subItems}>
                    <SheetClose asChild>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                            className:
                              "rounded-none justify-start hover:bg-transparent hover:underline px-0",
                          })
                        )}
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  </AccordionTrigger>
                  {item.subItems && (
                    <AccordionContent className="flex flex-col">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          className={cn(
                            buttonVariants({
                              variant: "ghost",
                              className:
                                "rounded-none justify-start hover:bg-transparent hover:underline px-0",
                            })
                          )}
                          href={subItem.href}
                        >
                          <ChevronRightIcon className="w-4 h-4 mr-1.5 text-muted-foreground" />{" "}
                          {subItem.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
