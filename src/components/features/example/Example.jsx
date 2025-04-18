import { Button } from "@/components/ui";
import { MODES, SettingsContext, THEMES } from "@/contexts";
import React, { useContext } from "react";

export const Example = () => {
  const { setSettings } = useContext(SettingsContext);

  return (
    <div className="p-4 flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center">
      <Button
        onClick={() => {
          setSettings((prev) => ({ ...prev, theme: THEMES.safari }));
        }}
      >
        Set Safari Theme
      </Button>
      <Button
        onClick={() => {
          setSettings((prev) => ({ ...prev, theme: THEMES.jungle }));
        }}
      >
        Set Jungle Theme
      </Button>
      <Button
        onClick={() => {
          setSettings((prev) => ({ ...prev, mode: MODES.dark }));
        }}
      >
        Set Dark Mode
      </Button>
      <Button
        onClick={() => {
          setSettings((prev) => ({ ...prev, mode: MODES.light }));
        }}
      >
        Set Light Mode
      </Button>
    </div>
  );
};
