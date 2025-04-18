import React from "react";
import { BaseButton } from "@/components/ui";

export const SafariButton = ({ children, className, ...props }) => {
  return (
    <BaseButton
      className={`bg-orange-300 text-black font-sans dark:bg-orange-700 dark:text-white font-bold ${className}`}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
