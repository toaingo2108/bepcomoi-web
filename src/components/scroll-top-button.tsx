"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowUpToLineIcon } from "lucide-react";

const ScrollTopButton = () => {
  const [isShow, setIsShow] = useState(false);

  const handleScrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = document.documentElement;

      if (scrollTop > clientHeight) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      onClick={handleScrollToTop}
      variant="secondary"
      size="icon"
      className={cn("rounded-full", !isShow && "hidden")}
    >
      <ArrowUpToLineIcon className="h-4 w-4 text-muted-foreground" />
    </Button>
  );
};

export default ScrollTopButton;
