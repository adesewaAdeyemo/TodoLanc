import React from "react";

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-cyan-800 text-white rounded-md px-4 py-1 hover:bg-transparent hover:text-cyan-800 hover:border-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
