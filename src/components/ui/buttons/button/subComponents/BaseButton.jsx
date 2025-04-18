import React from "react";

/**
 * @typedef {React.ButtonHTMLAttributes<HTMLButtonElement> & {
 *   children: React.ReactNode
 * }} BaseButton
 */

/**
 * @param {BaseButton} props
 */
export const BaseButton = ({ children, className = "", ...props }) => {
  return (
    <button
      type="button"
      className={`px-2 py-1 rounded-md text-sm sm:text-xl hover:scale-105 transition-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
