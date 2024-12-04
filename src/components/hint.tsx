import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface HintProps {
  description?: string | React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  sideOffset?: number;
  children: React.ReactNode;
}
export default function Hint({
  children,
  description,
  side = "bottom",
  sideOffset = 4,
}: HintProps) {
  if (!description) {
    return <>{children}</>;
  }

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} defaultOpen={false}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          className="text-xs max-w-[220px] break-words"
        >
          {description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
