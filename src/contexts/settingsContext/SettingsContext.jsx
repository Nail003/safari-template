import React, { createContext, useEffect, useState } from "react";

export const THEMES = {
  safari: "safari",
  jungle: "jungle",
};
export const MODES = {
  dark: "dark",
  light: "light",
};

/** @typedef {Object} Settings
 *  @property {keyof typeof THEMES} theme
 *  @property {keyof typeof MODES} mode
 */

/** @typedef {Object} SettingsContextType
 *  @property {Settings} settings
 *  @property {React.Dispatch<React.SetStateAction<Settings>>} setSettings
 */

const STORE_NAME = "settings";
const INITIAL_SETTINGS = {
  theme: THEMES.safari,
  mode: MODES.light,
};

/** @type {React.Context<SettingsContextType>} */
export const SettingsContext = createContext({
  settings: INITIAL_SETTINGS,
  setSettings: () => {},
});

/**
 * @param {{ children: React.ReactNode }} props
 */
export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(INITIAL_SETTINGS);

  useEffect(() => {
    // Retrive stored settings
    try {
      const storedSettings = JSON.parse(localStorage.getItem(STORE_NAME));
      if (storedSettings) setSettings(storedSettings);
    } catch (_) {
      console.log(
        "Stored Settings values for app settings could not be initialized"
      );
    }
  }, []);

  useEffect(() => {
    // Store settings in local storage
    try {
      localStorage.setItem(STORE_NAME, JSON.stringify(settings));
    } catch (_) {
      console.log("Could not store app settings in local storage");
    }
  }, [settings]);

  useEffect(() => {
    // Change app mode
    const isDarkMode = settings.mode === MODES.dark;
    if (isDarkMode) {
      document.documentElement.classList.add(MODES.dark);
      document.documentElement.classList.remove(MODES.light);
    } else {
      document.documentElement.classList.remove(MODES.dark);
      document.documentElement.classList.add(MODES.light);
    }
  }, [settings.mode]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
