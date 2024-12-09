"use client";

import React from "react";
import Iconify from "./iconify";
import Link from "next/link";

const SpeedDialComponent = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-10">
      <Link href="https://www.facebook.com/profile.php?id=61569239116841" target="_blank">
        <Iconify ssr icon="logos:facebook" width={40} height={40} />
      </Link>
      <Link href="https://m.me/506853549175778" target="_blank">
        <Iconify ssr icon="logos:messenger" width={40} height={40} />
      </Link>
    </div>
  );
};

export default SpeedDialComponent;
