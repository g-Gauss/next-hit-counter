"use client";
import React from "react";

function CensoredButton({ children }) {
  const [isCensored, setIsCensored] = React.useState(true);
  return (
    <button
      onClick={() => setIsCensored(!isCensored)}
      className={isCensored ? "censored" : undefined}
    >
      {children}
    </button>
  );
}

export default CensoredButton;
