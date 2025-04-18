import { BaseButton } from "@/components/ui";
import { useEffect, useRef, useState } from "react";

export const JungleButton = ({ children, className, ...props }) => {
  const buttonRef = useRef();
  const [marginTop, setMarginTop] = useState("auto");

  useEffect(() => {
    if (buttonRef.current) {
      const width = buttonRef.current.offsetWidth;
      setMarginTop(`${Math.round(width / 3)}px`);
    }
  }, []);

  return (
    <span ref={buttonRef} style={{ marginTop }}>
      <BaseButton
        className={`bg-green-300 text-purple-700 rotate-90 hover:rotate-0 font-mono dark:bg-green-700 dark:text-purple-200 font-normal ${className}`}
        {...props}
      >
        {children}
      </BaseButton>
    </span>
  );
};
