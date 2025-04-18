import { JungleButton, SafariButton } from "@/components/ui";
import { SettingsContext } from "@/contexts";
import React, { useContext } from "react";

/**
 * @typedef {React.ButtonHTMLAttributes<HTMLButtonElement> & {
 *   children: React.ReactNode
 * }} Button
 */

/**
 * @param {Button} props
 */
export const Button = ({ children, ...props }) => {
  const { settings } = useContext(SettingsContext);
  const theme = settings.theme;

  switch (theme) {
    case "jungle":
      return <JungleButton {...props}>{children}</JungleButton>;
    case "safari":
    default:
      return <SafariButton {...props}>{children}</SafariButton>;
  }
};
