
import React from 'react';

export default function Button({ type = "button", className, children, ...props }) {
  return (
    <button
      type={type}
      className={`rounded-[13.618px] border border-[#56229E] bg-[#55229E] w-full h-[70px] text-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}






