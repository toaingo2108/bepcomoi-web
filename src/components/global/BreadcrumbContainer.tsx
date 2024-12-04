"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronsRight } from "lucide-react";
import Wrapper from "./Wrapper";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BreadcrumbContainerProps {
  data: { href?: string; label?: string }[];
}
const BreadcrumbContainer = ({ data }: BreadcrumbContainerProps) => {
  const [showShadow, setShowShadow] = useState(false);

  const breadcrumbData = useMemo(() => data.filter((item) => !!item.label), [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Breadcrumb
      className={cn(
        "lg:sticky relative lg:top-[80px] pb-4 bg-white z-[1] transition-shadow",
        showShadow && "shadow-2xl"
      )}
    >
      <Wrapper>
        <BreadcrumbList>
          {breadcrumbData.map((item, index) => (
            <React.Fragment key={(item.href ?? "") + item.label}>
              {item.href ? (
                <BreadcrumbItem className="text-xs text-primary underline hover:no-underline">
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbPage className="text-xs text-muted-foreground">
                  {item.label}
                </BreadcrumbPage>
              )}
              {index !== breadcrumbData.length - 1 && (
                <BreadcrumbSeparator>
                  <ChevronsRight />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Wrapper>
    </Breadcrumb>
  );
};

export default BreadcrumbContainer;
