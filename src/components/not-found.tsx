import React from "react";
import Wrapper from "./global/Wrapper";
import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}
const NotFound = ({ children }: Props) => {
  return (
    <Wrapper className="py-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/logo.png" width={200} height={200} alt="404" />
        <p className="text-primary text-lg font-bold">{children ?? "Không tìm thấy"}</p>
      </div>
    </Wrapper>
  );
};

export default NotFound;
