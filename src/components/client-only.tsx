"use client";

import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}
const ClientOnly = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
};

export default ClientOnly;
