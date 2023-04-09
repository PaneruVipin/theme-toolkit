import React, { memo, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { colors } from "./colors";

const themeProvider = ({ children, ...props }) => {
  const [theme, setTheme1] = useState({});
  const setTheme = (theme) => {
    setTheme1(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  useEffect(() => {
    const newTheme = {
      ...colors[0],
      gradiant: " bg-gradient-to-br ",
      ...JSON.parse(localStorage.getItem("theme")),
    };
    setTheme1(newTheme);
  }, []);
  const defaultContext = {
    theme,
    setTheme,
    setTheme1,
  };

  return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(themeProvider);

export const ThemeContext = createContext();