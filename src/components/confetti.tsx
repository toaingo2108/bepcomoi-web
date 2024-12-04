"use client";

import React, { useEffect, useState } from "react";
import ReactConfetti from "react-dom-confetti";

const Confetti = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);
  return (
    <div
      className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center"
      aria-hidden="true"
    >
      <ReactConfetti
        active={showConfetti}
        config={{
          elementCount: 200,
          spread: 90,
        }}
      />
    </div>
  );
};

export default Confetti;
