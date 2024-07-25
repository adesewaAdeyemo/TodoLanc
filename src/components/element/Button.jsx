import React from "react";

export default function Button({ children, className, ...props }) {
  return props.cancel ? (
    <button
      className={`ml-auto text-slate-400 hover:text-slate-500 ${className}`}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  ) : (
    <button
      className={`bg-cyan-800 text-white rounded-md px-4 py-1 hover:bg-transparent hover:text-cyan-800 hover:border-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
