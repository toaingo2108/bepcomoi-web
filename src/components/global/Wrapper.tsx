import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}
const Wrapper = ({ children, className, ...props }: WrapperProps) => {
  return (
    <div
      className={cn("max-w-screen-xl mx-auto lg:px-8 md:px-6 px-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Wrapper;
