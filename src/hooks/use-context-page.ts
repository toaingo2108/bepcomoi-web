"use client";

import { PageContext } from "@/components/page-context";
import { useContext } from "react";

const useContextPage = () => {
  const values = useContext(PageContext);

  return values;
};

export default useContextPage;
