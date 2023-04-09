import React from "react"
import { toggleDarkMode } from "./darkMode";

export function DarkModeSwitcher ({ children }) {
  return <div onClick={toggleDarkMode}>{children}</div>;
};